<template>
<div>
  <div style="padding: 64px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px;">
    <cdr-input
      v-model="inputEx"
      placeholder="Tell me!"
      :error="error"
      :background="bg"
      label="What's happening?"
    >
      <template
        slot="error"
      >
        Helpful error message!
      </template>

      <template slot="helper-text-top">Helpful text!</template>
      <cdr-link slot="info">Helpful link!</cdr-link>

      <template slot="helper-text-bottom">More helpful text!?!?!</template>
      <template slot="post-icon">
        <cdr-tooltip
          class="cdr-input__button"
        >
          <cdr-button
            slot="trigger"
            :icon-only="true"
            aria-label="Click me to cause an error"
          >
            <icon-x-stroke />
          </cdr-button>
          I'm a tooltip!
        </cdr-tooltip>

        <cdr-button
          slot="trigger"
          :icon-only="true"
          class="cdr-input__button"
        >
          <icon-map />
        </cdr-button>

      </template>
      <cdr-popover
        id="mega-popover"
        slot="info-action"
      >
        <cdr-button
          slot="trigger"
          :icon-only="true"
          aria-label="Hello"
        >
          <icon-information-stroke />
        </cdr-button>
        I'm a popover!
      </cdr-popover>
    </cdr-input>

    <cdr-select
      label="Whats your favorite input element?"
      v-model="selectEx"
      prompt="Choose One"
      :background="bg"
      :error="error"
    >
      <option value="input">input</option>
      <option value="select">select</option>
      <option value="radio">radio</option>
      <option value="checkbox">checkbox</option>
      <template slot="error">
        Error message goes here!
      </template>

      <template slot="helper-text">Tell me!!!!</template>
    </cdr-select>

    <cdr-form-group
      label="What's your favorite radio?"
      :error="error"
      :required="true"
    >

      <cdr-radio
        name="example"
        custom-value="casio"
        v-model="radioEx"
        :background="bg"
      >Casio</cdr-radio>

      <cdr-radio
        name="example"
        custom-value="panasonic"
        v-model="radioEx"
        :background="bg"
      >Panasonic</cdr-radio>

      <cdr-radio
        name="example"
        custom-value="sony"
        v-model="radioEx"
        :background="bg"
      >Sony</cdr-radio>

      <template slot="error">
        CHOOSE ONE!
      </template>
    </cdr-form-group>

    <cdr-form-group
      label="Do you like these letters?"
      :error="error"
      :optional="true"
    >
      <cdr-checkbox
        custom-value="A"
        v-model="checkEx"
        :background="bg"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="checkEx"
        :background="bg"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="checkEx"
        :background="bg"
      >C</cdr-checkbox>
      <template slot="error">
        Something happened!
      </template>
    </cdr-form-group>
    <div style="margin-bottom: 50px;">
      <cdr-button @click="error = !error">Error</cdr-button>
    </div>
    <div/>

  </div>

  <div style="padding: 64px; display: grid; grid-template-columns: 1fr; gap: 64px;">
    <cdr-table size="large" style="margin: 0 auto; margin-bottom: 64px; width: max-content; font-size: 24px;">
      <tr>
        <th>Name</th>
        <th>Filesize</th>
        <th>Used In</th>
      </tr>
      <tr>
        <td>LabelStandalone</td>
        <td>3kb</td>
        <td>CdrInput, CdrSelect</td>
      </tr>
      <tr>
        <td>LabelWrapper</td>
        <td>9kb</td>
        <td>CdrCheckbox, CdrRadio</td>
      </tr>
      <tr>
        <td>Popup</td>
        <td>17kb</td>
        <td>CdrPopover, CdrTooltip</td>
      </tr>
      <tr>
        <td>FormError</td>
        <td>1.5kb</td>
        <td>CdrFormGroup, CdrInput, CdrSelect</td>
      </tr>
    </cdr-table>

    <div/>
    <cdr-list modifier="unordered" style="margin: 64px auto;">
      <li>Form Evolution: input masking, layout/patterns documentation</li>
      <li>CSS Grid: alternative to CdrRow/CdrCol, reduce markup and bundle size</li>
      <li>CdrImg refactor: enable lazy loading and other native features, reduce bundle size</li>
      <li>Utility Class and Text Modifier Deprecation: reduce bundle size, improve code quality</li>
      <li>Vue 3 Upgrade: maintenance, improved performance, code quality</li>
    </cdr-list>
    <div/>
  </div>
</div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Alert',
  components: {
    ...Components,
  },
  data() {
    return {
      checkEx: [],
      radioEx: '',
      selectEx: '',
      inputEx: '',
      error: false,
      bg: 'primary',
      showHelpers: false,
    };
  },
  methods: {
    validate() {
      this.error = true;
    },
    setBackground(background) {
      switch (background) {
        case 'primary':
          this.bg = 'primary';
          break;
        case 'secondary':
          this.bg = 'secondary';
          break;
        default:
          this.bg = 'primary';
      }
    },
  },
  computed: {
    helperClass() {
      return this.showHelpers ? 'show-helpers' : '';
    }
  },
  watch: {
    $route(to) {
      this.setBackground(to.query.background);
    },
  },
  mounted() {
    this.setBackground(this.$router.currentRoute.query.background);
  },
};
</script>

<style lang="scss">


</style>
