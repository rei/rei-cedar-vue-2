
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M12 17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconMoreFunctions',
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
