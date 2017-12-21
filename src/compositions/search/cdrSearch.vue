<template>
  <div class="cdr-search">
    <cdr-input
      class="cdr-search__input"
      v-bind="$attrs"
      label="Search"
      hide-label
      placeholder="Search"
      v-model="searchValue"
      @input="updateSearch"
      :modifier="inputModifier"
    >
      <span
        slot="preicon"
        class="cdr-search__icon"
      />
    </cdr-input>
    <cdr-button
      v-if="!bare"
      :modifier="buttonModifier"
      :on-click="click"
    >Search</cdr-button>
  </div>
</template>

<script>
import { CdrButton } from '@rei-co-op/cedar-button';
import { CdrInput } from '@rei-co-op/cedar-input';

export default {
  name: 'CdrSearch',
  components: {
    CdrButton,
    CdrInput,
  },
  inheritAttrs: false,
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
  data() {
    return {
      searchValue: this.value,
    };
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

<style>
@import '../../css/settings/_index.pcss';
@import 'styles/vars/cdrSearch.vars.pcss';
@import 'styles/cdrSearch.pcss';
</style>
