<template>
  <div
    :class="[modifierClass, compactClass]"
    :ref="`accordion-${id}`"
  >
    <div
      role="group"
      :aria-labelledby="`${id}-label`"
    >
      <button
        :class="$style['cdr-accordion-item__button']"
        :id="id"
        @click="toggle"
        :aria-expanded="`${isOpen}`"
        :aria-controls="`${id}-collapsible`"
        v-bind="$attrs"
      >
        <span
          :class="$style['cdr-accordion-item__label']"
          :id="`${id}-label`">
          <!-- <span class="sr-only">
            {{ a11yPrefix }}
          </span> -->
          {{ label }}
        </span>
        <icon-caret-down
          :class="[
            $style['cdr-accordion-item__icon'],
            isOpenClass,
          ]"
          :modifier="compact ? 'sm' : null" />
      </button>
    </div>
    <div
      :class="[
        $style['cdr-accordion-item__content-container'],
        isOpenClass,
      ]"
      :style="`max-height:${maxHeight}`">
      <div
        :class="[$style['cdr-accordion-item__content'], isOpenClass]"
        :aria-hidden="`${!isOpen}`"
        :id="`${id}-collapsible`"
      >
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { IconCaretDown } from '@rei/cdr-icon';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrAccordionItem',
  components: {
    IconCaretDown,
  },
  mixins: [modifier],
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    show: {
      type: String,
      default: false,
    },
  },
  data() {
    return {
      borderAligned: this.$parent.$props.borderAligned,
      compact: this.$parent.$props.compact,
      contentHeight: 0,
      isOpen: this.$parent.$props.showAll || this.show,
    }
  },
  computed: {
    baseClass() {
      return 'cdr-accordion-item';
    },
    compactClass() {
      return this.compact ? this.modifyClassName(this.baseClass, 'compact') : null;
    },
    isOpenClass() {
      return this.isOpen ? 'open' : null;
    },
    a11yPrefix() {
      return this.isOpen ? 'Hide' : 'Show';
    },
    maxHeight() {
      return this.isOpen ? `${this.contentHeight}px` : '0';
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    const ref = `accordion-${this.$props.id}`;
    this.contentHeight = this.$refs[ref].childNodes[2].childNodes[0].clientHeight;
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrAccordionItem.pcss';
</style>
