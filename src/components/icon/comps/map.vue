
<template>
<cdr-icon v-bind="props">
  <slot/>
  <path role="presentation" d="M19.555 4a.341.341 0 00-.137.021l-4.751 1.844L9.333 4l-5.01 1.688A.454.454 0 004 6.115v13.44a.447.447 0 00.582.424l4.751-1.844L14.667 20l5.013-1.685a.458.458 0 00.32-.43V4.445A.447.447 0 0019.555 4zm-4.888 14.223l-5.334-1.871V5.777l5.334 1.871v10.575z"></path>
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'IconMap',
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
