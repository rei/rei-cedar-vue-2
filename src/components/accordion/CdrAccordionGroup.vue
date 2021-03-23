<template>
  <ul
    :class="$style[baseClass]"
    @focusin="focusin"
    @keydown="handleKeyDown"
  >
    <slot/>
  </ul>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import clsx from 'clsx';
import style from './styles/CdrAccordionGroup.scss';

export default {
  name: 'CdrAccordionGroup',

  setup(props, ctx) {
    const baseClass = 'cdr-accordion-group';
    const currentIdx = ref(0);
    const accordionButtons = ref([]);

    const nextIdx = computed(() => {
      const idx = currentIdx.value + 1;
      return idx >= accordionButtons.value.length ? 0 : idx;
    });

    const prevIdx = computed(() => {
      const idx = currentIdx.value - 1;
      return idx <= -1 ? accordionButtons.value.length - 1 : idx;
    });

    // TODO: how to handle $el?
    onMounted(() => accordionButtons.value = this.$el.querySelectorAll('.js-cdr-accordion-button'))

    const handleKeyDown = (e) =>{
      // something besides the button is focused
      if (currentIdx === -1) return;

      const { key } = e;
      switch (key) {
        case 'Home':
          e.preventDefault();
          accordionButtons[0].focus();
          break;
        case 'End':
          e.preventDefault();
          accordionButtons[accordionButtons.length - 1].focus();
          break;
        case 'ArrowDown':
        case 'Down':
          e.preventDefault();
          accordionButtons[nextIdx].focus();
          break;
        case 'ArrowUp':
        case 'Up':
          e.preventDefault();
          accordionButtons[prevIdx].focus();
          break;
        default: break;
      }
    }
    const focusin = (e) => {
      // find out which, if any, button is focused
      currentIdx = Array.prototype.indexOf.call(accordionButtons, e.target);
    }

    return {
      handleKeyDown,
      focusin,
      baseClass,
      // currentIdx,
      // prevIdx,
      // nextIdx,
      // accordionButtons,
    };
  },
};
</script>
