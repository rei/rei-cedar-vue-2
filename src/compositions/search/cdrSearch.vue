<template>
  <cdr-input 
    v-bind="$attrs"
    v-on="$listeners"
    label="Search" 
    hide-label 
    placeholder="Search" 
    v-model="searchValue" 
    @input="updateSearch">
    <cdr-button slot="post" modifier="sm" :on-click="click">Search</cdr-button>
  </cdr-input>
</template>

<script>
import { CdrButton, CdrInput } from '../../components/_index';

export default {
  name: 'cdr-search',
  inheritAttrs: false,
  components: {
    CdrButton,
    CdrInput,
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

<style theme="default">
@import '../../css/settings/_index.pcss';
@import 'cdrSearch.pcss';
</style>
