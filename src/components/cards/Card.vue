<template>
  <article :class="[buildClass]">
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
export default {
  name: 'cdr-card',
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
    modifier: {
      required: false,
      default: () => [],
    },
  },
  computed: {
    buildClass() {
      const baseClass = 'cdr-card';
      let final = '';

      if (this.theme) {
        final += `${this[this.theme][baseClass]} `;

        this.modifier.forEach((mod) => {
          final += `${this[this.theme][`${baseClass}--${mod}`]} `;
        });
      } else {
        final += `${baseClass} `;

        this.modifier.forEach((mod) => {
          final += `${baseClass}--${mod} `;
        });
      }
      return final;
    },
  },
};
</script>

<style>
</style>
