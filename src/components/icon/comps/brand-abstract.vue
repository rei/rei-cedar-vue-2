
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M10 9a5 5 0 110 10 5 5 0 010-10zm9-4v14h-3V8H5V5h14zm-9 7a2 2 0 100 4 2 2 0 000-4z"></path>
</cdr-icon>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconBrandAbstract',
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
