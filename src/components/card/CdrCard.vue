<template>
  <Component :is="tag" class={this.style[this.baseClass]}>
    {this.$slots.default}
  </Component>
</template>
<script>
import style from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
  props: {
    tag: {
      type: String,
      default: 'article',
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
  setup() {
    const Component = this.tag;
    return ();
  },
};
</script>
