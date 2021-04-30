<template>
  <div
    :aria-hidden="!active"
    :aria-labelledby="ariaLabelledby"
    :class="mapClasses($style, baseClass, modifierClass, animationDirection && `cdr-tab-panel-${animationDirection}`)"
    :hidden="hidden"
    :id="id"
    tabindex="0"
    role="tabpanel"
    @keydown.up.prevent="handleUpArrowNav"
    @animationend="animationEnd"
    :key="name"
  >
    <slot />
  </div>
</template>
<script>
import { defineComponent, computed, ref } from 'vue';

// TODO: PUT MODIFIER HERE!
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import mapClasses from '../../utils/mapClasses';

export default defineComponent({
  name: 'CdrTabPanel',
  props: {
    /**
     * Required string value that shows up on tab header
     */
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabelledBy: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['centered', 'compact', 'full-width', 'no-border']),
    },
  },

  setup(props, ctx) {
    const baseClass = 'cdr-tab-panel';
    const active = ref(false);
    const hidden = ref(true);
    const animationDirection = ref(null);

    const modifierClass = computed(() => buildClass(baseClass, props.modifier));

    const setActive = (state) => {
      // TODO: inject current active tab index or something?
      if (state) hidden.value = false;
      active.value = state;
      ctx.emit('tab-change', state, props.id);
    };
    const setAnimationDirection = (direction) => {
      // Use Inject here?
      animationDirection = direction;
    };
    const handleUpArrowNav = () => {
      // YOU WAHT NOW?!?!?!
      // TODO: emit event for tabPanel to deal with????
      ctx.emit('tab-arrow-up')
      // $parent.setFocusToActiveTabHeader();
    };
    const animationEnd = (event) => {
      if (event.animationName.split('-')[0] === 'exit') {
        hidden = true;
        animationDirection = null;
      }
    };

    return {
      modifierClass,
      animationDirection,
      baseClass,
      mapClasses,
      animationEnd,
      handleUpArrow,
      active,
      hidden,
      handleUpArrowNav,
      setAnimationDirection,
      setActive,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrTabPanel.scss">
</style>
