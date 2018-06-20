<template>
  <div
    :class="[modifierClass, styleClass]"
    :id="`${id}-accordion-item`"
  >
    <button
      :class="$style['cdr-accordion-item__button']"
      :id="id"
      @click="toggle"
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
        <!-- @default slot for content  -->
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import { IconCaretDown } from '@rei/cdr-icon';
import modifier from 'mixinsdir/modifier';
import { setTimeout } from 'core-js';

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
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      borderAligned: this.$parent.$props.borderAligned,
      compact: this.$parent.$props.compact,
      maxHeight: 0,
      isOpen: this.$parent.$props.showAll || this.show,
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
      this.maxHeight = `${document.getElementById(`${this.$props.id}-collapsible`).clientHeight}px`;
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
