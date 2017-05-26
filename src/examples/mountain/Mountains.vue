<template>
  <div data-backstop="mountain-shapes">
    <h2>Mountain shape directive</h2>
    <div class="mountain-test" v-mountain-shape.top.left></div>
    <div class="mountain-test" v-mountain-shape.top.right></div>
    <div class="mountain-test" v-mountain-shape.top.center></div>
    <div class="mountain-test" v-mountain-shape.bottom.center></div>
    <div class="mountain-test" v-mountain-shape.bottom.left></div>
    <div class="mountain-test" v-mountain-shape.bottom.right></div>
  </div>
</template>

<script>
import Directives from '../../directives/_index';

export default {
  name: 'mountains',
  directives: Directives,
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
