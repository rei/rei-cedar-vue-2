<template>
  <div data-backstop="a11y-utilities">
    <h2>A11y classes</h2>

    <p>Has some screen reader text after this.
      <span class="cdr-sr-only">Text for screen reader</span>
    </p>

    <p data-backstop="a11y-skip-link">skip link -->
      <a
        class="cdr-sr-only cdr-sr-only-focusable"
        href="#skip">Skip to main content</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'UtilitiesA11y',
};
</script>

<style>

</style>
