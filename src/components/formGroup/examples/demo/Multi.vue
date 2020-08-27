<template>
  <div data-backstop="form-group-multi">
    <cdr-form-group label="Party time.">
      <cdr-input
        v-model="inputModel"
        label="Is it?"
      />
      <cdr-select
        label="Really?"
        v-model="selectModel"
        prompt="Choose one"
      >
        <option value="yes">
          yes
        </option>
        <option value="yeah">
          yeah
        </option>
        <option value="YEP">
          YEP
        </option>
      </cdr-select>
      <cdr-checkbox
        custom-value="PARTY"
        v-model="checkboxModel"
      >PARTY</cdr-checkbox>
      <cdr-checkbox
        custom-value="TIME"
        v-model="checkboxModel"
      >TIME</cdr-checkbox>
      <cdr-checkbox
        custom-value="ALRIGHT!"
        v-model="checkboxModel"
      >ALRIGHT!</cdr-checkbox>
    </cdr-form-group>
  </div>
</template>

<script>
import {
  CdrFormGroup, CdrCheckbox, CdrInput, CdrSelect,
} from 'srcdir/index';

export default {
  name: 'ParagraphsDemo',
  components: {
    CdrFormGroup,
    CdrCheckbox,
    CdrInput,
    CdrSelect,
  },
  data() {
    return {
      inputModel: 'yeah it is',
      selectModel: 'yes',
      checkboxModel: [],
    };
  },
};
</script>

<style>

</style>
