<template>
  <div data-backstop="inputs">
    <cdr-text
      tag="h2"
    >Text Inputs</cdr-text>

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
      v-model="sizeModel"
      label="Large Input"
      placeholder="Large Input"
      size="large"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@xs Input"
      placeholder="Large@xs Input"
      size="large@xs"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@sm Input"
      placeholder="Large@sm Input"
      size="large@sm"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@md Input"
      placeholder="Large@md Input"
      size="large@md"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@lg Input"
      placeholder="Large@lg Input"
      size="large@lg"
    />

    <cdr-input
      class="demo-input"
      v-model="requiredWithIcons"
      id="required-with-icon"
      placeholder="Required with Icon"
      label="#5 Input Label"
      required
      type="email"
    >
      <template slot="info">
        <cdr-link href="#/inputs">
          Info Link/Icon
        </cdr-link>
      </template>
      <template slot="pre-icon">
        <cdr-icon
          use="#twitter"
          inherit-color
        />
      </template>
      <template slot="post-icon">
        <cdr-icon
          use="#check-lg"
          inherit-color
        />
      </template>
      <template slot="helper-text">
        This is helper text. Input length: {{ requiredWithIcons.length }}
      </template>
    </cdr-input>
    <cdr-input
      class="demo-input "
      v-model="multiRowModel"
      :rows="10"
      placeholder="#6 Multi Line Input/TextArea"
      label="#6 Multi Line Input/TextArea"
    />
    <cdr-input
      class="demo-input "
      v-model="masterModel"
      @input="onMasterInput"
      @change="onMasterChange"
      placeholder="What would you like to set all input values to?"
      label="Master input that overwrites all other inputs on this page"
    />

    <div class="demo-input">
      Input #1 Value = {{ defaultModel }}
    </div>
    <div class="demo-input">
      Input #2 Value = {{ requiredModel }}
    </div>
    <div class="demo-input">
      Input #3 Value = {{ hiddenModel }}
    </div>
    <div class="demo-input">
      Input #4 Value = {{ disabledModel }}
    </div>
    <div class="demo-input">
      Input #5 Value = {{ requiredWithIcons }}
    </div>
    <div class="demo-input">
      Input #6 Value = {{ multiRowModel }}
    </div>
    <div class="demo-input">
      Size Inputs Value = {{ sizeModel }}
    </div>
    <div class="demo-input">
      Master Inputs Value = {{ masterModel }}
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Inputs',
  components: {
    ...Components,
  },
  data() {
    return {
      defaultModel: '',
      requiredModel: '',
      hiddenModel: '',
      disabledModel: '',
      requiredWithIcons: '',
      multiRowModel: '',
      sizeModel: '',
      masterModel: '',
    };
  },
  methods: {
    onMasterInput(value, e) {
      console.log('On Master Input value = ', value, ' e = ', e);
      this.defaultModel = value;
      this.requiredModel = value;
      this.hiddenModel = value;
      this.disabledModel = value;
      this.requiredWithIcons = value;
      this.multiRowModel = value;
      this.sizeModel = value;
    },
    onMasterChange(value, e) {
      console.log('On Master Change value = ', value, ' e = ', e);
    },
  },
};
</script>
<style>
  .demo-input {
    margin: 10px;
    background: white;
    line-height: 1;
  }
</style>
