<template>
  <div>
    <div
      class="button-example"
      v-for="(section, index) in data"
      :key="index">
      <h2>{{ section.title }}</h2>
      <cdr-button
        v-for="(button, index) in section.buttons"
        :key="index"
        :static-size="button.staticSize"
        :full-width="button.fullWidth"
        :responsive-size="button.responsiveSize"
        :type="button.type"
        :disabled="button.disabled"
        :data-backstop="button.backstop"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="lg">
        Large
      </cdr-button>
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log">
        Medium
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="sm">
        Small
      </cdr-button>
    </div>
    <div class="button-example">
      <h2>Color themes</h2>
      <cdr-button theme="red">red</cdr-button>
      <cdr-button
        theme="red"
        modifier="sm">red sm</cdr-button>
      <cdr-button theme="green">green</cdr-button>
      <cdr-button
        theme="green"
        modifier="xs">green xs</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Default',
  components: Components,
  data: function data() {
    return {
      data: [
        {
          title: 'Default sizes',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              staticSize: 'large',
              fullWidth: false,
              backstop: 'cdr-button--large',
            },
            {
              label: 'Medium',
              disabled: false,
              staticSize: 'medium',
              fullWidth: false,
              backstop: 'cdr-button--medium',
            },
            {
              label: 'Small',
              disabled: false,
              staticSize: 'small',
              fullWidth: false,
              backstop: 'cdr-button--small',
            },
          ],
        },
        {
          title: 'Disabled',
          buttons: [
            {
              label: 'Large',
              disabled: true,
              staticSize: 'large',
              fullWidth: false,
              backstop: 'cdr-button--large disabled',
            },
            {
              label: 'Medium',
              disabled: true,
              staticSize: 'medium',
              fullWidth: false,
              backstop: 'cdr-button--medium disabled',
            },
            {
              label: 'Small',
              disabled: true,
              staticSize: 'small',
              fullWidth: false,
              backstop: 'cdr-button--small disabled',
            },
          ],
        },
        {
          title: 'Full Width',
          buttons: [
            {
              label: 'Small + full width',
              disabled: false,
              staticSize: 'small',
              fullWidth: true,
            },
            {
              label: 'Medium + full width',
              disabled: false,
              staticSize: 'medium',
              fullWidth: true,
            },
            {
              label: 'Large + full width',
              disabled: false,
              staticSize: 'large',
              fullWidth: true,
            },
          ],
        },
        {
          title: 'Responsive',
          buttons: [
            {
              label: 'Responsive with default',
              disabled: false,
              fullWidth: true,
              responsiveSize: ['large@small'],
              backstop: 'cdr-button--large@small',
            },
          ],
        },
      ],
    };
  },
  methods: {
    log() {
      console.log('clicked'); // eslint-disable-line
    },
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }

  .button-example button {
    margin: 0 10px 5px 0;
  }
</style>
