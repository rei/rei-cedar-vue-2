<template>
  <ul
    :class="$style[baseClass]"
    :ref="accordionGroupEl"
    @focusin="focusin"
    @keydown="handleKeyDown"
  >
    <slot/>
  </ul>
</template>
<script>
import { defineComponent, computed, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'CdrAccordionGroup',

  setup(props, ctx) {
    const baseClass = 'cdr-accordion-group';
    const currentIdx = ref(0);
    const accordionButtons = ref([]);
    const accordionGroupEl = ref(null);

    const nextIdx = computed(() => {
      const idx = currentIdx.value + 1;
      return idx >= accordionButtons.value.length ? 0 : idx;
    });

    const prevIdx = computed(() => {
      const idx = currentIdx.value - 1;
      return idx <= -1 ? accordionButtons.value.length - 1 : idx;
    });

    // TODO: how to handle $el?
    onMounted(() => accordionButtons.value = accordionGroupEl.value.querySelectorAll('.js-cdr-accordion-button'))

    const handleKeyDown = (e) =>{
      // something besides the button is focused
      if (currentIdx.value === -1) return;

      const { key } = e;
      switch (key) {
        case 'Home':
          e.preventDefault();
          accordionButtons.value[0].focus();
          break;
        case 'End':
          e.preventDefault();
          accordionButtons.value[accordionButtons.value.length - 1].focus();
          break;
        case 'ArrowDown':
        case 'Down':
          e.preventDefault();
          accordionButtons.value[nextIdx.value].focus();
          break;
        case 'ArrowUp':
        case 'Up':
          e.preventDefault();
          accordionButtons.value[prevIdx.value].focus();
          break;
        default: break;
      }
    }
    const focusin = (e) => {
      // find out which, if any, button is focused
      currentIdx.value = Array.prototype.indexOf.call(accordionButtons, e.target);
    }

    return {
      handleKeyDown,
      focusin,
      baseClass,
      accordionGroupEl,
    };
  },
});
</script>


<style lang="scss" module src="./styles/CdrAccordionGroup.scss">
</style>