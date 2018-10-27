<template>
  <div data-backstop="a11y-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      A11y classes
    </cdr-text>

    <cdr-text>Has some screen reader text after this.
      <span class="cdr-sr-only">Text for screen reader</span>
    </cdr-text>

    <cdr-text data-backstop="a11y-skip-link">skip link -->
      <cdr-link
        class="cdr-sr-only cdr-sr-only-focusable"
        href="#skip">Skip to main content</cdr-link>
    </cdr-text>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesA11y',
  components: { ...Components },
};
</script>

<style>

</style>
