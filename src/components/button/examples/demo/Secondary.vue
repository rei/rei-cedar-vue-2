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
        :style-modifiers="button.styleModifiers"
        :type="button.type"
        :disabled="button.disabled"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example">
      <h2>Secondary Anchor</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="small"
        style-modifiers="secondary"
      >Link
      </cdr-button>
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
              size: 'large',
              styleModifiers: 'secondary',
              backstop: 'cdr-button--large cdr-button--secondary',
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              styleModifiers: 'secondary',
              backstop: 'cdr-button--medium cdr-button--secondary',
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
              styleModifiers: 'secondary',
              backstop: 'cdr-button--small cdr-button--secondary',
            },
          ],
        },
        {
          title: 'Secondary Disabled',
          buttons: [
            {
              label: 'Large',
              disabled: true,
              size: 'large',
              styleModifiers: 'secondary',
              backstop: 'cdr-button--large cdr-button--secondary disabled',
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              styleModifiers: 'secondary',
              backstop: 'cdr-button--medium cdr-button--secondary disalbed',
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
              styleModifiers: 'secondary',
              backstop: 'cdr-button--small cdr-button--secondary disabled',
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
