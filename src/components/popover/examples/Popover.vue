<template>
  <div>
    <h2>popover</h2>
    <cdr-form-group label="popover position">
      <cdr-radio
        name="position"
        custom-value="up"
        v-model="position"
      >up</cdr-radio>
      <cdr-radio
        name="position"
        custom-value="down"
        v-model="position"
      >down</cdr-radio>
      <cdr-radio
        name="position"
        custom-value="left"
        v-model="position"
      >left</cdr-radio>
      <cdr-radio
        name="position"
        custom-value="right"
        v-model="position"
      >right</cdr-radio>
    </cdr-form-group>

    <cdr-form-group label="auto position">
      <cdr-radio
        name="autoPos"
        :custom-value="true"
        v-model="autoPos"
      >true</cdr-radio>
      <cdr-radio
        name="autoPos"
        :custom-value="false"
        v-model="autoPos"
      >false</cdr-radio>
    </cdr-form-group>

    <cdr-form-group label="title">
      <cdr-radio
        name="title"
        custom-value="Hello my name is popover"
        v-model="title"
      >short title</cdr-radio>
      <cdr-radio
        name="title"
        custom-value=""
        v-model="title"
      >no title</cdr-radio>
      <cdr-radio
        name="title"
        custom-value="Hello my name is Popover, Look on my Works, ye Mighty, and despair!"
        v-model="title"
      >long title</cdr-radio>
    </cdr-form-group>


    <div class="popover-container">
      <cdr-popover :opened="open" :position="position" :auto-position="autoPos" @closed="togglePopover" :label="title">
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
      position: 'up',
      title: 'Hello my name is popover',
      autoPos: true,
    }
  },
  methods: {
    togglePopover(e) {
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
