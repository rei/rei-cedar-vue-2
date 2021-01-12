<template>
  <component
    :is="tag"
    :class="componentClass"
  >
    {this.$slots.default}
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrList.scss';

export default {
  name: 'CdrList',
  props: {
    /**
     * Tag accepts a user defined element and expects either: 'ul' = Unordered List or 'ol' = Ordered List.
     */
    tag: {
      type: String,
      default: 'ul',
      validator: (value) => propValidator(value, ['ul', 'ol']),
    },
    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ["ordered", "unordered", "compact", "inline"]),
    },
  },
  setup(props) {
    const modifierClass = computed(() => buildClass('cdr-list', props.modifier, style));
    const componentClass = computed(() => clsx(style['cdr-list'], modifierClass.value);
    return {
      componentClass,
    }
  }
};
</script>
