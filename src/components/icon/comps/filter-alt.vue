
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M13.5 14.598v5.53a.879.879 0 01-1.5.622l-1.207-1.207a1 1 0 01-.293-.707v-4.238L4.18 5.574A1 1 0 015.013 4h13.976a1 1 0 01.831 1.574l-6.32 9.024zM12 13.254L17.079 6H6.921L12 13.254z"></path>
</cdr-icon>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconFilterAlt',
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
