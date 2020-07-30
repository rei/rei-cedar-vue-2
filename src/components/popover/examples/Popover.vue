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
      <cdr-popover :open="open" :arrow-direction="direction" @closed="togglePopover" title="im a popover wow how cool is that what happens when this text wraps huh wow">
        <cdr-text>Thanks for stopping by.</cdr-text>
      </cdr-popover>

      <cdr-button @click="togglePopover" :icon-only="true"><icon-information-fill/></cdr-button>
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
    togglePopover() {
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
