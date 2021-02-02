<template>
  <component
    :is="tag"
    :class="[$style[baseClass], $style[modifierClass], $style[inheritColorClass]]"
    :target="target"
    :rel="computedRel"
    :href="computtedHref"
  >
    <slot/>
  </component>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';

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
      validator: (value) => propValidator(value, ['standalone']),
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  setup(props) {
    const computedHref = computed(() => props.tag === 'a' ? props.href : null);
    const computedRel = computed(() => {
      if (props.target === '_blank') {
        return props.rel || 'noopener noreferrer';
      }
      return props.rel;
    });
    const baseClass = 'cdr-link';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    const inheritColorClass = computed(() => props.inheritColor && style['cdr-link--inherit-color']);

    return {
      computedHref,
      computedRel,
      baseClass,
      modifierClass,
      inheritColorClass,
    };
  }
})
</script>

<style lang="scss" module src="./styles/CdrLink.scss">
</style>
