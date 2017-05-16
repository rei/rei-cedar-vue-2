<template>
  <button :class="[buildClass]" :type="type" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'cdr-button',
    props: {
      theme: String,
      modifier: {
        required: false,
        default: () => [],
      },
      type: {
        type: String,
        required: false,
        default: 'button',
        validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
      },
      handleClick: {
        default: () => () => null,
      },
    },
    computed: {
      buildClass() {
        const baseClass = this.modifier.indexOf('link') >= 0 ? 'cdr-link' : 'cdr-button';
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
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener';
        }
        return this.rel;
      },
    },
  };
</script>

<style module="red">
  @import '../../css/themes/red.pcss';
  @import '../../css/components/button.pcss';
</style>
