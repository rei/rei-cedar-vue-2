<template>
  <component
    :is="tag"
    :class="componentClass"
    :target="target"
    :rel="computedRel"
    :href="href"
  >
    <slot/>
  </component>
</template>


<script lang="ts">
import {defineComponent, computed} from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import style from './styles/CdrLink.scss';

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
    const href = computed(() => props.tag === 'a' ? props.href : null);
    const computedRel = computed(() => {
      if (props.target === '_blank') {
        return props.rel || 'noopener noreferrer';
      }
      return props.rel;
    });

    const modifierClass = computed(() => buildClass('cdr-link', props.modifier, style));

    const inheritColorClass = computed(() => props.inheritColor ? style['cdr-link--inherit-color'] : '');

    const componentClass = computed(() => clsx(style['cdr-link'], modifierClass.value, inheritColorClass.value));

    return {
      tag: props.tag,
      href: props.href,
      target: props.target,
      computedRel,
      componentClass,
    };
  }
})
</script>
