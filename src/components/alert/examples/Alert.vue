<template>
  <div>
    <h2>alert</h2>
    <cdr-alert type="info">info alert</cdr-alert>
    <br/>
    <cdr-alert type="success">success alert</cdr-alert>
    <br/>
    <cdr-alert type="warning">warning alert</cdr-alert>
    <br/>
    <cdr-alert type="error">error alert</cdr-alert>
    <br/>
    <cdr-alert type="error">
      <cdr-text modifier="heading-serif-strong-1200">error alert</cdr-text>
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
