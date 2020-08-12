<template>
  <div>
    <a href="rei.com">
      <cdr-card
        class="card-example"
      >
        <cdr-link
          href="#"
          class="cdr-card__link"
        >A simple card</cdr-link>
      </cdr-card>
    </a>
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
