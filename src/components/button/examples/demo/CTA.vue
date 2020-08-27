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
        :elevated="button.elevated"
        href="rei.com"
        tag="a"
      >
        {{ button.label }}
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
          title: 'Link modifier',
          backstop: 'cdr-button--link',
          buttons: [
            {
              label: 'Large Link',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'link',
            },
            {
              label: 'Medium Link',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'link',
            },
            {
              label: 'Small Link',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'link',
            },
            {
              label: 'Full-Width Link',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'link',
            },
          ],
        },
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
              label: 'Full-Width Dark',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'dark',
            },
            {
              label: 'Elevated Dark',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              elevated: true,
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
              label: 'Full-Width Sale',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'sale',
            },
            {
              label: 'Elevated Sale',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              elevated: true,
              modifier: 'sale',
            },
          ],
        },

        {
          title: 'Primary CTA',
          backstop: 'cdr-button--cta-primary',
          buttons: [
            {
              label: 'Large Primary',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'primary',
            },
            {
              label: 'Medium Primary',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'primary',
            },
            {
              label: 'Small Primary',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'primary',
            },
            {
              label: 'Full-Width Primary',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'primary',
            },
            {
              label: 'Elevated Primary',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              elevated: true,
              modifier: 'primary',
            },
          ],
        },

        {
          title: 'Secondary CTA',
          backstop: 'cdr-button--cta-secondary',
          buttons: [
            {
              label: 'Large Secondary',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'secondary',
            },
            {
              label: 'Medium Secondary',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'secondary',
            },
            {
              label: 'Small Secondary',
              disabled: false,
              size: 'small',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              modifier: 'secondary',
            },
            {
              label: 'Full-Width Secondary',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              fullWidth: true,
              modifier: 'secondary',
            },
            {
              label: 'Elevated Secondary',
              disabled: false,
              size: 'medium',
              space: 'cdr-mt-space-one-x',
              elevated: true,
              modifier: 'secondary',
            },
          ],
        },
      ],
    };
  },
};
</script>
