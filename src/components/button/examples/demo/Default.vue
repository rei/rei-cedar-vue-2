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
        :style-options="button.styleOptions"
        type="button"
        :disabled="button.disabled"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="lg">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Large
      </cdr-button>
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Medium
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="sm">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
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
              styleOptions: { defaultSize: 'large' },
            },
            {
              label: 'Medium',
              disabled: false,
              styleOptions: { defaultSize: 'medium' },
            },
            {
              label: 'Disabled',
              disabled: true,
              styleOptions: { defaultSize: 'small' },
            },
          ],
        },
        {
          title: 'Full Width',
          buttons: [
            {
              label: 'Small full width',
              disabled: false,
              styleOptions: { defaultSize: ['small', 'full-width'] },
            },
            {
              label: 'Large full width',
              disabled: false,
              styleOptions: { defaultSize: ['large', 'full-width'] },
            },
          ],
        },
        {
          title: 'Responsive',
          buttons: [
            {
              label: 'Responsive with default',
              disabled: false,
              styleOptions: { defaultSize: 'full-width', responsiveSize: ['large@small'] },
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
