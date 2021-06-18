<template>
  <div>
    <h2>container</h2>
    <h3>container static</h3>
    <cdr-container>
      <div style="width: 100%; border: 1px solid black;">
        container
      </div>
    </cdr-container>
    <br>
    <div class="tokens-container">
      <div style="width: 100%; border: 1px solid black;">
        container (mixin)
      </div>
    </div>

    <h3>container fluid</h3>
    <cdr-container modifier="fluid">
      <div style="width: 100%; border: 1px solid black;">
        container fluid
      </div>
    </cdr-container>

    <br>
    <div class="tokens-container-fluid">
      <div style="width: 100%; border: 1px solid black;">
        container fluid (mixin)
      </div>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Container',
  components: {
    ...Components,
  },
};
</script>

<style lang="scss">
@import "node_modules/@rei/cdr-tokens/dist/scss/cdr-tokens.scss";

.tokens-container {
  @include cdr-container;
}

.tokens-container-fluid {
  @include cdr-container-fluid;
}
</style>
