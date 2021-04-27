
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M5.686 22.066l1.668-7.552L1.82 9.465l7.298-.659 2.877-7.146 2.877 7.146 7.298.66-5.534 5.048 1.668 7.552-6.309-4.006-6.31 4.006h.001zm6.309-5.19l4.814 3.056-1.274-5.767 4.283-3.908-5.645-.51-2.178-5.41v12.539z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconStar50',
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
