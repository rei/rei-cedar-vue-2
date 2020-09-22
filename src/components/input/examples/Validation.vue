<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-sans-300 heading-sans-400@md heading-sans-400@lg"
    >
      Validation
    </cdr-text>
    <cdr-input
      class="demo-input"
      v-model="changeModel"
      label="Validate On Change"
      :error="changeError"
      :success="changeSuccess"
      @input="validateChange"
      required
    >
      <div slot="helper-text" class="validation-msg">{{this.changeMessaging}}</div>
      <cdr-tooltip slot="post-icon" id="clear-tip">
        <cdr-button slot="trigger" @click="clearChangeInput" modifier="secondary"><icon-x-sm slot="icon"/></cdr-button>
        Click me to clear this input
      </cdr-tooltip>
    </cdr-input>
    <cdr-input
      class="demo-input"
      v-model="blurModel"
      label="Validate On Blur"
      :error="blurError"
      :success="blurSuccess"
      optional
      @blur="() => {this.validateBlur(this.blurModel)}"
    ><div slot="helper-text" class="validation-msg">{{this.blurMessaging}}</div></cdr-input>

    <cdr-input label="lalalala" class="demo-input button-example">
      <cdr-button slot="button" modifier="secondary">hey</cdr-button>
    </cdr-input>
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
      blurModel: '',
      blurError: false,
      blurSuccess: false,
      blurMessaging: 'Must be 8 or less characters',

      changeModel: '',
      changeError: false,
      changeSuccess: false,
      changeMessaging: '',
    };
  },
  // computed {
  //   changeMessaging() {
  //     return this.changeError ?  :
  //   }
  // },
  methods: {
    clearChangeInput() {
      this.changeModel = ""
      this.changeError = false;
      this.changeSuccess = false;
      this.changeMessaging = ""
    },
    validateChange(value, e) {
      if(!value) {
        this.changeError = true;
        this.changeSuccess = false;
        this.changeMessaging = "cannot be blank"
      } else if (value.length > 8) {
        this.changeError = true;
        this.changeSuccess = false;
        this.changeMessaging = "must be 8 or less characters"
      } else {
        this.changeError = false;
        this.changeSuccess = true;
        this.changeMessaging = "Success!"
      }
    },

    validateBlur(value, e) {
      if (value.length > 8) {
        this.blurError = true;
        this.blurSuccess = false;
        this.blurMessaging = "ERROR: must be 8 or less characters"
      } else if (value.length > 1) {
        this.blurError = false;
        this.blurSuccess = true;
        this.blurMessaging = "Success!"
      } else {
        this.blurError = false;
        this.blurSuccess = false;
        this.blurMessaging = "must be 8 or less characters"
      }
    },
  },
};
</script>
<style>
  .demo-input {
    margin: 10px;
    /*line-height: 1;*/
  }

  .validation-msg{
    padding: 4px;
  }

  .button-example input {
    flex-grow: 1;
    width: auto;
  }
</style>
