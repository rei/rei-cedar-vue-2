<template>
  <div :class="mapClasses(
    $style, 'cdr-tooltip--wrapper', hasTrigger && 'cdr-tooltip--position'
  )">
    <div :ref="triggerEl">
      <slot name="trigger" />
    </div>
    <cdr-popup
      :class="$style['cdr-tooltip']"
      :contentClass="contentClass"
      role="tooltip"
      :ref="popupEl"
      :position="position"
      :autoPosition="autoPosition"
      :opened="isOpen"
      :id="id"
      :onClosed="closeTooltip"
    >
      <slot />
    </cdr-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect, onMounted } from 'vue';
import CdrPopup from '../popup/CdrPopup';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';

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
    const baseClass = 'cdr-popup';

    const isOpen = ref(false);
    const openHandler = ref(undefined);
    const closeHandler = ref(undefined);
    const timeout = ref(undefined);

    const popupEl = ref(null);
    const triggerEl = ref(null);

    const hasTrigger = ctx.slots.trigger;
// https://v3.vuejs.org/guide/migration/emits-option.html#overview
    const openTooltip = (e) => {
      if (this.timeout) clearTimeout(this.timeout);
      this.isOpen = true;
      this.$emit('opened', e);
    }
    const closeTooltip = (e) => {
      this.timeout = setTimeout(() => {
        this.isOpen = false;
        this.$emit('closed', e);
      }, 250);
    }
    const addHandlers = () => {

      const triggerElement = triggerEl.children[0];
      const popupElement = popupEl;
      if (triggerElement) {
        triggerElement.addEventListener('mouseover', openTooltip);
        triggerElement.addEventListener('focus', openTooltip);

        triggerElement.addEventListener('mouseleave', closeTooltip);
        triggerElement.addEventListener('blur', closeTooltip);

        popupElement.addEventListener('mouseover', openTooltip);
        popupElement.addEventListener('mouseleave', closeTooltip);
      }
    }

    watchEffect((props.open) => {
      // TODO: if eslint yells about this then eslint must go :)
      props.open ? openTooltip() : closeTooltip();
    })

    onMounted(() => {
      addHandlers();
      const trigger = triggerEl.children[0];
      if (trigger) trigger.setAttribute('aria-describedby', props.id);
    })

    return {
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrTooltip.scss">
</style>
