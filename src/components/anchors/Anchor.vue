<template>
  <a class="cdr-link" :class="modifierClass">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'cdr-a',
    props: {
      modifier: {
        required: false,
        default: () => [],
      },
    },
    computed: {
      modifierClass() {
        let final = '';
        this.modifier.forEach((mod) => {
          final += `cdr-link--${mod}`;
        });

        return final;
      },
    },
  };
</script>

