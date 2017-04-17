<template>
  <a class="cdr-link" :class="modifiers">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'cdr-a',
    props: {
      modifierName: {
        required: false,
        default: [],
      },
    },
    computed: {
      modifiers() {
        let final = '';
        this.modifierName.forEach((mod) => {
          final += `cdr-link--${mod}`;
        });

        return final;
      },
    },
  };
</script>

