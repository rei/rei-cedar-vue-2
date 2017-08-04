<template>
  <cdr-input 
    v-bind="$attrs"
    v-on="$listeners"
    label="Search" 
    hide-label 
    placeholder="Search" 
    v-model="searchValue" 
    @input="updateSearch">
    <cdr-button slot="post" modifier="input-post" :on-click="click">
      <cdr-icon url="/static/rei-icons.svg#icon-rei-search"></cdr-icon>
    </cdr-button>
  </cdr-input>
</template>

<script>
import { CdrButton, CdrInput, CdrIcon } from '../../components/_index';

export default {
  name: 'cdr-search',
  inheritAttrs: false,
  components: {
    CdrButton,
    CdrInput,
    CdrIcon,
  },
  data() {
    return {
      searchValue: this.value,
    };
  },
  props: {
    /** @ignore */
    value: String,
    /** The function to run when search button is clicked */
    click: Function,
  },
  watch: {
    value() {
      this.searchValue = this.value;
    },
  },
  methods: {
    updateSearch() {
      this.$emit('input', this.searchValue);
    },
  },
};
</script>

<style>
  
</style>
