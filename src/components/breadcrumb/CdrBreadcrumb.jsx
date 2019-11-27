import modifier from '../../mixins/modifier';
import style from './styles/CdrBreadcrumb.scss';

export default {
  name: 'CdrBreadcrumb',
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
    };
  },
  watch: {
    items() {
      this.truncate = this.truncationEnabled && this.items.length > 2;
    },
  },
  computed: {
    baseClass() {
      return 'cdr-breadcrumb';
    },
    ellipsis() {
      return this.truncate ? (<li
        onClick={this.handleEllipsisClick}
        class={this.style['cdr-breadcrumb__item']}
        ref="ellipse"
      >
        <button
          aria-expanded="false"
          class={this.style['cdr-breadcrumb__ellipses']}
          aria-label="ellipsis"
        >
          <svg
            class={this.style['cdr-breadcrumb__ellipses-icon']}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>
              ellipsis
            </title>
            {/* eslint-disable-next-line max-len */}
            <path d="M17.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
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
        const attrs = {
          class: this.style['cdr-breadcrumb__link'],
        };
        if (index === this.items.length - 1) {
          attrs['aria-current'] = 'page';
        }

        return (<li
          class={this.style['cdr-breadcrumb__item']}
          key={breadcrumb.item.id || breadcrumb.item.name.replace(/ /g, '-').toLowerCase()}
          v-show={!this.truncate || (index >= this.items.length - 2)}
        >
          {this.$scopedSlots.link
            ? this.$scopedSlots.link({
              attrs,
              href: breadcrumb.item.url,
              content: breadcrumb.item.name,
            })
            : (<a
              {... { attrs: attrs }}
              href={breadcrumb.item.url}
            >
              { breadcrumb.item.name }
            </a>)
          }
          {delimiter}
        </li>);
      });
    },
  },
  methods: {
    handleEllipsisClick() {
      this.truncate = false;
    },
  },
  render() {
    return (<nav
      ref="container"
      class={this.modifierClass}
      aria-label="Breadcrumb"
    >
      <ol
        ref="cdrBreadcrumbList"
        class={this.style['cdr-breadcrumb__list']}
      >
        {this.ellipsis}
        {this.listItems}
      </ol>
    </nav>);
  },
};
