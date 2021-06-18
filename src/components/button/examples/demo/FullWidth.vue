<template>
  <div data-backstop="buttons">
    <div class="button-example inset">
      <h3>
        Full Width
      </h3>
      <cdr-button
        size="small large@xs large@sm"

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
import { CdrButton } from 'srcdir/index';

export default {
  name: 'FullWidth',
  components: {
    CdrButton,
  },
  methods: {
    log() {
      console.log('clicked'); // eslint-disable-line
    },
  },
};
</script>
