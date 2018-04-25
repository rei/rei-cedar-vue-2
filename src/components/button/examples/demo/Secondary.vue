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
              styleOptions: { defaultSize: 'large', style: 'secondary' },
            },
            {
              label: 'Medium',
              disabled: true,
              styleOptions: { defaultSize: 'medium', style: 'secondary' },
            },
            {
              label: 'Disabled',
              disabled: false,
              styleOptions: { defaultSize: 'small', style: 'secondary' },
            },
          ],
        },
        {
          title: 'Secondary Full Width',
          buttons: [
            {
              label: 'Full Width',
              disabled: false,
              styleOptions: { defaultSize: 'full-width', style: 'secondary' },
            },
            {
              label: 'Full Width Disabled',
              disabled: true,
              styleOptions: { defaultSize: 'full-width', style: 'secondary' },
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
