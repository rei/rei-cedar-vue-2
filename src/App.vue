<template>
  <div id="app">
    <test></test>
  </div>
</template>

<script>
import test from './components/test'

export default {
  name: 'app',
  components: {
    test
  }
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
