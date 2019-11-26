import debounce from 'lodash-es/debounce';
import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import style from './styles/CdrDataTable.scss';

/**
 * Cedar 2 compfor for data table
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrDataTable',
  mixins: [modifier, space],
  props: {
    id: {
      type: String,
      required: false,
    },
    colHeaders: {
      type: [Array, Boolean],
      default: false,
    },
    rowHeaders: {
      type: [Array, Boolean],
      default: false,
    },
    rowData: {
      type: Array,
      default: () => [],
    },
    keyOrder: {
      type: Array,
      default: () => [],
    },
    caption: {
      type: String,
      required: false,
    },
    constrainWidth: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cols: 0,
      clientWidth: 0,
      scrollWidth: 0,
      hasColHeaders: false,
      hasRowHeaders: false,
      headerRowHeight: 0,
      rowHeights: null,
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-data-table';
    },
    lockedCol() {
      return this.rowData.length > 0 && this.cols > 2 && this.hasRowHeaders;
    },
    isScrolling() {
      return this.scrollWidth > this.clientWidth && this.lockedCol;
    },
    headerRowAlignHeight() {
      return this.headerRowHeight ? `${this.headerRowHeight + 1}px` : this.headerRowHeight; /* eslint-disable-line */
    },
  },
  mounted() {
    this.hasColHeaders = typeof this.colHeaders === 'boolean'
      ? this.colHeaders : this.colHeaders.length > 0;

    this.hasRowHeaders = typeof this.rowHeaders === 'boolean'
      ? this.rowHeaders : this.rowHeaders.length > 0;

    if (this.rowData.length > 0) {
      this.cols = this.$refs['row-0'].children.length;
    }

    if (this.lockedCol) {
      window.addEventListener('resize', debounce(() => {
        this.rowHeights = null;
        this.$nextTick(() => {
          this.checkScroll();
          this.setRowsContentHeight();
        });
      }, 250));

      this.$nextTick(() => {
        this.checkScroll();
        this.setRowsContentHeight();
      });
    }
  },
  methods: {
    checkScroll() {
      const scrollContainer = this.$refs['scroll-container'];

      if (scrollContainer !== undefined) {
        this.clientWidth = scrollContainer.clientWidth;
        this.scrollWidth = scrollContainer.scrollWidth;
      }
    },
    getCellContent(row, key) {
      return row[key] || '';
    },
    setRowsContentHeight() {
      const rowContentHeights = [];
      const numRows = this.rowData.length;

      /* main table */
      for (let i = 0; i < numRows; i += 1) {
        const heights = {
          th: this.$refs[`row-${i}`].children[0].offsetHeight || 1,
          td: this.$refs[`row-${i}`].children[1].offsetHeight || 0,
        };

        rowContentHeights.push(heights);
      }

      if (this.hasColHeaders) {
        this.headerRowHeight = this.$refs['row-col-headers'].children[1].offsetHeight;
      }

      this.rowHeights = rowContentHeights;
    },
    getRowAlignHeight(elem, index) {
      // The idea here is only to return a height when it needs it, otherwise return null
      if (this.rowHeights === null) {
        return null;
      }

      const row = this.rowHeights[index];
      const alreadyAligned = row ? row.th - row.td === 1 : true;

      if (alreadyAligned) {
        return null;
      }

      const elemToChange = row.th > row.td ? 'td' : 'th';

      if (elem !== elemToChange) {
        return null;
      }

      return elemToChange === 'td' ? `${row.th - 1}px` : `${row.td + 1}px`;
    },
  },
  render() {
    return (
      <div
        class={clsx(
          this.modifierClass,
          this.space,
        )}
      >
        { this.caption
          && <span
            class={this.style['cdr-data-table__caption']}
            aria-hidden="true"
          >
            { this.caption }
          </span>
        }

        <div
          class={clsx(
            this.style['cdr-data-table__scroll-container'],
            { 'locked-col': this.lockedCol },
            { 'is-scrolling': this.isScrolling },
          )}
          ref="scroll-container"
        >
          <table
            class={clsx(
              this.style['cdr-data-table__content'],
              { 'constrain-width': this.constrainWidth },
            )}
            id={this.id ? this.id : null}
          >
            {this.caption
              && <caption class={this.style['cdr-data-table__caption-sr']}>
                { this.caption }
              </caption>
            }

            {this.hasColHeaders
              && <thead>
                {this.$slots.thead
                  || <tr
                    ref="row-col-headers"
                  >
                    <th
                      class="empty"
                      v-show={this.hasRowHeaders}
                      scope="col"
                      style={{ height: this.headerRowAlignHeight }}
                    />
                    {this.colHeaders.map((header, index) => (<th
                        key={`header-row-col-${index}`}
                        scope="col"
                      >
                        { header }
                      </th>))}
                  </tr>
                }
              </thead>
            }

            <tbody ref="table-body">
              {this.$slots.tbody
                || this.rowData.map((row, rowIndex) => (
                    <tr
                      key={`row-${rowIndex}`}
                      ref={`row-${rowIndex}`}
                    >
                    {this.hasRowHeaders
                      && (<th
                        scope="row"
                        ref={`row-${rowIndex}-th`}
                        class={this.style['align-row-header-content']}
                        style={{ height: this.getRowAlignHeight('th', rowIndex) }}
                      >
                        { this.rowHeaders[rowIndex] }
                      </th>)
                    }

                    {this.keyOrder.map((key, index) => (<td
                        key={`td-${index}-${key}`}
                        style={{ height: this.getRowAlignHeight('td', rowIndex) }}
                      >
                        { this.getCellContent(row, key) }
                      </td>))}
                    </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};
