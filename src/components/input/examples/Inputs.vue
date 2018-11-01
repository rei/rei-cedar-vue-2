<template>
  <div>
    <h2>Text Inputs</h2>

    <cdr-input
      class="demo-input"
      v-model="defaultModel"
      label="#1 Default"
    />

    <cdr-input
      class="demo-input"
      v-model="requiredModel"
      label="#2 Required"
      required
    />

    <cdr-input
      class="demo-input"
      v-model="hiddenModel"
      label="This has no label"
      hide-label
      placeholder="#3 hidden-label"
    />

    <cdr-input
      class="demo-input"
      v-model="disabledModel"
      label="#4 Disabled Input"
      placeholder="I am disabled"
      disabled
    />

    <cdr-input
      class="demo-input"
      v-model="requiredWithIcons"
      id="required-with-icon"
      placeholder="Required with Icon"
      label="#5 Input Label"
      required
      type="email">
      <template slot="info">
        <a href="#/inputs">
          Info Link/Icon
        </a>
      </template>
      <template slot="pre-icon">
        <icon-twitter />
      </template>
      <template slot="post-icon">
        <icon-check-lg />
      </template>
      <template slot="helper-text">
        This is helper text.
      </template>
    </cdr-input>
    <cdr-input
      class="demo-input"
      v-model="multiRowModel"
      rows="10"
      placeholder="#6 Multi Line Input/TextArea"
      label="#6 Multi Line Input/TextArea"
    />
    <br>
    <div class="demo-input">Input #1 Value = {{ defaultModel }}</div>
    <div class="demo-input">Input #2 Value = {{ requiredModel }}</div>
    <div class="demo-input">Input #3 Value = {{ hiddenModel }}</div>
    <div class="demo-input">Input #4 Value = {{ disabledModel }}</div>
    <div class="demo-input">Input #5 Value = {{ requiredWithIcons }}</div>
    <div class="demo-input">Input #6 Value = {{ multiRowModel }}</div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { IconTwitter, IconCheckLg } from 'componentsdir/icon/dist/cdr-icon';

export default {
  name: 'Inputs',
  components: {
    ...Components,
    IconTwitter,
    IconCheckLg,
  },
  data() {
    return {
      defaultModel: '',
      requiredModel: '',
      hiddenModel: '',
      disabledModel: '',
      requiredWithIcons: '',
      multiRowModel: '',
    };
  },
};
</script>
<style>
  .demo-input {
    margin: 10px;
  }
</style>

