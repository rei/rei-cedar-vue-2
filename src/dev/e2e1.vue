<template>
  <section
    data-backstop="kitchen-sink"
    id="kitchen-sink-1"
  >
    <div
      v-for="e in examples"
      :key="e.name"
      class="kitchen-sink-section"
    >
      <component
        :is="e"
      />
    </div>
  </section>
</template>

<script>
import examples from 'componentsdir/examples';

export default {
  name: 'KitchenSink',
  components: {
    ...examples,
  },
  data() {
    return {
      examples: Object.keys(examples).filter((x, i, a) => i <= a.length / 2),
    };
  },
};
</script>

<style lang="scss">
  .kitchen-sink-section {
    margin: 16px 0;
  }
</style>
