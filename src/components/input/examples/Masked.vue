<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-sans-300 heading-sans-400@md heading-sans-400@lg"
    >
      Masking
    </cdr-text>
    <cdr-input
      class="demo-input"
      v-model="ccModel"
      v-mask="'#### #### #### ####'"
      label="credit card"
      @input="maskIt"
      ref="testinput"
    />
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import { VueMaskDirective } from 'v-mask'

export default {
  name: 'Inputs',
  components: {
    ...Components,
  },
  directives: {
    mask: VueMaskDirective,
  },
  data() {
    return {
      ccModel: '',
      ccMasked: '',
      mask: '#### #### #### ####'
    }
  },
  methods: {
    maskIt(v, e) {
      // console.log(v, e);
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
