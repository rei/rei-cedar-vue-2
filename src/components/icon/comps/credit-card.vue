
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M21 5a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h18zm-1 7H4v5h16v-5zm0-5H4v2h16V7zm-4 7h3v2h-3v-2zm-3 0h2v2h-2v-2z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconCreditCard',
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
