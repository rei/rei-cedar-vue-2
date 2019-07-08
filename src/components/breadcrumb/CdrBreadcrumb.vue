<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->

  <nav
    ref="container"
    :class="modifierClass"
    aria-label="Breadcrumb"
  >
    <ol
      ref="cdrBreadcrumbList"
      :class="$style['cdr-breadcrumb__list']"
    >
      <li
        v-if="truncate"
        @click="shouldTruncate = false"
        :class="$style['cdr-breadcrumb__item']"
      >
        <button
          aria-expanded="false"
          :class="$style['cdr-breadcrumb__ellipses']"
          aria-label="ellipsis"
        >
          <svg
            :class="$style['cdr-breadcrumb__ellipses-icon']"
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
          :class="$style['cdr-breadcrumb__delimiter']"
          aria-hidden="true"
        >
          /
        </span>
      </li>
      <li
        :class="$style['cdr-breadcrumb__item']"
        v-for="(breadcrumb, index) in items"
        :key="breadcrumb.item.id || breadcrumb.item.name.replace(/ /g, '-').toLowerCase()"
        v-show="!truncate || (index >= items.length - 2)"
      >
        <a
          :class="$style['cdr-breadcrumb__link']"
          :href="breadcrumb.item.url"
        >
          {{ breadcrumb.item.name }}
        </a>
        <span
          :class="$style['cdr-breadcrumb__delimiter']"
          aria-hidden="true"
          v-if="index < items.length - 1"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
/**
 * Cedar 2 component for breadcrumb
 *
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */

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
      shouldTruncate: this.truncationEnabled,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-breadcrumb';
    },
    truncate() {
      return this.shouldTruncate;
    },
  },
};
</script>

<style lang="scss" module>
  @import './styles/vars/CdrBreadcrumb.vars.scss';
  @import './styles/CdrBreadcrumb.scss';
</style>
