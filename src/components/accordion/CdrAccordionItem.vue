<template>
  <div
    :class="[modifierClass, styleClass, focusedClass]"
    :id="`${id}-accordion-item`"
    :ref="`accordion-container`"
  >
    <button
      :class="$style['cdr-accordion-item__button']"
      :id="id"
      @click="$emit('accordion-item-toggle', $event);"
      @focus="focused = true"
      @blur="focused = false"
      :aria-expanded="`${show}`"
      :aria-controls="`${id}-collapsible`"
    >
      <span
        :class="$style['cdr-accordion-item__label']"
        :id="`${id}-label`"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </span>
      <icon-caret-down
        :class="[
          $style['cdr-accordion-item__icon'],
          isOpenClass,
        ]"
        :size="compact ? 'small' : null"
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
        :aria-hidden="`${!show}`"
        :id="`${id}-collapsible`"
        ref="accordion-content"
      >
        <!-- @slot innerHTML on the inside of the accordion-item component -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { IconCaretDown } from 'componentsdir/icon/build/main';
import modifier from 'mixinsdir/modifier';

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
      required: false,
    },
    /**
     * Sets the default isOpen state of the accordion-item, if show-all is false from cdr-accordion.
     */
    show: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
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
      return this.show ? 'open' : 'closed';
    },
    delay() {
      // text fades out before the accordion closes
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
  @import './styles/CdrAccordionItem.scss';
</style>
