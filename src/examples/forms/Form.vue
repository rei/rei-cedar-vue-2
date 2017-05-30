<template>
  <div>
    <h2>Forms</h2>

    <h3>validation</h3>
    <cdr-text v-model="test" label-text="Enter hi" :validation="validateFn" :is-required="true"></cdr-text>
    <p>{{test}}</p>

    <h3>no validation</h3>
    <cdr-text v-model="test2"></cdr-text>
    <p>{{test2}}</p>

    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="text" forvalue="thisOne" placeholder="Input label" required success>Input validation success</cdr-input>
    </div>
    <!--
    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="text" labelID="thisOne" placeholder="Input label">Input label</cdr-input>
    </div>
    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="text" placeholder="Disabled" disabled>Disabled label</cdr-input>
    </div>
    <div class="cdr-input-group">
      <cdr-input type="text" placeholder="Multi-line label" :modifier="['large']">Multi-line label</cdr-input>
    </div>
    <div class="cdr-input-group">
      <cdr-input type="text" placeholder="Multi-line label" :modifier="['large']" disabled>Multi-line label disabled</cdr-input>
    </div>
    <div class="cdr-input-group">
    <cdr-select name="example 1">
      <option value="Select your option">Select your option 1</option>
      <option value="option 2">Select your option 2</option>
      <option value="option 3">Select your option 3</option>
    </cdr-select>
    </div>
    <div class="cdr-input-group">
      <cdr-select name="example 1" disabled>
        <option value="Select your option">Select your option disabled</option>
      </cdr-select>
    </div>
    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="text" forvalue="thisOne" placeholder="Input label" required warning>Input validation warning</cdr-input>
    </div>
    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="text" forvalue="thisOne" placeholder="Input label" required error :validation="validate" v-model="something">Input validation error</cdr-input>
    </div>
    <fieldset>
      <div class="cdr-input-group cdr-input-group--inline">
        <cdr-input type="checkbox" name="checkboxes" forvalue="checkbox2" :class="['cdr-checkbox']">Checkbox</cdr-input>
      </div>
      <div class="cdr-input-group cdr-input-group--inline">
        <cdr-input type="checkbox" forvalue="checkboxDisabled" :class="['cdr-checkbox']" disabled>Checkbox disabled</cdr-input>
      </div>
    </fieldset>
    <cdr-input type="checkbox" name="checkboxes" forvalue="checkbox1" :class="['cdr-checkbox']" checked>Checkbox checked</cdr-input>
    <cdr-input type="checkbox" forvalue="checkboxDisabled" :class="['cdr-checkbox']" disabled checked>Checkbox disabled checked</cdr-input>
    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="radio" name="radios" forvalue="radio2" :class="['cdr-radio']">Radio</cdr-input>
      <cdr-input type="radio" name="radios" forvalue="radio1" :class="['cdr-radio']" checked>Radio checked</cdr-input>
    </div>
    <div class="cdr-input-group cdr-input-group--inline">
      <cdr-input type="radio" :class="['cdr-radio']" disabled>Radio disabled</cdr-input>
      <cdr-input type="radio" :class="['cdr-radio']" disabled checked>Radio disabled checked</cdr-input>
    </div>
    -->
  </div>
</template>

<script>
  import Components from '../../components/_index';

  export default {
    name: 'forms',
    components: Components,
    data() {
      return {
        test: '',
        test2: '',
      };
    },
    methods: {
      validateFn(inputText) {
        const obj = {
          state: '',
          message: '',
        };
        if (inputText === 'hi') {
          obj.state = 'valid';
        } else if (!isNaN(inputText)) {
          obj.state = 'error';
        } else {
          obj.state = 'warn';
          obj.message = 'This is a warning message';
        }
        return obj;
      },
    },
  };
</script>
