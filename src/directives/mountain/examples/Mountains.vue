<template>
  <div data-backstop="mountain-shapes">
    <h2>Mountain shape directive</h2>
    <div
      class="mountain-test"
      v-mountain-shape.top.left/>
    <div
      class="mountain-test"
      v-mountain-shape.top.right/>
    <div
      class="mountain-test"
      v-mountain-shape.top.center/>
    <div
      class="mountain-test"
      v-mountain-shape.bottom.center/>
    <div
      class="mountain-test"
      v-mountain-shape.bottom.left/>
    <div
      class="mountain-test"
      v-mountain-shape.bottom.right/>
  </div>
</template>

<script>
import * as directives from '../../_index';

export default {
  name: 'Mountains',
  directives,
};
</script>

<style scoped>
  .mountain-test {
    background-color: lightgray;
    margin-top: 4rem;
    height: 50px;
    padding: 10px;
  }
</style>
