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
        :size="button.size"
        :full-width="button.fullWidth"
        :responsive-size="button.responsiveSize"
        :type="button.type"
        :disabled="button.disabled"
        :data-backstop="button.backstop"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example">
      <h2>Primary Anchor</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
      >Link
      </cdr-button>
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
              size: 'large',
              fullWidth: false,
              backstop: 'cdr-button--large',
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              fullWidth: false,
              backstop: 'cdr-button--medium',
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
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
              size: 'large',
              fullWidth: false,
              backstop: 'cdr-button--large disabled',
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              fullWidth: false,
              backstop: 'cdr-button--medium disabled',
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
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
              size: 'small',
              fullWidth: true,
            },
            {
              label: 'Medium + full width',
              disabled: false,
              size: 'medium',
              fullWidth: true,
            },
            {
              label: 'Large + full width',
              disabled: false,
              size: 'large',
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
