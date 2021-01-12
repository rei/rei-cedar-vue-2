<template>
  <div
    :class="clsx(baseClass, modifierClass, styleClass, focusedClass)"
    :id="`${id}-accordion`"
  >
    <Heading :class="headingClass">
      <button
        :class="buttonClass"
        :id="id"
        @click="onClick"
        @focus="onFocus"
        @blur="onBlur"
        :aria-expanded="`${opened}`"
        :aria-controls="`${id}-collapsible`"
        >
        <span
          :class="labelClass"
          :id="`${id}-label`"
          >
          <slot name="label"/>
        </span>
        <icon-caret-down
          :class="clsx(iconClass, this.isOpenClass)"
          :size="compact ? 'small' : null"
          />
      </button>
    </Heading>
    <div
      :class="clsx(containerClass, this.isOpenClass)"
      :style="{ maxHeight: maxHeight }"
    >
      <div
        :class="clsx(contentClass, isOpenClass)"
        :aria-hidden="`${!opened}`"
        :id="`${id}-collapsible`"
        :ref="accordionContent"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch, onMounted } from 'vue';

import clsx from 'clsx';
import IconCaretDown from '../icon/comps/caret-down';
import { modifyClassName } from '../../utils/buildClass';
import style from './styles/CdrAccordion.scss';

export default {
  name: 'CdrAccordion',
  components: {
    IconCaretDown,
  },
  props: {
    /**
     * The unique id of an accordion.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Toggle this value to open/close the accordion.
     */
    opened: {
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
    // Sets the heading level
    level: {
      type: [String, Number],
      required: true,
    },
  },

  setup(props, ctx) {
    const headingTag = `h${props.level}`;
    const headingClass = style['cdr-accordion__header'];


    const buttonClass = clsx(style['cdr-accordion__button'], 'js-cdr-accordion-button');

    const accordionContent = ref(null);
    const focused = ref(false);
    const maxHeight = ref(props.opened ? 'none' : 0);

    const labelClass = style['cdr-accordion__label'];

    const baseClass = style['cdr-accordion'];
    const compactClass = computed(() => {
      return props.compact ?
        modifyClassName('cdr-accordion', 'compact', style) :
        '';
    });
    const borderAlignedClass = computed(() => {
      return props.borderAligned ?
        modifyClassName('cdr-accordion', 'border-aligned', style) :
        '';
    });
    const focusedClass = computed(() => {
      return focused.value ?
        modifyClassName('cdr-accordion', 'focused', style) :
        null
    });

    const iconClass = style['cdr-accordion__icon'];

    const containerClass = style['cdr-accordion__content-container'];

    // is this class really not scoped?!?!?!?
    const isOpenClass = computed(() => props.opened ? 'open' : 'closed');
    const contentClass = style['cdr-accordion__content'];

    const onClick = (event) => {
       ctx.emit('accordion-toggle', event);
     }
     const onFocus = () => {
       focused.value = true;
     }
     const onBlur = () => {
       focused.value = false;
     }

     watch(props.opened, (opened) => {
       maxHeight.value = !opened ? `${accordionContent.value.clientHeight}px` : 0;
       // nextTick is not sufficient here, must wait for CSS to re-paint
       setTimeout(() => {
         // on next frame, set maxHeight to new value
         maxHeight.value = opened ? `${accordionContent.value.clientHeight}px` : 0;
         setTimeout(() => {
           // after animation is complete, remove max-height so content can reflow
           maxHeight.value = opened ? 'none' : 0;
         }, 350); // cdr-duration-3x + 50ms
       }, 50);
     });

     onMounted(() => {
       if (props.opened && accordionContent.value) {
         maxHeight.value = 'none';
       }
     })


     return {
       clsx,
       headingTag,
       headingClass,
       buttonClass,
       accordionContent,
       focused,
       maxHeight,
       baseClass,
       labelClass,
       compactClass,
       borderAlignedClass,
       focusedClass,
       iconClass,
       containerClass,
       isOpenClass,
       contentClass,
       onClick,
       onFocus,
       onBlur,
     }
  },
};
</script>
