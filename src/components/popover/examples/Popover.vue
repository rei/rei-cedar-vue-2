<template>
  <div class="popover-example">
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


    <cdr-form-group label="trigger type">
      <cdr-radio
        name="type"
        custom-value="button"
        v-model="type"
      >button</cdr-radio>
      <cdr-radio
        name="type"
        custom-value="icon"
        v-model="type"
      >icon</cdr-radio>
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

    <div style="clear: both"/>
    <div :class="containerClass">
      <cdr-popover
        @closed="togglePopover"
        :opened="open"
        :position="position"
        :auto-position="autoPos"
        :label="title"
        :trigger="this.type === 'button' ? 'tooltip' : 'popover'"
      >
        <cdr-text>Thanks for stopping by.</cdr-text>
      </cdr-popover>

      <cdr-button v-if="type === 'icon'" @click="togglePopover" :icon-only="true"><icon-information-fill/></cdr-button>
      <!-- TODO: export directive to handle this? -->
      <cdr-button v-else @mouseover="open = true" @mouseleave="open = false" @focus="open = true" @blur="open = false">lol wow huh</cdr-button>
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
      trigger: 'center',
      type: 'icon'
    }
  },
  methods: {
    togglePopover(e) {
      this.open = !this.open;
    }
  },
  computed: {
    containerClass() {
      return `popover-container popover-container--${this.trigger}`;
    }
  }
};
</script>

<style>
.popover-container {
  position: relative;
  width: max-content;
}

.popover-container--center {
  margin: 0 auto;
}
.popover-container--right {
  margin-left: 95%;
}

.popover-example {
  /* lots of bottom space to allow scrolling*/
  margin-bottom: 1000px;
}

fieldset {
  width: 20%;
  float: left;
}
</style>
