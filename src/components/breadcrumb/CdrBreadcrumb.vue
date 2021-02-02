<template>
  <nav
    :class="$style['cdr-breadcrumb']"
    :id="id"
    aria-label="breadcrumbs"
  >
    <ol
      :id="`${id}List`"
      :class="$style['cdr-breadcrumb__list']"
    >
      <li
        :class="$style['cdr-breadcrumb__item']"
        v-if="truncate"
      >
        <button
          @click="handleEllipsisClick"
          aria-expanded="false"
          :class="$style['cdr-breadcrumb__ellipses']"
          :aria-controls="`${id}List`"
          :aria-label="ellipsisLabel"
        >
          <span
            :class="$style['cdr-breadcrumb__ellipses-icon']"
            aria-hidden="true"
          >
            . . .
          </span>
        </button>
        <span
          :class="$style['cdr-breadcrumb__delimiter']"
          aria-hidden="true"
        >
          /
        </span>
      </li>

      <li
        v-for="(breadcrumb, index) in items"
        :class="$style['cdr-breadcrumb__item']"
        :key="breadcrumb.item.id || breadcrumb.item.name.replace(/ /g, '-').toLowerCase()"
        v-show="!truncate || (index >= items.length - 2)"
      >
        <slot
          name="link"
          :class="$style['cdr-breadcrumb__link']"
          :href="breadcrumb.item.url"
          :content="breadcrumb.item.name"
        >
          <a
            :class="$style['cdr-breadcrumb__link']"
            :href="breadcrumb.item.url"
            :ref="index ? null : firstItem"
          >
            {{ breadcrumb.item.name }}
          </a>
        </slot>

        <span
          v-if="index < items.length - 1"
          :class="$style['cdr-breadcrumb__delimiter']"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>
<script lang="ts">
import {
  defineComponent, computed, ref, watchEffect,
  // nextTick,
} from 'vue';

export default defineComponent({
  name: 'CdrBreadcrumb',
  props: {
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
  setup(props) {
    // TODO: need watcheffect or does this handle it?
    const truncate = ref(props.truncationEnabled && props.items.length > 2);

    watchEffect((items) => {
      truncate.value = props.truncationEnabled && items.length > 2;
    });

    const firstItem = ref(null);
    const handleEllipsisClick = () => {
      truncate.value = false;
      setTimeout(() => {
        // ????? TODO: how to get $el?
        console.log(firstItem);
        firstItem.value.focus();
      }, 1000);
    };
    const ellipsisLabel = computed(() => {
      const s = (props.items.length - 2) > 1 ? 's' : '';
      return `show ${props.items.length - 2} more navigation level${s}`;
    });

    return {
      truncate,
      handleEllipsisClick,
      firstItem,
      ellipsisLabel,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrBreadcrumb.scss">
</style>
