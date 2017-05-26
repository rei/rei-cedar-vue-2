<template>
  <a :class="buildClass" :target="target" :rel="rel">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'cdr-a',
    props: {
      target: String,
      rel: String,
      modifier: {
        required: false,
        default: () => [],
      },
    },
    computed: {
      buildClass() {
        const baseClass = this.modifier.indexOf('button') >= 0 ? 'cdr-button' : 'cdr-link';
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
