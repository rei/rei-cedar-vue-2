<template>
  <fieldset
    :class="$style[baseClass]"
    @focusin="focusin"
    @keydown="handleKeyDown"
  >
    <legend :class="$style[legendClass]">
      <slot name="label">
        {{ label }}
      </slot>
    </legend>
    <div ref="chipsEl" :class="$style['cdr-chip-group__content']">
      <slot />
    </div>
  </fieldset>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'CdrChipGroup',
  props: {
    label: {
      type: String,
      required: true,
    },
    hideLabel: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const baseClass = 'cdr-chip-group';

    const chipsEl = ref(null);

    // TODO: refs here? or fine as is?
    const chips = [];
    const currentIdx = 0;

    const nextIdx = computed(() => {
      const idx = currentIdx + 1;
      return idx >= chips.length ? 0 : idx;
    });
    const prevIdx = computed(() => {
      const idx = currentIdx - 1;
      return idx <= -1 ? (chips.length - 1) : idx;
    });
    const legendClass = computed(() => props.hideLabel
      ? 'cdr-chip-group__legend--hidden'
      : 'cdr-chip-group__legend'
    );

    onMounted(() => {
      // TODO: potentially simplified by new ref system?
      chips = Array.prototype.filter.call(chipsEl.value.children,
        (chip) => !(chip.getAttribute('disabled') || chip.getAttribute('aria-disabled')));
      currentIdx = Array.prototype.findIndex.call(chips,
        (chip) => chip.getAttribute('aria-checked') === 'true');
    });

    const handleKeydown = (e) => {
      // something besides the button is focused
      if (currentIdx === -1) return;

      const { key } = e;
      switch (key) {
        case 'Home':
          e.preventDefault();
          chips[0].focus();
          break;
        case 'End':
          e.preventDefault();
          chips[chips.length - 1].focus();
          break;
        case 'ArrowDown':
        case 'Down':
          e.preventDefault();
          chips[nextIdx.value].focus();
          break;
        case 'ArrowUp':
        case 'Up':
          e.preventDefault();
          chips[prevIdx.value].focus();
          break;
        default: break;
      }
    }
    const handleFocusin = (e) => {
      // find out which, if any, button is focused
      currentIdx = Array.prototype.indexOf.call(chips, e.target);
    }
    return {
      baseClass,
      legendClass,
      handleKeydown,
      handleFocusin,
      chipsEl,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrChipGroup.scss">
</style>

