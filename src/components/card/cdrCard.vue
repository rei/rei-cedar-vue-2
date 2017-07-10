<template>
  <article :class="[modifierClass]">
    <template v-if="header">
        <header :class="headerClass">
        <slot name="header"></slot>
        </header>
    </template>

    <!-- Card Standard Blocks-->
    <section class="cdr-card__body" :class="contentWrapperClassA">
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
    /**
    * Use this property to asign a wrapper class
    * (empty, cdr-card__block, cdr-card__block--media)
    * to the parent wrapper of the default slot
    **/
    contentWrapperClassA: String,
    /**
    *  Use this property to asign a wrapper class
    * to the bodyB slot parent
    **/
    contentWrapperClassB: String,
    /**
    *  Use this property to asign a wrapper
    * class to the bodyC slot parent
    **/
    contentWrapperClassC: String,
    /**
    *  set to true if you need a footer element on your card
    **/
    footer: {
      type: Boolean,
      default: false,
    },
    /**
    *  Use this property to asign it a wrapper
    * class to the footer slot parent
    **/
    footerClass: String,
    /**
    *  set to true if you need a header element on your card
    **/
    header: {
      type: Boolean,
      default: false,
    },
    /**
    *  Use this property to asign it a wrapper
    * class to the header slot parent
    **/
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
