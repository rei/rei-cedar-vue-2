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
        ref="itemListEl"
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
<script>
      // <!-- TODO: remove scoped slot vue-router-ish support? just use emit/prevent pattern? -->
import {
  defineComponent, computed, ref, watch,
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
    const truncate = ref(props.truncationEnabled && props.items.length > 2);

    watch(() => props.items, () => {
      truncate.value = props.truncationEnabled && props.items.length > 2;
    });

    const itemListEl = ref(null);
    const handleEllipsisClick = () => {
      truncate.value = false;
      setTimeout(() => {
        // TODO: ref does not seem to update children here?
        itemListEl.value.children[0].focus();
      }, 1000);
    };
    const ellipsisLabel = computed(() => {
      const s = (props.items.length - 2) > 1 ? 's' : '';
      return `show ${props.items.length - 2} more navigation level${s}`;
    });

    return {
      truncate,
      handleEllipsisClick,
      itemListEl,
      ellipsisLabel,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrBreadcrumb.scss">
</style>
