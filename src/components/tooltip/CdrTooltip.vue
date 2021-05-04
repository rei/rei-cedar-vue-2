<template>
  <div :class="mapClasses(
    $style, 'cdr-tooltip--wrapper', hasTrigger && 'cdr-tooltip--position'
  )">
    <div ref="triggerEl">
      <slot name="trigger" />
    </div>
    <cdr-popup
      :content-class="contentClass"
      role="tooltip"
      ref="popupEl"
      :position="position"
      :auto-position="autoPosition"
      :opened="isOpen"
      :id="id"
      @closed="closeTooltip"
    >
      <slot />
    </cdr-popup>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import mapClasses from '../../utils/mapClasses';
import CdrPopup from '../popup/CdrPopup';
import propValidator from '../../utils/propValidator';

export default defineComponent({
  name: 'CdrTooltip',
  components: {
    CdrPopup,
  },
  props: {
    position: {
      type: String,
      required: false,
      default: 'top',
      validator: (value) => propValidator(
        value,
        ['top', 'bottom', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      required: true,
    },
    contentClass: {
      type: String,
      required: false,
    },
    open: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props, ctx) {

    const isOpen = ref(false);
    let timeout;

    const popupEl = ref(null);
    const triggerEl = ref(null);

    const hasTrigger = ctx.slots.trigger;
// TODO: https://v3.vuejs.org/guide/migration/emits-option.html#overview
    const openTooltip = (e) => {
      if (timeout) clearTimeout(timeout);
      isOpen.value = true;
      ctx.emit('opened', e);
    }
    const closeTooltip = (e) => {
      timeout = setTimeout(() => {
        isOpen.value = false;
        ctx.emit('closed', e);
      }, 250);
    }
    const addHandlers = () => {
      const triggerElement = triggerEl.value.children[0];
      const popupElement = popupEl.value;
      if (triggerElement) {
        triggerElement.addEventListener('mouseover', openTooltip);
        triggerElement.addEventListener('focus', openTooltip);

        triggerElement.addEventListener('mouseleave', closeTooltip);
        triggerElement.addEventListener('blur', closeTooltip);

        // popupElement.addEventListener('mouseover', openTooltip);
        // popupElement.addEventListener('mouseleave', closeTooltip);
      }
    }

    watch(() => props.open, () => (props.open ? openTooltip() : closeTooltip()));

    onMounted(() => {
      addHandlers();
      const trigger = triggerEl.value.children[0];
      if (trigger) trigger.setAttribute('aria-describedby', props.id);
    })

    return {
      hasTrigger,
      isOpen,
      mapClasses,
      closeTooltip,
      openTooltip,
      popupEl,
      triggerEl,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrTooltip.scss">
</style>
