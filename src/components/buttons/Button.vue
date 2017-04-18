<template>
  <button :type="modifierType" class="cdr-button" :class="modifierClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'cdr-button',
    props: {
      modifier: {
        required: false,
        default: () => [],
      },
      type: {
        required: false,
        default: () => [],
      },
      handleClick: {
        default: () => () => null,
      },
    },
    computed: {
      modifierClass() {
        let final = '';
        this.modifier.forEach((mod) => {
          final += `cdr-button--${mod} `;
        });

        return final;
      },
      modifierType() {
        let final = 'button';
        this.type.forEach((mod) => {
          final = `${mod}`;
        });

        return final;
      },
    },
  };
</script>
