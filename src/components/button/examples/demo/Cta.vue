<template>
  <div>
    <h1>Bluuurg</h1>
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
    <div class="button-example">
      <cdr-button
        data-backstop="cdr-button--cta-brand"
        :style-options="{ styles: ['cta-brand'] }"
      >Backstop button
      </cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Cta',
  components: Components,
  data: function data() {
    return {
      data: [
        {
          title: 'CTA-brand',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              staticSize: 'large',
              styleModifiers: ['cta-brand'],
            },
            {
              label: 'Medium',
              disabled: false,
              staticSize: 'medium',
              styleModifiers: ['cta-brand'],
            },
          ],
        },
        {
          title: 'CTA-brand Full Width',
          buttons: [
            {
              label: 'Full Width',
              disabled: false,
              fullWidth: true,
              styleModifiers: ['cta-brand'],
            },
            {
              label: 'Full Width Disabled',
              disabled: true,
              fullWidth: true,
              styleModifiers: ['cta-brand'],
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
