
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M8 11h8a1 1 0 010 2H8a1 1 0 010-2z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconMinusSm',
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
