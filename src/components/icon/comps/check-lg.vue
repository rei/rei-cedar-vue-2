
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M9.673 18.669h.001L19.766 6.644a1 1 0 10-1.532-1.286l-9.3 11.085-3.169-3.776a1 1 0 10-1.532 1.286l3.875 4.618a.999.999 0 001.565.099z"></path>
</cdr-icon>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconCheckLg',
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
