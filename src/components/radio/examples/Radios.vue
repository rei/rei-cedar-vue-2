<template>
  <div data-backstop="radios">
    <cdr-text
      tag="h2"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Radios
    </cdr-text>
    <cdr-radio
      id="test1"
      name="example"
      custom-value="a1"
      v-model="ex1"
      data-backstop="radio-focus"
    >A1</cdr-radio>
    <cdr-radio
      name="example"
      custom-value="a2"
      v-model="ex1"
    >A2</cdr-radio>
    <cdr-radio
      name="example"
      :custom-value="{val:'a3'}"
      v-model="ex1"
    >A3</cdr-radio>
    <cdr-radio
      name="example"
      custom-value="a4"
      v-model="ex1"
      disabled
    >A4 (disabled)</cdr-radio>
    <cdr-text>Group A Picked: {{ ex1 }}</cdr-text>
    <hr>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      custom-value="a1"
      v-model="ex1compact"
    >A1 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      custom-value="a2"
      v-model="ex1compact"
    >A2 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      :custom-value="{val:'a3'}"
      v-model="ex1compact"
    >A3 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      custom-value="a4"
      v-model="ex1compact"
      disabled
    >A4 compact (disabled)</cdr-radio>

    <cdr-text>Group A compact Picked: {{ ex1compact }}</cdr-text>
    <hr>

    <cdr-text>
      Radios with spacing
    </cdr-text>
    <cdr-radio
      space="cdr-ml-space-one-x cdr-mt-space-half-x"
      id="test2"
      name="examplespacing"
      custom-value="a1"
      v-model="ex1spacing"
      data-backstop="radio-focus"
    >A1</cdr-radio>
    <cdr-radio
      space="cdr-ml-space-one-x cdr-mt-space-half-x"
      name="examplespacing"
      custom-value="a2"
      v-model="ex1spacing"
    >A2</cdr-radio>
    <cdr-radio
      space="cdr-ml-space-one-x cdr-mt-space-half-x"
      name="examplespacing"
      :custom-value="{val:'a3'}"
      v-model="ex1spacing"
    >A3</cdr-radio>
    <cdr-text>Spacing Picked: {{ ex1spacing }}</cdr-text>
    <hr>
    <div style="max-width: 200px;">
      <cdr-radio
        name="example2"
        custom-value="b1"
        v-model="ex2"
      >B1</cdr-radio>
      <cdr-radio
        name="example2"
        custom-value="b2"
        v-model="ex2"
      >B2</cdr-radio>
      <cdr-text>Group B Picked: {{ ex2 }}</cdr-text>
    </div>
    <hr>
    <cdr-radio
      modifier="compact"
      name="example2compact"
      custom-value="b1"
      v-model="ex2compact"
    >B1 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="example2compact"
      custom-value="b2"
      v-model="ex2compact"
    >B2 compact</cdr-radio>
    <cdr-text>Group B compact Picked: {{ ex2compact }}</cdr-text>
    <hr>
    <cdr-radio
      name="example3"
      custom-value="c1"
      v-model="ex3"
      disabled
    >C1 (selected + disabled)</cdr-radio>

    <cdr-radio
      modifier="compact"
      name="example3compact"
      custom-value="c1"
      v-model="ex3compact"
      disabled
    >C1 compact (selected + disabled)</cdr-radio>

    <cdr-radio
      name="custom"
      custom-value="customA"
      v-model="custom"
      modifier="hide-figure"
    >Custom A (hide-figure)</cdr-radio>

    <cdr-radio
      name="custom"
      custom-value="customB"
      v-model="custom"
      modifier="hide-figure"
      input-class="no-box"
      content-class="no-box__content"
    >Custom B</cdr-radio>
    <hr>
    <div class="wrap">
      <cdr-radio
        name="example3"
        custom-value="c2"
        v-model="ex3"
      >A longer label text to make things wrap for testing
      </cdr-radio>
    </div>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'Radios',
  components: Components,
  data() {
    return {
      ex1: '',
      ex1compact: '',
      ex1spacing: '',
      ex2: 'b2',
      ex2compact: 'b2',
      ex3: 'c1',
      ex3compact: 'c1',
      custom: 'customB',
    };
  },
};
</script>

<style lang="scss">
  .wrap {
    width: 180px;
  }

  .no-box:checked ~ .no-box__content {
    color: green;
  }

  .no-box:checked ~ .no-box__content::after {
    content: '(checked)';
  }
</style>
