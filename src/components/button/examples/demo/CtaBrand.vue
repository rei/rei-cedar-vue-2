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
      >{{ button.label }}
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        data-backstop="cdr-button--cta-brand"
        :style-options="{ styles: ['cta', 'brand'] }"
      >Backstop button
      </cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'CtaBrand',
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
              styleOptions: { defaultSize: 'large', style: ['cta', 'brand'] },
            },
            {
              label: 'Medium',
              disabled: false,
              styleOptions: { defaultSize: 'medium', style: ['cta', 'brand'] },
            },
            {
              label: 'Disabled',
              disabled: false,
              styleOptions: { defaultSize: 'small', style: ['cta', 'brand'] },
            },
          ],
        },
        {
          title: 'CTA-brand Full Width',
          buttons: [
            {
              label: 'Full Width',
              disabled: false,
              styleOptions: { defaultSize: 'full-width', style: ['cta', 'brand'] },
            },
            {
              label: 'Full Width Disabled',
              disabled: true,
              styleOptions: { defaultSize: 'full-width', style: ['cta', 'brand'] },
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
