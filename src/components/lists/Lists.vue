<template>
  <ul :class="buildClass" v-if="type === 'ul'">
    <slot></slot>
  </ul>

  <ol :class="buildClass" v-else-if="type === 'ol'">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    name: 'cdr-list',
    props: {
      type: {
        type: String,
        default: 'ul',
        validator: value => (['ul', 'ol'].indexOf(value) >= 0) || false,
      },
      modifier: {
        required: false,
        default: () => [],
      },
    },
    computed: {
      buildClass() {
        const baseClass = 'cdr-list';
        let final = '';

        if (this.theme) {
          final += `${this[this.theme][baseClass]} `;

          this.modifier.forEach((mod) => {
            final += `${this[this.theme][`${baseClass}--${mod}`]} `;
          });
        } else if (this.type === 'ol') {
          final += `${baseClass} ${baseClass}--numbered `;

          this.modifier.forEach((mod) => {
            final = `${baseClass} ${baseClass}--${mod} `;
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
