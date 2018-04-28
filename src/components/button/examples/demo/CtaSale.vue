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
  name: 'CtaSale',
  components: Components,
  data: function data() {
    return {
      data: [
        {
          title: 'CTA + Sale',
          buttons: [
            {
              label: 'CTA-Sale',
              disabled: false,
              styleModifiers: ['cta-sale'],
            },
            {
              label: 'Disabled',
              disabled: true,
              styleModifiers: ['cta-sale'],
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
