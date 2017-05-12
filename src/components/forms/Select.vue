<template>
  <select :name="selectName" :class="[buildClass]">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: 'cdr-select',
    props: {
      theme: String,
      modifier: {
        required: false,
        default: () => [],
      },
      name: {
        type: String,
        required: false,
        default: '',
      },
      value: {
        type: String,
        required: false,
        default: '',
      },
    },
    computed: {
      buildClass() {
        const baseClass = 'cdr-select';
        let final = '';
        if (this.theme) {
          final += `${this[this.theme][baseClass]} `;
          this.modifier.forEach((mod) => {
            final += `${this[this.theme][`cdr-select--${mod}`]} `;
          });
        } else {
          final += `${baseClass} `;
          this.modifier.forEach((mod) => {
            final += `cdr-select--${mod} `;
          });
        }
        return final;
      },
    },
  };
</script>
