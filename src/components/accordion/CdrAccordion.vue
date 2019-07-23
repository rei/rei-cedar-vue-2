<template>
  <div
    :class="[modifierClass, styleClass, focusedClass]"
    :id="`${id}-accordion`"
    :ref="`accordion-container`"
  >
    <button
      :class="$style['cdr-accordion__button']"
      :id="id"
      @click="$emit('accordion-toggle', $event);"
      @focus="focused = true"
      @blur="focused = false"
      :aria-expanded="`${show}`"
      :aria-controls="`${id}-collapsible`"
    >
      <span
        :class="$style['cdr-accordion__label']"
        :id="`${id}-label`"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </span>
      <icon-caret-down
        :class="[
          $style['cdr-accordion__icon'],
          isOpenClass,
        ]"
        :size="compact ? 'small' : null"
      />
    </button>
    <div
      :class="[
        $style['cdr-accordion__content-container'],
        isOpenClass,
      ]"
      :style="{ 'max-height': maxHeight }"
    >
      <div
        :class="[
          $style['cdr-accordion__content'],
          isOpenClass
        ]"
        :aria-hidden="`${!show}`"
        :id="`${id}-collapsible`"
        ref="accordion-content"
      >
        <!-- @slot default slot for accordion content -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { IconCaretDown } from 'componentsdir/icon/build/main';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrAccordion',
  components: {
    IconCaretDown,
  },
  mixins: [modifier],
  props: {
    /**
     * The unique id of an accordion.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The readable text on the accordion button.
     */
    label: {
      type: String,
      required: false,
    },
    /**
     * Toggle this value to open/close the accordion.
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets a compact style.
     */
    compact: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets a border-aligned style.
     */
    borderAligned: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      maxHeight: 0,
      focused: false,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-accordion';
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
      return this.show ? 'open' : 'closed';
    },
    delay() {
      return this.show ? 300 : 50;
    },
  },
  watch: {
    show() {
      this.maxHeight = `${this.$refs['accordion-content'].clientHeight}px`;

      setTimeout(() => {
        this.maxHeight = this.show ? 'none' : 0;
      }, this.delay);
    },
  },
  mounted() {
    if (this.show) {
      this.maxHeight = 'none';
    }
  },
};
</script>

<style lang="scss" module>
  @import './styles/CdrAccordion.scss';
</style>
