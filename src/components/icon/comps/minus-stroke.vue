
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-4-9h8a1 1 0 010 2H8a1 1 0 010-2z"></path>
</cdr-icon>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconMinusStroke',
    components: {
      CdrIcon,
    },
    setup(props) {
      return {
        props
      };
    },
  });
</script>
