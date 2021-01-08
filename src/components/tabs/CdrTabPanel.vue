<template>
  <div
    :aria-hidden="!active"
    :aria-labelledby="ariaLabelledby"
    :class="componentClass"
    :hidden="hidden"
    :id="id"
    ref="cdrTabPanelContainer"
    tabindex="0"
    role="tabpanel"
    vOn:keydown_up_prevent="handleUpArrowNav"
    vOn:animationend="animationEnd"
    :key="name"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';


// TODO: PUT MODIFIER HERE!
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrTabPanel.scss';

export default {
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
    return {


<!-- componentClass: clsx(this.style[this.baseClass], this.modifierClass, this.animationClass) -->

      // data() {
      //   return {
      //     active: false,
      //     hidden: true,
      //     offsetX: 0,
      //     animationDirection: null,
      //     style,
      //   };
      // },
      // computed: {
      //   baseClass() {
      //     return 'cdr-tab-panel';
      //   },
      //   animationClass() {
      //     return this.animationDirection ? style[`cdr-tab-panel-${this.animationDirection}`] : null;
      //   },
      // },
      // methods: {
      //   setActive(state) {
      //     if (state) this.hidden = false;
      //     this.active = state;
      //     this.$emit('tab-change', state, this.id);
      //   },
      //   setAnimationDirection(direction) {
      //     this.animationDirection = direction;
      //   },
      //   setOffsetX(x) {
      //     this.offsetX = x;
      //   },
      //   handleUpArrowNav() {
      //     this.$parent.setFocusToActiveTabHeader();
      //   },
      //   animationEnd(event) {
      //     if (event.animationName.split('-')[0] === 'exit') {
      //       this.hidden = true;
      //       this.animationDirection = null;
      //     }
      //   },
      // },







    };
  },
};

</script>
