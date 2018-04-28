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
        :style-modifiers="button.styleModifiers"
        :type="button.type"
        :disabled="button.disabled"
      >{{ button.label }}</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Secondary',
  components: Components,
  data: function data() {
    return {
      data: [
        {
          title: 'Secondary',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              staticSize: 'large',
              styleModifiers: ['secondary'],
            },
            {
              label: 'Disabled',
              disabled: true,
              staticSize: 'medium',
              styleModifiers: ['secondary'],
            },
            {
              label: 'Small',
              disabled: false,
              staticSize: 'small',
              styleModifiers: ['secondary'],
            },
          ],
        },
        {
          title: 'Secondary Full Width',
          buttons: [
            {
              label: 'Full Width',
              disabled: false,
              fullWidth: true,
              styleModifiers: ['secondary'],
            },
            {
              label: 'Full Width Disabled',
              disabled: true,
              fullWidth: true,
              styleModifiers: ['sedondary'],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
