<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>Links</h2>

    <hr>
    <p>Using the cascade</p>
    <all-links />

    <p>Links on Dark</p>
    <cdr-themer
      theme="dark"
      background="dark"
    >
      <all-links backstop="dark" />

      <cdr-themer
        theme="light"
        background="light"
      >
        <p>Works nested</p>
        <p>
          <cdr-link
            href="https://www.rei.com/"
            theme="light">REI.com</cdr-link>
          <cdr-link
            href="https://www.rei.com/"
            theme="light"
            modifier="standalone">REI.com</cdr-link>
        </p>
      </cdr-themer>

      <p>
        <cdr-link
          href="https://www.rei.com/">REI.com</cdr-link>
      </p>
      <cdr-link
        href="https://www.rei.com/">REI.com</cdr-link>
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
