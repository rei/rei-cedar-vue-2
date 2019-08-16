import s from './styles/CdrBreadcrumb.scss';
import modifier from 'mixinsdir/modifier';
import breakpoints from 'mixinsdir/breakpoints';

export default {
  name: 'CdrBreadcrumb',
  mixins: [modifier, breakpoints],
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
      shouldTruncate: this.truncationEnabled && this.items.length > 2,
      style: s,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-breadcrumb';
    },
    truncate() {
      return this.shouldTruncate;
    },
    ellipsis() {
      return this.truncate ? (<li
        onClick={this.shouldTruncate = false}
        class={s['cdr-breadcrumb__item']}
      >
        <button
          aria-expanded="false"
          class={s['cdr-breadcrumb__ellipses']}
          aria-label="ellipsis"
        >
          <svg
            class={s['cdr-breadcrumb__ellipses-icon']}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>
              ellipsis
            </title>
            <path d="M17.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </button>
        <span
          class={s['cdr-breadcrumb__delimiter']}
          aria-hidden="true"
        >
          /
        </span>
      </li>) : '';
    },
    listItems() {
      return this.items.map((breadcrumb, index) => {
        const delimiter = index < this.items.length - 1 ? (<span
          class={s['cdr-breadcrumb__delimiter']}
          aria-hidden="true"
        >
          /
        </span>) : ''
        
        return (<li
          class={s['cdr-breadcrumb__item']}
          key={breadcrumb.item.id || breadcrumb.item.name.replace(/ /g, '-').toLowerCase()}
          v-show="!truncate || (index >= items.length - 2)"
        >
          <a
            class={s['cdr-breadcrumb__link']}
            href={breadcrumb.item.url}
          >
            { breadcrumb.item.name }
          </a>
          {delimiter}
        </li>);
      })
    }
  },
  render(h) {
    return (<nav
      ref="container"
      class={this.modifierClass}
      aria-label="Breadcrumb"
    >
      <ol
        ref="cdrBreadcrumbList"
        class={s['cdr-breadcrumb__list']}
      >
        {this.ellipsis}
        {this.listItems}
      </ol>
    </nav>);
  },
};