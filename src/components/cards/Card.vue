<template>
  <article :class="[modifierClass]">
    <template v-if="header">
        <header :class="headerClass">
        <slot name="header"></slot>
        </header>
    </template>

    <!-- Card Standard Blocks-->
    <section :class="contentWrapperClassA">
        <slot></slot>
    </section>
    <section :class="contentWrapperClassB">
        <slot name="bodyB"></slot>
    </section>
    <section :class="contentWrapperClassC">
        <slot name="bodyC"></slot>
    </section>

    <template v-if="footer">
      <footer :class="footerClass">
      <slot name="footer"></slot>
      </footer>
    </template>

  </article>
</template>

<script>
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-card',
  mixins: [modifier],
  props: {
    contentWrapperClassA: String,
    contentWrapperClassB: String,
    contentWrapperClassC: String,
    footer: {
      type: Boolean,
      default: false,
    },
    footerClass: String,
    header: {
      type: Boolean,
      default: false,
    },
    headerClass: String,
  },
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
};
</script>

<style>
</style>
