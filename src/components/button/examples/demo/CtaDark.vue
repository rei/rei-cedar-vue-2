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
      >{{ button.label }}
        <cdr-icon
          use="#caret-right"
          modifier="inherit-color"
          class="cdr-inline-right--sm" />
      </cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

/*
  backstop variant
  cta dark
  disabled
  sizes
*/

export default {
  name: 'CtaDark',
  components: Components,
  data: function data() {
    return {
      data: [
        {
          title: 'CTA + Dark',
          buttons: [
            {
              label: 'CTA-dark Large',
              disabled: false,
              staticSize: 'large',
              styleModifiers: ['cta-dark'],
            },
            {
              label: 'Disabled',
              disabled: true,
              staticSize: 'medium',
              styleModifiers: ['cta-dark'],
            },
            {
              label: 'Small',
              disabled: false,
              staticSize: 'small',
              responsiveSize: ['small@large'],
              styleModifiers: ['cta-dark'],
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
