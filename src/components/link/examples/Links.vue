<template>
  <!-- eslint-disable max-len -->
  <div
    class="link-examples"
    data-backstop="all-links"
  >
    <cdr-text
      tag="h2"
      modifier="heading--sans-400 heading--sans-500@md heading--sans-500@lg"
    >
      Links
    </cdr-text>
    <standard-links class="cdr-mb-space-four-x" />
    <resilience-test class="cdr-mb-space-four-x" />

  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';
import standardLinks from 'componentsdir/link/examples/demo/Standard';
import resilienceTest from 'componentsdir/link/examples/demo/Resilience';


export default {
  name: 'Lists',
  components: {
    standardLinks,
    resilienceTest,
    CdrText,
  },
};
</script>

<style>
/** normalize line-height for consistent testing because links inherit it */

.link-examples {
  line-height: 1;
}

</style>
