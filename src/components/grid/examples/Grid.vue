<template>
  <div>
    <cdr-grid class="custom-grid">
      <div
        v-for="item in items"
        class="grid-item"
        :key="item"
      >
        {{ item }}
      </div>
    </cdr-grid>

    <h2>Gutter Example</h2>
    <cdr-grid
      class="custom-grid"
      gutter="none@xs small@sm medium@md large@lg"
    >
      <div
        v-for="item in items"
        class="grid-item"
        :key="item"
      >
        {{ item }}
      </div>
    </cdr-grid>

    <h2>List Based Example</h2>
    <cdr-grid
      class="custom-grid"
      tag="ul"
    >
      <li
        v-for="item in items"
        class="grid-item"
        :key="item"
      >
        {{ item }}
      </li>
    </cdr-grid>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Grid',
  components: {
    ...Components,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<style lang="scss">
.custom-grid {
  // 3 column at md or lg
  grid-template-columns: 1fr 1fr 1fr;

  @include cdr-sm-mq-down {
    // 1 column at xs or sm
    grid-template-columns: 1fr;
  }
}

.grid-item {
  border: 1px solid black;
  text-align: center;
  padding: $cdr-space-one-x;
}
</style>
