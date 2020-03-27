<template>
  <div data-backstop="simple-card">
    <simple-card />
    <hr/>
    <complex-card />
  </div>
</template>

<script>
import simpleCard from 'componentsdir/card/examples/demo/simpleCard';
import complexCard from 'componentsdir/card/examples/demo/complexCard';

export default {
  name: 'Cards',
  components: {
    simpleCard,
    complexCard,
  },
};
</script>
