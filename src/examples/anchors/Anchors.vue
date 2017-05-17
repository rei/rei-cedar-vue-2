<template>
  <div>
    <h2>Anchors</h2>
    <p>
      <cdr-a data-backstop="cdr-link" href="https://www.rei.com/">An example link</cdr-a>
    </p>
    <p class="link-example cdr-bg--dark-20">
      <cdr-a href="https://www.rei.com/" :modifier="['contrast']">An example contrast link</cdr-a>
    </p>
    <p class="link-example cdr-bg--dark-20">
      <cdr-a href="https://www.rei.com/" :modifier="['overlay']">An example overlay link</cdr-a>
    </p>
    <p>
      <cdr-a data-backstop="cdr-link--standalone" href="https://www.rei.com/" :modifier="['standalone']">An example standalone link</cdr-a>
    </p>
    <p>
      <cdr-a data-backstop="cdr-link--button" href="https://www.rei.com/" :modifier="['button']">Link as button</cdr-a>
    </p>
  </div>
</template>

<script>
import cdrA from '../../components/anchors/Anchor';

export default {
  name: 'anchors',
  components: { cdrA },
};
</script>

<style>
  .link-example {
    padding: 10px;
  }
</style>

