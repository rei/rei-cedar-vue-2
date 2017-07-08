<template>
  <article :class="[modifierClass]">
    <template v-if="header">
        <header :class="headerClass">
        <slot name="header"></slot>
        </header>
    </template>

    <!-- Card Standard Blocks-->
    <template v-if="contentAGutter">
    <section :class="[wrapperA, gutterAClass]">
        <slot></slot>
    </section>
    </template>
    <section v-else :class="wrapperA">
        <slot></slot>
    </section>
     <template v-if="contentBGutter">
    <section :class="[wrapperB, gutterAClass]">
        <slot name="bodyB"></slot>
    </section>
    </template>
    <section v-else :class="wrapperB">
        <slot></slot>
    </section>
     <template v-if="contentCGutter">
    <section :class="[wrapperC, gutterAClass]">
        <slot name="bodyC"></slot>
    </section>
    </template>
    <section v-else :class="wrapperC">
        <slot></slot>
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
    gutterAClass() {
      return `cdr-card__block--remove-gutter--${this.contentAGutter}`;
    },
    gutterBClass() {
      return `cdr-card__block--remove-gutter--${this.contentBGutter}`;
    },
    gutterCClass() {
      return `cdr-card__block--remove-gutter--${this.contentCGutter}`;
    },
  },
};
</script>

<style>
</style>
