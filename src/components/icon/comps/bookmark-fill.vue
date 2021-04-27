
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1.6.8L12.002 17 5.6 21.8A1 1 0 014 21V3a1 1 0 011-1z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconBookmarkFill',
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
