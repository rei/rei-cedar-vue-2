<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Checkboxes
    </cdr-text>
    <cdr-checkbox
      v-model="sizeEx"
      size="small"
    >small</cdr-checkbox>
    <cdr-checkbox
      v-model="sizeEx"
      size="medium"
    >medium</cdr-checkbox>
    <cdr-checkbox
      v-model="sizeEx"
      size="large"
    >large</cdr-checkbox>
    <div data-backstop="checkbox-responsive">
      <cdr-checkbox
        v-model="sizeEx"
        size="small@lg medium@sm large@xs"
      >responsive</cdr-checkbox>
    </div>
    <cdr-checkbox
      v-model="sizeEx2"
      size="small"
    >small</cdr-checkbox>
    <cdr-checkbox
      v-model="sizeEx2"
      size="medium"
    >medium</cdr-checkbox>
    <cdr-checkbox
      v-model="sizeEx2"
      size="large"
    >large</cdr-checkbox>
    <cdr-checkbox
      v-model="sizeEx2"
      size="small@lg medium@sm large@xs"
    >responsive</cdr-checkbox>
    <cdr-checkbox
      v-model="ex1"
      @change="logChange"
    >single</cdr-checkbox>
    <cdr-checkbox
      modifier="compact"
      v-model="ex1"
    >single compact</cdr-checkbox>
    <cdr-text>single: {{ ex1 }}</cdr-text>

    <div data-backstop="checkbox-checked">
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
    </div>
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

    <cdr-text
      class="cdr-my-space-one-x"
      tag="h3"
    >
      Checkbox group with indeterminate state:
    </cdr-text>

    <fieldset>
      <legend>Choose your toppings</legend>
      <cdr-checkbox
        v-model="allSelected"
        :indeterminate="isIndeterminate"
        @change="selectAll"
        aria-controls="toppings"
      >
        Select All
      </cdr-checkbox>
      <cdr-list
        role="group"
        id="toppings"
        aria-label="Individual toppings"
      >
        <li
          v-for="c in toppings"
          :key="`checkbox-${c}`"
        >
          <cdr-checkbox
            v-model="selected"
            :custom-value="c"
            class="cdr-ml-space-one-x"
            name="toppings"
          >{{ c }}</cdr-checkbox>
        </li>
      </cdr-list>
    </fieldset>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Checkboxes',
  components: Components,
  data() {
    return {
      checked: true,
      sizeEx: false,
      sizeEx2: true,
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
      toppings: ['Cheese', 'Pepperoni', 'Mushroom', 'Peppers'],
      selected: ['Cheese'],
      allSelected: false,
    };
  },
  computed: {
    isIndeterminate() {
      this.allSelected = false; // eslint-disable-line vue/no-side-effects-in-computed-properties
      if (this.selected.length === 0) {
        return false;
      } if (this.selected.length === this.toppings.length) {
        this.allSelected = true; // eslint-disable-line vue/no-side-effects-in-computed-properties
        return false;
      }
      return true;
    },
  },
  methods: {
    selectAll(isChecked) {
      this.selected = isChecked ? this.toppings.slice() : [];
    },
    logChange(val, e) {
      console.log('log', val, e); // eslint-disable-line
    },
  },
};
</script>

<style lang="scss">
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
