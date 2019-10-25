<template>
  <div data-backstop="buttons">
    <div
      class="button-example cdr-space-inset-one-x"
      v-for="(section, index) in data"
      :key="index"
      :data-backstop="section.backstop ? section.backstop : null"
    >
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        {{ section.title }}
      </cdr-text>
      <cdr-button
        v-for="(button, index2) in section.buttons"
        :key="index2"
        :size="button.size"
        space="cdr-mr-space-one-x"
        :full-width="button.fullWidth"
        :modifier="button.modifier"
        :type="button.type"
        :disabled="button.disabled"
        :data-backstop="button.backstop ? button.backstop : null"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        Secondary Anchor
      </cdr-text>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="small"
        modifier="secondary"
        data-backstop="cdr-button--size"
      >Link <span>text in span</span>
      </cdr-button>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Secondary',
  components: {
    ...Components,
  },
  data: function data() {
    return {
      data: [
        {
          title: 'Secondary',
          backstop: 'cdr-button--secondary',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              size: 'large',
              modifier: 'secondary',
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
