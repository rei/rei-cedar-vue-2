<template>
  <div>
    <input class="cdr-checkbox" type="checkbox" :id="checkboxId">
    <label class="cdr-checkbox__label" :for="checkboxId">Label</label>
  </div>  
</template>

<script>
// const checkIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-check.svg');
// eslint-disable-line import/no-webpack-loader-syntax

export default {
  name: 'cdr-checkbox',
  props: {
    /**
     * id for the input that is mapped to the label 'for' attribute.
     * If one is not provided, it will be generated
    */
    id: String,
  },
  computed: {
    checkboxId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
  },
};
</script>

<style>
  
</style>
