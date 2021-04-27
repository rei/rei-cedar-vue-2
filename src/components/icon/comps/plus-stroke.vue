
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M11 11V8a1 1 0 012 0v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconPlusStroke',
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
