<template>
  <div
    :class="[modifierClass, styleClass, focusedClass]"
    :id="`${id}-accordion-item`"
    :ref="`accordion-${id}`"
  >
    <button
      :class="$style['cdr-accordion-item__button']"
      :id="id"
      @click="toggle"
      @focus="focused = true"
      @blur="focused = false"
      :aria-expanded="`${isOpen}`"
      :aria-controls="`${id}-collapsible`"
    >
      <span
        :class="$style['cdr-accordion-item__label']"
        :id="`${id}-label`"
      >
        {{ label }}
      </span>
      <icon-caret-down
        :class="[
          $style['cdr-accordion-item__icon'],
          isOpenClass,
        ]"
        :modifier="compact ? 'sm' : null"
      />
    </button>
    <div
      :class="[
        $style['cdr-accordion-item__content-container'],
        isOpenClass,
      ]"
      :style="{ 'max-height': maxHeight }"
    >
      <div
        :class="[
          $style['cdr-accordion-item__content'],
          isOpenClass
        ]"
        :aria-hidden="`${!isOpen}`"
        :id="`${id}-collapsible`"
      >
        <!-- @slot innerHTML on the inside of the accordion-item component -->
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import { IconCaretDown } from '@rei/cdr-icon';
import '@rei/cdr-icon/dist/cdr-icon.css';
import modifier from 'mixinsdir/modifier';
import { setTimeout } from 'core-js';

export default {
  name: 'CdrAccordionItem',
  components: {
    IconCaretDown,
  },
  mixins: [modifier],
  props: {
    /**
     * The unique id of an accordion-item.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The readable text on the accordion-item button.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * Sets the default isOpen state of the accordion-item, if show-all is false from cdr-accordion.
     */
    show: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['compact', 'borderAligned', 'showAll'],
  data() {
    return {
      maxHeight: 0,
      isOpen: this.showAll || this.show,
      focused: false,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-accordion-item';
    },
    styleClass() {
      const styles = [];

      if (this.compact) {
        styles.push(this.modifyClassName(this.baseClass, 'compact'));
      }

      if (this.borderAligned) {
        styles.push(this.modifyClassName(this.baseClass, 'border-aligned'));
      }

      return styles.join(' ');
    },
    focusedClass() {
      return this.focused ? this.modifyClassName(this.baseClass, 'focused') : null;
    },
    isOpenClass() {
      return this.isOpen ? 'open' : null;
    },
  },
  mounted() {
    if (this.isOpen) {
      this.maxHeight = 'none';
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      const ref = `accordion-${this.$props.id}`;
      this.maxHeight = `${this.$refs[ref].childNodes[2].childNodes[0].clientHeight}px`;
      const timeout = this.isOpen ? 300 : 50;

      setTimeout(() => {
        this.maxHeight = this.isOpen ? 'none' : 0;
      }, timeout);
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrAccordionItem.pcss';
</style>
