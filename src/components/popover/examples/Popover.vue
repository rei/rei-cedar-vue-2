<template>
  <div class="popover-example">
    <h2>popover</h2>
    <cdr-form-group label="popover position">
      <cdr-radio
        name="position"
        custom-value="top"
        v-model="position"
      >top</cdr-radio>
      <cdr-radio
        name="position"
        custom-value="bottom"
        v-model="position"
      >bottom</cdr-radio>
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
        custom-value="Hi i am a popover. Hello. Hows it going. Doing well i hope."
        v-model="title"
      >long title</cdr-radio>
    </cdr-form-group>

    <div style="clear: both" />
    <cdr-popover
      :position="position"
      :auto-position="autoPos"
      :label="title"
      :class="containerClass"
      content-class="popover-override"
      id="popover-test"
      @opened="popupHandler"
      @closed="popupHandler"
    >
      <cdr-button
        :icon-only="true"
        aria-label="information"
        slot="trigger"
      >
        <icon-information-fill />
      </cdr-button>
      <cdr-text>
        Thanks for stopping by. What a lovely day it is today. Please come back again soon.
      </cdr-text>
    </cdr-popover>

    <hr>

    <div style="clear: both" />
    <div
      style="position: relative; width: max-content;"
      :class="containerClass"
    >
      <cdr-button
        :icon-only="true"
        aria-label="information"
        @click="open = !open"
        aria-controls="popover-custom-test"
        aria-haspopup="dialog"
      >
        <icon-brand-rei-ice-axes />
      </cdr-button>
      <cdr-popover
        :position="position"
        :auto-position="autoPos"
        :label="title"
        :open="open"
        content-class="popover-override"
        id="popover-custom-test"
        @opened="popupHandler"
        @closed="closedCustomHandler"
      >
        <cdr-text>
          This is an example of a popover where the trigger is not passed into the component
        </cdr-text>
      </cdr-popover>
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
      position: 'top',
      title: 'Hello my name is popover',
      autoPos: true,
      trigger: 'center',
      type: 'icon',
    };
  },
  computed: {
    containerClass() {
      return `popover-container--${this.trigger}`;
    },
  },
  methods: {
    popupHandler(e) {
      console.log(e);
    },
    closedCustomHandler(e) {
      this.open = false;
      console.log(e);
    },
  },
};
</script>

<style>
.popover-override {

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
