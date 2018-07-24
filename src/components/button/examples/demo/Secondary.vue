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
        :modifier="button.modifier"
        :type="button.type"
        :disabled="button.disabled"
        :data-backstop="button.backstop ? button.backstop : null"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example">
      <h2>Secondary Anchor</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="small"
        modifier="secondary"
        data-backstop="cdr-button--small secondary anchor"
      >Link <span>text in span</span>
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
              modifier: 'secondary',
              backstop: 'cdr-button--secondary',
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              modifier: 'secondary',
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
              modifier: 'secondary',
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
              modifier: 'secondary',
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              modifier: 'secondary',
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
              modifier: 'secondary',
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
