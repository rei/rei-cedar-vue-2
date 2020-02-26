import clsx from 'clsx';
import CdrIcon from '../icon/CdrIcon';
import modifier from '../../mixins/modifier';
import style from './styles/CdrBreadcrumb.scss';

export default {
  name: 'CdrBreadcrumb',
  components: {
    CdrIcon,
  },
  mixins: [modifier],
  props: {
    /**
     * Required. List of source breadcrumb property objects
     *
     * {
     *   displayText: Breadcrumb Display Text
     *   url: location breadcrumb should navigate on click
     * }
     */
    items: {
      type: Array,
      default: () => [],
      validator: (value) => {
        if (value.length && value.length > 0) {
          for (let i = 0; i < value.length; i += 1) {
            if (!(typeof value[i].item === 'object')) {
              console.error('Breadcrumb items array missing item key at index ', i); // eslint-disable-line no-console
              return false;
            }
            if (!Object.hasOwnProperty.call(value[i].item, 'name')) {
              console.error('Breadcrumb items array is missing item.name value at index ', i); // eslint-disable-line no-console
              return false;
            }
          }
        }
        return true;
      },
    },
    /**
     * Flag to track container width threshold exceeded
     */
    truncationEnabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      truncate: this.truncationEnabled && this.items.length > 2,
      style,
      componentID: Math.random().toString(36).substr(2, 9),
    };
  },
  computed: {
    baseClass() {
      return 'cdr-breadcrumb';
    },
    ellipsis() {
      return this.truncate ? (<li
        class={this.style['cdr-breadcrumb__item']}
      >
        <button
          onClick={this.handleEllipsisClick}
          ref="ellipse"
          aria-expanded="false"
          class={this.style['cdr-breadcrumb__ellipses']}
          aria-controls={`${this.componentID}List`}
          aria-label={`show ${this.items.length - 2} more navigation level${(this.items.length - 2) > 1 ? 's' : ''}`} // eslint-disable-line max-len
        >
          <cdr-icon
            class={this.style['cdr-breadcrumb__ellipses-icon']}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line max-len */}
            <path d="M17.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </cdr-icon>
        </button>
        <span
          class={this.style['cdr-breadcrumb__delimiter']}
          aria-hidden="true"
        >
          /
        </span>
      </li>) : '';
    },
    listItems() {
      return this.items.map((breadcrumb, index) => {
        const delimiter = index < this.items.length - 1 ? (<span
          class={this.style['cdr-breadcrumb__delimiter']}
          aria-hidden="true"
        >
          /
        </span>) : '';

        const ref = index === 0 ? 'firstBreadcrumb' : null;
        const LinkTag = index < this.items.length - 2 ? 'a' : 'strong';

        return (<li
          class={this.style['cdr-breadcrumb__item']}
          key={breadcrumb.item.id || breadcrumb.item.name.replace(/ /g, '-').toLowerCase()}
          v-show={!this.truncate || (index >= this.items.length - 2)}
        >
          {this.$scopedSlots.link
            ? this.$scopedSlots.link({
              class: this.style['cdr-breadcrumb__link'],
              href: breadcrumb.item.url,
              content: breadcrumb.item.name,
              ref,
            })
            : (<LinkTag
              class={this.style['cdr-breadcrumb__link']}
              ref={ref}
              href={breadcrumb.item.url}
              aria-current={index === this.items.length - 1 ? 'page' : undefined}
            >
              { breadcrumb.item.name }
            </LinkTag>)
          }
          {delimiter}
        </li>);
      });
    },
  },
  watch: {
    items() {
      this.truncate = this.truncationEnabled && this.items.length > 2;
    },
  },
  methods: {
    handleEllipsisClick() {
      this.truncate = false;
      this.$nextTick(() => { this.$refs.firstBreadcrumb.focus(); });
    },
  },
  render() {
    return (<nav
      ref="container"
      class={clsx(this.style[this.baseClass], this.modifierClass)}
      aria-label="breadcrumbs"
      >
      <ol
        id={`${this.componentID}List`}
        ref="cdrBreadcrumbList"
        class={this.style['cdr-breadcrumb__list']}
      >
        {this.ellipsis}
        {this.listItems}
      </ol>
    </nav>);
  },
};
