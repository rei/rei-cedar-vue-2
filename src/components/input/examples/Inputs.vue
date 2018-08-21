<template>
  <form class="input-demo-form">
    <h2>Text Inputs</h2>
    <cdr-input
      v-model="standard"
      hide-label
      label="Standard Input"
      id="default-input"
      placeholder="Default Input Placeholder"
    />
    <br>
    <cdr-input
      v-model="standard"
      hide-label
      label="Standard Disabled Input"
      id="default-inactive-input"
      placeholder="Disabled Default Placeholder"
      disabled
    />
    <br>
    <cdr-input
      v-model="large"
      hide-label
      label="Large Input"
      id="large-input"
      placeholder="Large Input Placeholder"
    />
    <br>
    <cdr-input
      v-model="large"
      hide-label
      label="Large Disabled Input"
      id="large-inactive-input"
      placeholder="Large Disabled Placeholder"
      disabled
    />
    <br>
    <cdr-input
      v-model="withLabel"
      id="input-with-label"
      label="Input with Label"
      placeholder="Input with Label"
    />
    <br>
    <cdr-input
      v-model="withLabel"
      id="disabled-input-with-label"
      placeholder="Disabled Input with Label"
      label="Disabled Input with Label"
      disabled
    />
    <br>
    <cdr-input
      v-model="textArea"
      id="text-area"
      placeholder="Text Area"
      label="Text Area"
      :rows="10"
    />
    <br>
    <cdr-input
      v-model="textArea"
      id="disabled-text-area"
      placeholder="Disabled Text Area"
      label="Disabled Text Area"
      :rows="10"
      disabled
    />
    <br>
    <h2>Add ons</h2>
    <cdr-input
      v-model="requiredWithIcon"
      id="required-with-icon"
      placeholder="Required with Icon"
      label="Input Label">
      <!-- Required Slot -->
      <template slot="required">
        Required
      </template>
      <!-- Info Slot -->
      <template slot="info">
        <a href="#/inputs">
          Info Link/Icon
        </a>
      </template>
      <template slot="preicon">
        <icon-twitter />
      </template>
      <template slot="posticon">
        <icon-check-lg />
      </template>
    </cdr-input>
    <br>


  </form>
</template>

<script>
import Components from 'componentsdir/_index';
import { IconTwitter, IconCheckLg } from 'componentsdir/icon/dist/cdr-icon';
import CdrIcon from 'componentsdir/icon/CdrIcon';
import CdrInput from 'componentsdir/input/CdrInput';

export default {
  name: 'Forms',
  components: {
    Components,
    CdrIcon,
    CdrInput,
    IconTwitter,
    IconCheckLg,
  },
  data() {
    return {
      standard: '',
      large: '',
      withLabel: '',
      textArea: '',
      requiredWithIcon: '',
      debounce: '',
      requiredValidated: '',
      required: '',
      nothing: '',
      pattern: '',
      empty: '',
      valid: 'hi',
      warning: '',
      error: 1,
      multi: '',
      multi2: '',
    };
  },
};
</script>
<style>
  .input-demo-form {
    margin: 20px;
  }
</style>

