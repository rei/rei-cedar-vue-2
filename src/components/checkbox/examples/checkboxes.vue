<template>
  <div data-backstop="checkboxes">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Checkboxes
    </cdr-text>
    <cdr-checkbox
      v-model="ex1"
      @change="logChange"
      data-backstop="checkbox-focus"
    >single</cdr-checkbox>
    <cdr-checkbox
      modifier="compact"
      v-model="ex1"
    >single compact</cdr-checkbox>
    <cdr-text>single: {{ ex1 }}</cdr-text>

    <span data-backstop="checkbox-checked">
      <cdr-checkbox
        v-model="ex2"
        true-value="checked"
        false-value="unchecked"
      >checked</cdr-checkbox>
      <cdr-checkbox
        modifier="compact"
        v-model="ex2"
        true-value="checked"
        false-value="unchecked"
      >checked compact</cdr-checkbox>
    </span>
    <cdr-text>checked: {{ ex2 }}</cdr-text>

    <cdr-checkbox
      v-model="ex3"
      true-value="checked"
    >custom true</cdr-checkbox>
    <cdr-text>custom true: {{ ex3 }}</cdr-text>

    <cdr-checkbox
      custom-value="A"
      v-model="exGroup"
    >A</cdr-checkbox>
    <cdr-checkbox
      custom-value="B"
      v-model="exGroup"
    >B</cdr-checkbox>
    <cdr-checkbox
      custom-value="C"
      v-model="exGroup"
    >C</cdr-checkbox>
    <cdr-checkbox
      :custom-value="{value:'D'}"
      v-model="exGroup"
    >D</cdr-checkbox>
    <cdr-checkbox
      :custom-value="testVal"
      v-model="exGroup"
    >E</cdr-checkbox>
    <cdr-checkbox
      :custom-value="testVal2"
      v-model="exGroup"
    >F</cdr-checkbox>

    <cdr-checkbox
      custom-value="A"
      modifier="compact"
      v-model="exGroup"
    >A compact</cdr-checkbox>
    <cdr-checkbox
      custom-value="B"
      modifier="compact"
      v-model="exGroup"
    >B compact</cdr-checkbox>
    <cdr-checkbox
      custom-value="C"
      modifier="compact"
      v-model="exGroup"
    >C compact</cdr-checkbox>
    <cdr-text>group: {{ exGroup }}</cdr-text>

    <cdr-checkbox disabled>
      disabled checkbox
    </cdr-checkbox>
    <cdr-checkbox
      v-model="checked"
      disabled
    >disabled and checked checkbox</cdr-checkbox>
    <cdr-checkbox
      disabled
      modifier="compact"
    >disabled checkbox compact</cdr-checkbox>
    <cdr-checkbox
      v-model="checked"
      disabled
      modifier="compact"
    >disabled and checked checkbox compact</cdr-checkbox>

    <div class="wrap">
      <cdr-checkbox
        name="complex1"
        v-model="complex1"
      >A longer label text to make things wrap for testing
      </cdr-checkbox>
    </div>

    <cdr-checkbox
      indeterminate
    >indeterminate</cdr-checkbox>
    <cdr-checkbox
      indeterminate
      disabled
    >indeterminate</cdr-checkbox>
    <cdr-checkbox
      indeterminate
      modifier="compact"
    >indeterminate compact</cdr-checkbox>
    <cdr-checkbox
      indeterminate
      disabled
      modifier="compact"
    >indeterminate compact</cdr-checkbox>

    <cdr-checkbox modifier="hide-figure">
      Hidden box
    </cdr-checkbox>
    <cdr-checkbox
      modifier="hide-figure"
      v-model="complex2"
      input-class="no-box"
      content-class="no-box__content"
    >Hidden box + custom checked state
    </cdr-checkbox>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'Checkboxes',
  components: Components,
  data() {
    return {
      checked: true,
      ex1: false,
      ex2: 'checked',
      ex3: 'checked',
      exGroup: ['A', { value: 'D' }, [9, 8]],
      testVal: {
        value: 'X',
        more: {
          things: [1, 2, 3],
        },
      },
      testVal2: [9, 8],
      complex1: false,
      complex2: true,
    };
  },
  methods: {
    logChange(val, e) {
      console.log('log', val, e); // eslint-disable-line
    },
  },
};
</script>

<style>
  .wrap {
    width: 180px;
  }

  .no-box:checked ~ .no-box__content {
    color: green;

    &::after {
      content: '(checked)';
    }
  }
</style>
