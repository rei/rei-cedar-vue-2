
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM9 8.027h1.5a.5.5 0 01.5.5v6.946a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5V8.527a.5.5 0 01.5-.5zm4.5 0H15a.5.5 0 01.5.5v6.946a.5.5 0 01-.5.5h-1.5a.5.5 0 01-.5-.5V8.527a.5.5 0 01.5-.5z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconPauseStroke',
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
