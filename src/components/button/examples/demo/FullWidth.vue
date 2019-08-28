<template>
  <div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Full Width
      </cdr-text>
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

<style>
/* This should be removed: */
/* having custom styles here provides false positives */
.button-example {
  padding: 10px;
}
.button-example button,
.button-example a {
  margin: 0 10px 5px 0;
}
</style>
