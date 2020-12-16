<template>
  <cdr-grid class="custom-grid">
    <div
      v-for="item in items"
      class="grid-item"
      :key="item"
    >
      {{ item }}
    </div>
  </cdr-grid>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'GridTwo',
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

<style>
.custom-grid {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-item {

}
</style>
