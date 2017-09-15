<template>
  <div class="cdr-search">
    <cdr-input 
      class="cdr-search__input"
      v-bind="$attrs"
      v-on="$listeners"
      label="Search" 
      hide-label 
      placeholder="Search" 
      v-model="searchValue" 
      @input="updateSearch">
      <span slot="preicon" class="cdr-search__icon"></span>
    </cdr-input>
    <cdr-button modifier="sm" :on-click="click">Search</cdr-button>
  </div>
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
