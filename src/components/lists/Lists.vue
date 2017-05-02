<template>
  <ul class="cdr-list" :class="modifierClass" v-if="type != 'ol'">
    <slot></slot>
  </ul>

  <ol class="cdr-list" :class="modifierClass" v-else>
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    name: 'cdr-list',
    props: {
      type: String,
      modifier: {
        required: false,
        default: () => [],
      },
    },
    computed: {
      modifierClass() {
        let final = '';
        this.modifier.forEach((mod) => {
          final += `cdr-list--${mod}`;
        });

        return final;
      },
    },
  };
</script>
