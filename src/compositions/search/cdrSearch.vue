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
      @input="updateSearch"
      :modifier="inputModifier">
      <span slot="preicon" class="cdr-search__icon"></span>
    </cdr-input>
    <cdr-button v-if="!bare" :modifier="buttonModifier" :on-click="click">Search</cdr-button>
  </div>
</template>

<script>
import CdrButton from './node_modules/@rei-co-op/cedar-button';
import CdrInput  from './node_modules/@rei-co-op/cedar-input';

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
    /**
     * Bare display variant (removes button).
     */
    bare: {
      type: Boolean,
      default: false,
    },
    /**
     * Large display variant.
     */
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonModifier() {
      return this.large ? '' : 'sm';
    },
    inputModifier() {
      return this.large ? 'large' : '';
    },
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
