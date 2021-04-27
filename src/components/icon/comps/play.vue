
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M9.737 16.195a.5.5 0 01-.737-.44v-7.5a.5.5 0 01.737-.44l6.999 3.745a.5.5 0 010 .881l-6.999 3.754z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconPlay',
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
