<template>
  <div>
    <h2>alert</h2>
    <cdr-alert type="info">
      <icon-information-fill /> info alert
    </cdr-alert>
    <br>
    <cdr-alert type="success">
      <icon-check-fill /> success alert
    </cdr-alert>
    <br>
    <cdr-alert type="warning">
      <icon-warning-fill /> warning alert
    </cdr-alert>
    <br>
    <cdr-alert type="error">
      <icon-x-fill /> error alert
    </cdr-alert>
    <br>
    <cdr-alert type="error">
      <cdr-text modifier="heading-serif-strong-1200">
        <icon-x-fill /> error alert
      </cdr-text>
    </cdr-alert>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Alert',
  components: {
    ...Components,
  },
};
</script>

<style>
</style>
