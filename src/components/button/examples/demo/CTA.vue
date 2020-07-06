<template>
  <div data-backstop="cta-buttons">
    <div
      class="cdr-space-inset-one-x"
      v-for="(section, index) in data"
      :key="index"
      :data-backstop="section.backstop ? section.backstop : null"
    >
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        {{ section.title }}
      </cdr-text>
      <cdr-button
        v-for="(button, index2) in section.buttons"
        :key="index2"
        :size="button.size"
        :space="button.space"
        :full-width="button.fullWidth"
        :disabled="button.disabled"
        :modifier="button.modifier"
        tag="a"
      >
        {{ button.label }} <icon-caret-right class="cdr-button__icon"/>
      </cdr-button>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Default',
  components: {
    ...Components,
  },
  data: function data() {
    return {
      data: [
        {
          title: 'Dark CTA',
          backstop: 'cdr-button--cta-dark',
          buttons: [
            {
              label: 'Large Dark',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'dark',
            },
            {
              label: 'Medium Dark',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'dark',
            },
            {
              label: 'Small Dark',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'dark',
            },
            {
              label: 'Disabled Dark',
              disabled: true,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'dark',
            },
            {
              label: 'Full-Width Dark',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'dark',
            },
          ],
        },

        {
          title: 'Sale CTA',
          backstop: 'cdr-button--cta-sale',
          buttons: [
            {
              label: 'Large Sale',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'sale',
            },
            {
              label: 'Medium Sale',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'sale',
            },
            {
              label: 'Small Sale',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'sale',
            },
            {
              label: 'Disabled Sale',
              disabled: true,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'sale',
            },
            {
              label: 'Full-Width Sale',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'sale',
            },
          ],
        },

        {
          title: 'Brand CTA',
          backstop: 'cdr-button--cta-brand',
          buttons: [
            {
              label: 'Large Brand',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'brand',
            },
            {
              label: 'Medium Brand',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'brand',
            },
            {
              label: 'Small Brand',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'brand',
            },
            {
              label: 'Disabled Brand',
              disabled: true,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'brand',
            },
            {
              label: 'Full-Width Brand',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'brand',
            },
          ],
        },


        {
          title: 'Light CTA',
          backstop: 'cdr-button--cta-light',
          buttons: [
            {
              label: 'Large Light',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'light',
            },
            {
              label: 'Medium Light',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'light',
            },
            {
              label: 'Small Light',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'light',
            },
            {
              label: 'Disabled Light',
              disabled: true,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'light',
            },
            {
              label: 'Full-Width Light',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'light',
            },
          ],
        },
      ],
    };
  },
};
</script>
