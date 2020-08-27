<template>
  <div>
    <checkboxes />
    <radios />
    <multi />
  </div>
</template>

<script>
import checkboxes from 'componentsdir/formGroup/examples/demo/Checkboxes';
import radios from 'componentsdir/formGroup/examples/demo/Radios';
import multi from 'componentsdir/formGroup/examples/demo/Multi';

export default {
  name: 'FormGroup',
  components: {
    checkboxes,
    radios,
    multi,
  },
};
</script>

<style>
</style>
