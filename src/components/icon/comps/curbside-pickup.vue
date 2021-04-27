
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M17.256 6a1 1 0 01.958.713L19.2 10h1.3a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1v9.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V19h-9v2.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V12h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1.302l.984-3.287A1 1 0 016.744 6h10.512zm.244 7h-11v4h11v-4zm-9.25.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm7.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM16.512 8H7.488l-.899 3h6.496a1.5 1.5 0 012.83 0h1.497l-.9-3zM12 2c1.394 0 2.676.475 3.695 1.272.186.187.305.444.305.728a1 1 0 01-1.603.798A3.98 3.98 0 0012 4c-.88 0-1.692.284-2.353.765a1 1 0 11-1.252-1.56A5.971 5.971 0 0112 1.999z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconCurbsidePickup',
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
