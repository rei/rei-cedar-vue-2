<template>
  <button :class="className" type="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'button',
    props: ['theme'],
    data() {
      return {
        className: 'cdr-button',
      };
    },
    created() {
      if (this.theme) {
        this.className = this[this.theme][this.className];
      }
    },
  };
</script>

<style module="red">
  @import '../../css/themes/red.pcss';
  @import '../../css/components/button.pcss';
</style>
 
<style module="blue"> 
  @import '../../css/themes/blue.pcss';
  @import '../../css/components/button.pcss';
</style>
