<template>
  <article :class="[modifierClass]">
    <template v-if="$slots.header">
        <header :class="headerClass">
        <slot name="header"></slot>
        </header>
    </template>

    <!-- Card Standard Blocks-->

    <section v-if="contentAGutter" :class="[wrapperA, gutterAClass]">
        <slot></slot>
    </section>
    <section v-else :class="wrapperA">
        <slot></slot>
    </section>

    <template v-if="$slots.bodyB">
      <section v-if="contentBGutter" :class="[wrapperB, gutterBClass]">
          <slot name="bodyB"></slot>
      </section>
      <section v-else :class="wrapperB">
          <slot name="bodyB"></slot>
      </section>
     </template>
     <template v-if="$slots.bodyC">
      <section v-if="contentCGutter" :class="[wrapperC, gutterCClass]">
          <slot name="bodyC"></slot>
      </section>
      <section v-else :class="wrapperC">
          <slot name="bodyC"></slot>
      </section>
    </template>
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
    * (empty, cdr-inset, cdr-inset--media)
    * to the parent wrapper of the default slot
    **/
    wrapperA: String,
    contentAGutter: {
      type: String,
      validator: value => ([
        'top',
        'right',
        'bottom',
        'left'].indexOf(value) >= 0) || false,
    },
    /**
    *  Use this property to asign a wrapper class
    * to the bodyB slot parent
    **/
    wrapperB: String,
    contentBGutter: {
      type: String,
      validator: value => ([
        'top',
        'right',
        'bottom',
        'left'].indexOf(value) >= 0) || false,
    },
    /**
    *  Use this property to asign a wrapper
    * class to the bodyC slot parent
    **/
    wrapperC: String,
    contentCGutter: {
      type: String,
      validator: value => ([
        'top',
        'right',
        'bottom',
        'left'].indexOf(value) >= 0) || false,
    },
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
    *  Use this property to asign it a wrapper
    * class to the header slot parent
    **/
    headerClass: String,
  },
  computed: {
    baseClass() {
      return 'cdr-card';
    },
    gutterAClass() {
      return `cdr-inset--no-${this.contentAGutter}`;
    },
    gutterBClass() {
      return `cdr-inset--no-${this.contentBGutter}`;
    },
    gutterCClass() {
      return `cdr-inset--no-${this.contentCGutter}`;
    },
  },
};
</script>

<style>
</style>
