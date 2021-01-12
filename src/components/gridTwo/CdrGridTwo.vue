<template>
  <component
    :is="tag"
    :class="componentClass">
    <slot />
  </component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass'

import propValidator from '../../utils/propValidator';
import style from './styles/CdrGridTwo.scss';

export default {
  name: 'CdrGridTwo',
  props: {
    /**
     * Defines gutter size.
     * Possible values: {none, small, medium, large}.
     * Also accepts responsive values with `@breakpoint`: "none@md"
     */
    gutter: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['none', 'small', 'medium', 'large'],
      ),
      default: 'medium@xs medium@sm large@md large@lg',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props) {
    // const Component = this.tag;
    // {clsx(this.style['cdr-grid-two'], this.gutterClass)}





    gutterClass() {
      const classStr = [];
      if (this.gutter) {
        this.gutter.split(' ').forEach((val) => {
          classStr.push(this.style[`cdr-grid-two--gutter-${val}`]);
        });
      }
      return classStr.join(' ');
    },
    return (

    );
  },
};

</script>
