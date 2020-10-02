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
        <cdr-button slot="trigger" class="button-style" @click="clearChangeInput" modifier="secondary"><icon-x-sm slot="icon"/></cdr-button>
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

    <!-- <cdr-input label="Button next to input" class="demo-input button-example">
      <cdr-button slot="button" modifier="secondary">hey</cdr-button>
    </cdr-input> -->

    <hr>

    <cdr-input
      class="demo-input"
      v-model="changeModel"
      label="Validate On Change"
      :error="changeError"
      :success="changeSuccess"
      @input="validateChange"
      :infield-label="true"
      required
    >
      <icon-information-fill slot="pre-icon"/>
      <div slot="info">info text</div>
      <div slot="helper-text" class="validation-msg">{{this.changeMessaging}}</div>
      <cdr-tooltip slot="post-icon" id="clear-tip">
        <cdr-button slot="trigger" class="button-style" @click="clearChangeInput" style="//height: 60px;" modifier="secondary"><icon-x-sm slot="icon"/></cdr-button>
        Click me to clear this input
      </cdr-tooltip>
    </cdr-input>
    <cdr-input
      class="demo-input"
      v-model="blurModel"
      label="Validate On Blur"
      :error="blurError"
      :success="blurSuccess"
      :infield-label="true"
      optional
      @blur="() => {this.validateBlur(this.blurModel)}"
    ><div slot="helper-text" class="validation-msg">{{this.blurMessaging}}</div></cdr-input>
    <hr>

    <cdr-input
      class="demo-input"
      v-model="messageStackModel"
      label="Messages Stack"
      :error="messageStackError"
      :success="messageStackSuccess"
      optional
      @blur="() => {this.validateMessageStack(this.messageStackModel)}"
    >
      <div slot="messaging" class="validation-msg">{{this.messageStackMessaging}}</div>
      <div slot="helper-text" class="validation-msg">Must be 8 or less characters</div>
    </cdr-input>
    <hr>
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


      messageStackModel: '',
      messageStackError: false,
      messageStackSuccess: false,
      messageStackMessaging: '',

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

    validateMessageStack(value, e) {
      if(!value) {
        this.messageStackError = true;
        this.messageStackSuccess = false;
        this.messageStackMessaging = "cannot be blank"
      } else if (value.length > 8) {
        this.messageStackError = true;
        this.messageStackSuccess = false;
        this.messageStackMessaging = "HEY I NEED DATA HERE!"
      } else {
        this.messageStackError = false;
        this.messageStackSuccess = true;
        this.messageStackMessaging = "Success!"
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

  .button-style {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
