<template>
  <div>
    <h2>popover</h2>
    <cdr-form-group label="arrow direction">
      <cdr-radio
        name="direction"
        custom-value="up"
        v-model="direction"
      >up</cdr-radio>
      <cdr-radio
        name="direction"
        custom-value="down"
        v-model="direction"
      >down</cdr-radio>
      <cdr-radio
        name="direction"
        custom-value="left"
        v-model="direction"
      >left</cdr-radio>
      <cdr-radio
        name="direction"
        custom-value="right"
        v-model="direction"
      >right</cdr-radio>
    </cdr-form-group>


    <div class="popover-container">
      <cdr-popover :open="open" :arrow-direction="direction">
        <h4>Welcome to my amazing popover</h4>
        <p>Thanks for stopping by.</p>
      </cdr-popover>

      <cdr-button @click="openPopover">open popover</cdr-button>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Popover',
  components: {
    ...Components,
  },
  data() {
    return {
      open: false,
      direction: 'up'
    }
  },
  methods: {
    openPopover() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
.popover-container {
  position: relative;
  width: max-content;
  margin: 0 auto;
}
</style>
