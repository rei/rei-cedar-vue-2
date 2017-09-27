<template>
  <div class="karma-test">
    <h1 class="test-head">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        msg: 'Testing 1 2 3',
      };
    },
  };
</script>
