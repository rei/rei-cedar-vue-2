
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M12 8a.997.997 0 00-.702.288l-5.005 5.005a1 1 0 001.414 1.414L12 10.415l4.295 4.295a1 1 0 001.412-1.417l-4.98-4.98A.997.997 0 0012 8z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconCaretUp',
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
