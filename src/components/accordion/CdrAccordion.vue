<template>
  <li
    :class="mapClasses($style, baseClass, modifierClass, compactClass, borderAlignedClass, focusedClass)"
    :id="`${id}-accordion`"
  >
    <component
      :is="headingTag"
      :class="headingClass"
    >
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
          <slot name="label">
            {{label}}
          </slot>
        </span>
        <icon-caret-down
          :class="mapClasses($style, iconClass, isOpenClass)"
          :size="compact ? 'small' : null"
        />
      </button>
    </component>
    <div
      :class="mapClasses($style, containerClass, isOpenClass)"
      :style="{ maxHeight: maxHeight }"
    >
      <div
        :class="mapClasses($style, contentClass, isOpenClass)"
        :aria-hidden="`${!opened}`"
        :id="`${id}-collapsible`"
        ref="accordionContentEl"
      >
        <slot />
      </div>
    </div>
  </li>
</template>
<script>
import {
  defineComponent, computed, watch, onMounted, ref, inject,
} from 'vue';
import IconCaretDown from '../icon/comps/caret-down';
import { buildClass, modifyClassName } from '../../utils/buildClass';
import mapClasses from '../../utils/mapClasses';

export default defineComponent({
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
    label: {
      type: String,
    },
  },

  setup(props, ctx) {

    const unwrap = inject('unwrap', {value: false});

    const headingTag = `h${props.level}`;
    const headingClass = computed(() => (unwrap.value
      ? 'cdr-accordion__header--unwrapped'
      : 'cdr-accordion__header'));

    const buttonClass = 'cdr-accordion__button js-cdr-accordion-button';

    const accordionContentEl = ref(null);
    const focused = ref(false);
    const maxHeight = ref(props.opened ? 'none' : 0);

    const labelClass = 'cdr-accordion__label';

    const baseClass = 'cdr-accordion';
    const compactClass = computed(() => (props.compact
      ? modifyClassName('cdr-accordion', 'compact')
      : ''));
    const borderAlignedClass = computed(() => (props.borderAligned
      ? modifyClassName('cdr-accordion', 'border-aligned')
      : ''));
    const focusedClass = computed(() => (focused.value
      ? modifyClassName('cdr-accordion', 'focused')
      : null));


    const unwrapClass = computed(() => {
      return unwrap.value ? modifyClassName('cdr-accordion', 'unwrap') : null;
    });

    const modifierClass = computed(() => buildClass(baseClass, props.modifier));

    const iconClass = 'cdr-accordion__icon';

    const containerClass = 'cdr-accordion__content-container';

    // is this class really not scoped?!?!?!?
    const isOpenClass = computed(() => (props.opened ? 'open' : 'closed'));
    const contentClass = 'cdr-accordion__content';

    const onClick = (event) => {
      ctx.emit('accordion-toggle', event);
    };
    const onFocus = () => {
      focused.value = true;
    };
    const onBlur = () => {
      focused.value = false;
    };

    watch(() => props.opened, (opened) => {
      maxHeight.value = !opened ? `${accordionContentEl.value.clientHeight}px` : 0;
      // nextTick is not sufficient here, must wait for CSS to re-paint
      setTimeout(() => {
        // on next frame, set maxHeight to new value
        maxHeight.value = opened ? `${accordionContentEl.value.clientHeight}px` : 0;
        setTimeout(() => {
          // after animation is complete, remove max-height so content can reflow
          maxHeight.value = opened ? 'none' : 0;
        }, 350); // cdr-duration-3x + 50ms
      }, 50);
    });

    onMounted(() => {
      if (props.opened && accordionContentEl.value) {
        maxHeight.value = 'none';
      }
    });


    return {
      headingTag,
      headingClass,
      buttonClass,
      accordionContentEl,
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
      modifierClass,
      onClick,
      onFocus,
      onBlur,
      unwrapClass,
      mapClasses,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrAccordion.scss">
</style>
