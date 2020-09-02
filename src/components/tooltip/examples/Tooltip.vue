<template>
  <div class="tooltip-example">
    <h2>tooltip</h2>
    <cdr-form-group label="tooltip position">
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

    <cdr-form-group label="trigger position">
      <cdr-radio
        name="trigger"
        custom-value="left"
        v-model="trigger"
      >left</cdr-radio>
      <cdr-radio
        name="trigger"
        custom-value="center"
        v-model="trigger"
      >center</cdr-radio>
      <cdr-radio
        name="trigger"
        custom-value="right"
        v-model="trigger"
      >right</cdr-radio>
    </cdr-form-group>

    <div style="clear: both" />

    <cdr-tooltip
      :position="position"
      :auto-position="autoPos"
      :class="containerClass"
    >
      <cdr-button slot="trigger">
        tooltip
      </cdr-button>
      <div>
        oh hey
      </div>
    </cdr-tooltip>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Tooltip',
  components: {
    ...Components,
  },
  data() {
    return {
      position: 'up',
      autoPos: true,
      trigger: 'center',
    };
  },
  computed: {
    containerClass() {
      return `tooltip-container--${this.trigger}`;
    },
  },
};
</script>

<style>

.tooltip-container--center {
  margin: 0 auto;
}
.tooltip-container--right {
  margin-left: 95%;
}

.tooltip-example {
  /* lots of bottom space to allow scrolling*/
  margin-bottom: 1000px;
}

fieldset {
  width: 20%;
  float: left;
}
</style>
