import modifier from 'mixinsdir/modifier';
import propValidator from 'srcdir/utils/propValidator';
import CdrRow from 'componentsdir/grid/CdrRow'; // TODO: is this import shakeable?
import cs from 'classnames';
import style from './styles/CdrCol.scss';

export default {
  name: 'CdrCol',
  components: { CdrRow },
  mixins: [modifier],
  inject: {
    rowType: { default: 'normal' },
  },
  inheritAttrs: false,
  props: {
    /**
     * Number of columns (out of 12) the column should span. Functions like bootstrap col-* classes.
     * Overrides widths set by "cols" prop on CdrRow.
     * Possible values: {1-12}
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    span: {
      type: String,
      validator: value => propValidator(
        value,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * Number of columns (out of 12) of empty space to add left of this column.
     * Possible values: {0-12}
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    offsetLeft: {
      type: String,
      validator: value => propValidator(
        value,
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * Number of columns (out of 12) of empty space to add right of this column.
     * Possible values: {0-12}
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    offsetRight: {
      type: String,
      validator: value => propValidator(
        value,
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * How the column should align (overrides CdrRow alignment). See CSS flexbox align-self.
     * Possible values: {top, middle, bottom, stretch}.
     * Also accepts responsive values with `@breakpoint`: "middle@sm"
     */
    alignSelf: {
      type: String,
      validator: value => propValidator(
        value,
        ['top', 'middle', 'bottom', 'stretch'],
      ),
    },
    /**
     * Makes the column act as a CdrRow. Setting this to true exposes all props of CdrRow in addition to cdr-col props.
     */
    isRow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    isList() {
      return this.rowType === 'list';
    },
    spanClass() {
      const classStr = [];

      if (this.span) {
        this.span.split(' ').forEach((val) => {
          classStr.push(style[`cdr-col_span${val}`]);
        });
      }

      return classStr.join(' ');
    },
    offsetLeftClass() {
      const classStr = [];

      if (this.offsetLeft) {
        this.offsetLeft.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', `offsetLeft${val}`));
        });
      }

      return classStr.join(' ');
    },
    offsetRightClass() {
      const classStr = [];

      if (this.offsetRight) {
        this.offsetRight.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', `offsetRight${val}`));
        });
      }

      return classStr.join(' ');
    },
    alignSelfClass() {
      const classStr = [];

      if (this.alignSelf) {
        this.alignSelf.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', val));
        });
      }

      return classStr.join(' ');
    },
  },
  render() {
    let colEl;
    if (!this.isRow && !this.isList) {
      colEl = (
        <div
          class={cs(
            style['cdr-col'],
            this.spanClass,
            this.offsetLeftClass,
            this.offsetRightClass,
            this.alignSelfClass,
          )}
        >
          <div class={style['cdr-col__content']}>
            {this.$slots.default}
          </div>
        </div>
      );
    } else if (!this.isRow && this.isList) {
      colEl = (
        <li
          class={cs(
            style['cdr-col'],
            this.spanClass,
            this.offsetLeftClass,
            this.offsetRightClass,
            this.alignSelfClass,
          )}
        >
          <div class={style['cdr-col__content']}>
            {this.$slots.default}
          </div>
        </li>
      );
    } else if (this.isRow && this.isList) {
      colEl = (
        <li
          class={cs(
            style['cdr-row'],
            style['cdr-col'],
            this.spanClass,
            this.offsetLeftClass,
            this.offsetRightClass,
            this.alignSelfClass,
          )}
        >
          <cdr-row
            class={style['cdr-col']}
            {...this.$attrs}
          >
            {this.$slots.default}
          </cdr-row>
        </li>
      );
    } else {
      colEl = (
          <cdr-row
            class={cs(
              style['cdr-col'],
              this.spanClass,
              this.offsetLeftClass,
              this.offsetRightClass,
              this.alignSelfClass,
            )}
            {...this.$attrs}
          >
            {this.$slots.default}
          </cdr-row>
      );
    }
    return colEl;
  },
};
