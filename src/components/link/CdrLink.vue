<template>
  <component
    :is="tag"
    :class="mapClasses($style, baseClass, modifierClass, inheritColorClass)"
    :target="target"
    :rel="computedRel"
    :href="computedHref"
  >
    <slot />
  </component>
</template>

<script>
import { defineComponent, computed } from 'vue';

import mapClasses from '../../utils/mapClasses';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

export default defineComponent({
  name: 'CdrLink',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    inheritColor: {
      type: Boolean,
      default: false,
    },
    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['', 'standalone']),
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  setup(props) {
    const computedHref = computed(() => (props.tag === 'a' ? props.href : null));
    const computedRel = computed(() => {
      if (props.target === '_blank') {
        return props.rel || 'noopener noreferrer';
      }
      return props.rel;
    });
    const baseClass = 'cdr-link';
    const modifierClass = computed(() => props.modifier && buildClass(baseClass, props.modifier));
    const inheritColorClass = computed(() => props.inheritColor && 'cdr-link--inherit-color');

    return {
      mapClasses,
      computedHref,
      computedRel,
      baseClass,
      modifierClass,
      inheritColorClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrLink.scss">
</style>
