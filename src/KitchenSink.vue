<template>
  <section data-backstop="kitchen-sink">
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
      examples,
    };
  },
};
</script>

<style lang="scss">
  .kitchen-sink-section {
    margin: 16px 0;
  }
</style>
