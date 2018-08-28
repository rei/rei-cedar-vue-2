<template>
  <div data-backstop="simple-card">
    <simple-card/>
    <card-title/>
  </div>
</template>

<script>
import simpleCard from './demo/simpleCard';
import cardTitle from './demo/cardTitle';

export default {
  name: 'Cards',
  components: {
    simpleCard,
    cardTitle,
  },
};
</script>

