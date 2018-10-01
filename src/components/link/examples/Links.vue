<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>Links</h2>

    <!-- Full links on default (light) -->
    <all-links />

    <p>Links on Dark</p>
    <cdr-themer
      theme="dark"
      background="dark"
    >
      <!-- Full links example on dark -->
      <all-links backstop="dark" />

      <cdr-themer
        theme="light"
        background="light"
      >
        <!-- Smaller examples with nested theme (for override) -->
        <p>Works nested</p>
        <p>
          <cdr-link href="https://www.rei.com/">REI.com</cdr-link>
          <cdr-link
            href="https://www.rei.com/"
            modifier="standalone">REI.com</cdr-link>
        </p>
        <!-- Override individual theme -->
        <p>Individual override (dark on light)</p>
        <p>
          <cdr-link
            href="https://www.rei.com/"
            theme="dark">REI.com</cdr-link>
        </p>
      </cdr-themer>

      <cdr-link
        href="https://www.rei.com/">REI.com</cdr-link>
      <cdr-link
        href="https://www.rei.com/">REI.com</cdr-link>
      <p>Override (light on dark)</p>
      <cdr-link
        href="https://www.rei.com/"
        theme="light">REI.com</cdr-link>
    </cdr-themer>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import AllLinks from './demo/AllLinks';

export default {
  name: 'Links',
  components: {
    ...Components,
    AllLinks,
  },
};
</script>

<style>

</style>
