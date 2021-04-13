<template>
  <div :class="mapClasses(
    $style,
    'cdr-popover--wrapper',
    hasTrigger && 'cdr-popover--position',
  )">
    <div :ref="triggerEl">
      <slot name="trigger"/>
    </div>
    <cdr-popup
      role="dialog"
      @closed="closePopover"
      :class="$style[baseClass]"
      :ref="popupEl"
      :position="position"
      :autoPosition="autoPosition"
      :opened="isOpen"
      :ariaExpanded="`${isOpen}`"
      :id="id"
      :contentClass="contentClass"
    >
      <div :class="$style['cdr-popover__container']">
        <div :class="$style['cdr-popover__content']">
          <div v-if="hasTitle" :class="$style['cdr-popover__title']">
            <slot name="title"/>
            <!-- TODO: might need a v-if on the slot, v-else on the label? -->
            <span v-if="hasLabel">
              {{ label }}
            </span>
          </div>
          <slot />
        </div>
        <cdr-button
          :class="$style['cdr-popover__close-button']"
          icon-only
          @click="closePopover"
          aria-label="Close"
          size="small"
        >
          <icon-x-sm
            slot="icon"
            inherit-color
          />
        </cdr-button>
      </div>
    </cdr-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect, onMounted } from 'vue';
import tabbable from 'tabbable';
import clsx from 'clsx';
import IconXSm from '../icon/comps/x-sm';
import CdrButton from '../button/CdrButton';
import CdrPopup from '../popup/CdrPopup';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';
import mapClasses from '../../utils/mapClasses';

export default defineComponent({
  name: 'CdrPopover',
  components: {
    CdrPopup,
    CdrButton,
    IconXSm,
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
      required: false,
      default: true,
    },
    label: {
      type: String,
      required: false,
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
    const lastActive = ref(undefined);

    const triggerEl = ref(null);
    const popupEl = ref(null);

    const hasTrigger = ctx.slots.trigger;
    const hasTitle = ctx.slots.title || label;
    const hasLabel = !ctx.slots.title && label;

    const openPopover = (e) => {
      const { activeElement } = document;

      lastActive = activeElement;
      isOpen = true;
      ctx.emit('opened', e);
      nextTick(() => {
        const tabbables = tabbable(popupEl);
        if (tabbables[0]) tabbables[0].focus();
      });
    }

    const closePopover = (e) => {
      isOpen = false;
      ctx.emit('closed', e);
      if (lastActive) lastActive.focus();
    }

    const addHandlers = ()  =>{
      const triggerElement = triggerEl.children[0];
      if (triggerElement) {
        triggerElement.addEventListener('click', openPopover);
      }
    }

    watchEffect((props.open) => {
      // TODO: if eslint yells about this then eslint must go :)
      props.open ? openPopover() : closePopover();
    });

    onMounted(() => {
      addHandlers();

      const trigger = triggerEl.children[0];
      if (trigger) {
        trigger.setAttribute('aria-controls', id);
        trigger.setAttribute('aria-haspopup', 'dialog');
      }
    });

    return {
      mapClasses,
      baseClass,
      hasTrigger,
      triggerEl,
      hasTitle,
      hasLabel,
      closePopover,
      isOpen,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrPopover.scss">
</style>
