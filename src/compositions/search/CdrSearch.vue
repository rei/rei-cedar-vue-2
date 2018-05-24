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
import { CdrButton } from '@rei/cdr-button';
import { CdrInput } from '@rei/cdr-input';

/**
 * A Cedar composition of `cdr-input` and `cdr-button` that gives you a simple search box. Passes all other attributes and events to `cdr-input`.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
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
      /**
       * Current input value. Fires while typing.
       * @event input
       * @type string
       */
      this.$emit('input', this.searchValue);
    },
  },
};
</script>

<style>
@import 'cssdir/settings/_index.pcss';
@import './styles/vars/CdrSearch.vars.pcss';
@import './styles/CdrSearch.pcss';
</style>
