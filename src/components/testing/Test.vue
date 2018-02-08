<template>
  <div class="karma-test">
    <h1 class="test-head">{{ msg }}</h1>
  </div>
</template>

<script>
/**
 * Cedar 2 component for test
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'Test',
  data() {
    return {
      msg: 'Testing 1 2 3',
    };
  },
};
</script>
