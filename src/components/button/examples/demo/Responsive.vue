<template>
  <div>
    <div class="button-example">
      <h1>Hello there</h1>
      <cdr-button
        size="medium large@xs"
        full-width="xs"
      >
        full-width @xs
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Responsive
      </cdr-text>
      <cdr-button
        :on-click="log"
        full-width
        size="large@sm"
      >
        Responsive with default
      </cdr-button>
    </div>
    <div>
      <cdr-button
        :full-width="true"
        size="large@lg"
        space="cdr-mb-space-one-x cdr-mr-space-one-x@md"
      >
        button 1
      </cdr-button>

      <cdr-button
        :full-width="true"
        modifier="secondary"
        size="large@lg"
      >
        button 2
      </cdr-button>
    </div>
  </div>
</template>

<script>
// import Components from 'componentsdir/_index';
import { CdrText, CdrButton } from 'componentsdir/_index';

export default {
  name: 'Responsive',
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
