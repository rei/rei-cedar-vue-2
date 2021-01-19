<template>
  <nav
    class={clsx(this.style[this.baseClass], this.modifierClass)}
    aria-label="breadcrumbs"
  >
    <ol
      id={`${this.componentID}List`}
      ref="cdrBreadcrumbList"
      class={this.style['cdr-breadcrumb__list']}
    >

<!-- ELLIPSIS -->
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
          <span
            class={this.style['cdr-breadcrumb__ellipses-icon']}
            aria-hidden="true"
          >
            . . .
          </span>
        </button>
        <span
          class={this.style['cdr-breadcrumb__delimiter']}
          aria-hidden="true"
        >
          /
        </span>
      </li>) : '';


<!-- ITEMS -->
return this.items.map((breadcrumb, index) => {
  const delimiter = index < this.items.length - 1 ? (<span
    class={this.style['cdr-breadcrumb__delimiter']}
    aria-hidden="true"
  >
    /
  </span>) : '';

  return (<li
    class={clsx(
      this.style['cdr-breadcrumb__item'],
    )}
    key={breadcrumb.item.id || breadcrumb.item.name.replace(/ /g, '-').toLowerCase()}
    v-show={!this.truncate || (index >= this.items.length - 2)}
  >
    {this.$scopedSlots.link
      ? this.$scopedSlots.link({
        class: this.style['cdr-breadcrumb__link'],
        href: breadcrumb.item.url,
        content: breadcrumb.item.name,
      })
      : (<a
        class={this.style['cdr-breadcrumb__link']}
        href={breadcrumb.item.url}
      >
        { breadcrumb.item.name }
      </a>)
    }
    {delimiter}
  </li>);
});


    </ol>
  </nav>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch, nextTick } from 'vue';

import clsx from 'clsx';
import CdrIcon from '../icon/CdrIcon';
import { buildClass } from '../../utils/buildClass';
import style from './styles/CdrBreadcrumb.scss';

export default defineComponent({
  name: 'CdrBreadcrumb',
  components: {
    CdrIcon,
  },
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
    id: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    // TODO: need watcheffect or does this handle it?
    const truncate = ref(props.truncationEnabled && props.items.length > 2);

    watch(props.items, (items) => {
      truncat.value = props.truncationEnabled && items.length > 2;
    });

    const handleEllipsisClick() {
      truncate.value = false;
      nextTick(() => {
        // ????? TODO: how to get $el?
        this.$el.querySelector('li *').focus();
      });
    }

  }
});
</script>
