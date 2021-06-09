<template>
  <div>
    <h2>banner</h2>
    <cdr-banner type="info">
      <icon-information-fill /> info banner
    </cdr-banner>
    <br>
    <cdr-banner type="success">
      <icon-check-fill /> success banner
    </cdr-banner>
    <br>
    <cdr-banner type="warning">
      <icon-warning-fill /> warning banner
    </cdr-banner>
    <br>
    <cdr-banner type="error">
      <icon-x-fill /> error banner
    </cdr-banner>
    <br>
    <cdr-banner type="error">
      <cdr-text class="cdr-text-dev--heading-serif-strong-1200">
        <icon-x-fill /> error banner
      </cdr-text>
    </cdr-banner>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Banner',
  components: {
    ...Components,
  },
};
</script>

<style>
</style>
