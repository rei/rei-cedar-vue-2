<template>
  <div data-backstop="buttons">
    <div class="button-example cdr-space-inset-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Full Width
      </cdr-text>
      <cdr-button
        size="small large@xs large@sm"
        space="cdr-mb-space-one-x cdr-mr-space-one-x@sm"
        :full-width="true"
      >
        Full width + responsive sizes
      </cdr-button>
      <cdr-button
        :on-click="log"
        full-width="@xs"
        size="large"
      >
        Large + fullWidth@xs
      </cdr-button>
    </div>
  </div>
</template>

<script>
import { CdrText, CdrButton } from 'srcdir/index';

export default {
  name: 'FullWidth',
  components: {
    CdrText,
    CdrButton,
  },
  methods: {
    log() {
      console.log('clicked'); // eslint-disable-line
    },
  },
};
</script>
