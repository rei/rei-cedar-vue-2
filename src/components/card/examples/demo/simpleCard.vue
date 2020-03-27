<template>
  <div>
    <cdr-card class="card-example">
      <cdr-text>A simple card</cdr-text>
    </cdr-card>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';


export default {
  name: 'SimpleCard',
  components: Components,
};
</script>

<style>
  .card-example {
    max-width: 250px;
    width: 250px;
  }
</style>
