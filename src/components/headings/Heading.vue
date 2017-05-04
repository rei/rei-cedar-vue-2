<template>
  <h1 v-if="level === 1" :class="buildClass"><slot></slot></h1>
  <h2 v-else-if="level === 2" :class="buildClass"><slot></slot></h2>
  <h3 v-else-if="level === 3" :class="buildClass"><slot></slot></h3>
  <h4 v-else-if="level === 4" :class="buildClass"><slot></slot></h4>
  <h5 v-else-if="level === 5" :class="buildClass"><slot></slot></h5>
  <h6 v-else-if="level === 6" :class="buildClass"><slot></slot></h6>
</template>

<script>
export default {
  name: 'cdr-heading',
  props: {
    theme: String,
    level: {
      type: Number,
      required: true,
      validator: value => (value > 0 && value <= 6) || false,
    },
    modifier: {
      required: false,
      default: () => [],
    },
  },
  computed: {
    buildClass() {
      const baseClass = 'cdr-heading';
      let final = '';
      if (this.theme) {
        final += `${this[this.theme][baseClass]} `;
        this.modifier.forEach((mod) => {
          final += `${this[this.theme][`cdr-${mod}`]} `;
        });
      } else {
        final += `${baseClass} `;
        this.modifier.forEach((mod) => {
          final += `cdr-${mod} `;
        });
      }
      return final;
    },
  },
};
</script>
