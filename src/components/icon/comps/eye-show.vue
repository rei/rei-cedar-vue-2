
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M12 6a11.57 11.57 0 019.85 5.473 1 1 0 010 1.054A11.57 11.57 0 0112 18a11.57 11.57 0 01-9.85-5.472 1 1 0 010-1.053A11.566 11.566 0 0112 6zm0 2a9.567 9.567 0 00-7.798 4A9.57 9.57 0 0012 16a9.57 9.57 0 007.799-4A9.57 9.57 0 0012 8zm0 1a3 3 0 110 6 3 3 0 010-6z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconEyeShow',
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
