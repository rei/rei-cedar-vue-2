<template>
  <div>
    <h1>Bluuurg</h1>
    <button-cta>Text</button-cta>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { ButtonCta } from 'componentsdir/button/dist/cdr-button';

export default {
  name: 'Cta',
  components: {
    Components,
    ButtonCta,
  },
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
