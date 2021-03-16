<template>
  <!-- eslint-disable max-len -->
  <div
    class="link-examples"
    data-backstop="all-links"
  >
    <h2>
      Links
    </h2>
    <standard-links class="mega-stack" />
    <resilience-test class="mega-stack" />

  </div>
</template>

<script>
import standardLinks from 'componentsdir/link/examples/demo/Standard';
import resilienceTest from 'componentsdir/link/examples/demo/Resilience';

export default {
  name: 'Lists',
  components: {
    standardLinks,
    resilienceTest,
  },
};
</script>

<style>
/** normalize line-height for consistent testing because links inherit it */

.link-examples {
  line-height: 1;
}

</style>
