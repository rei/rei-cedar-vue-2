<template>
  <div>
    <div class="button-example">
      <cdr-button
        type="button"
        :style-options="{ defaultSize: 'size-large', responsive: ['large@small'] }"
      >Button using object
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="lg"
      >Large
      </cdr-button>
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log"
      >Medium
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="sm"
      >Small
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="lg"
        disabled
      >Large
      </cdr-button>
      <cdr-button
        type="submit"
        disabled
      >Medium
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="sm"
        disabled
      >Small
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="block"
      >Block
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="block"
        disabled
      >Block Disabled
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="lg">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Large
      </cdr-button>
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Medium
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="sm">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Small
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="lg"
        disabled>
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Large
      </cdr-button>
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log"
        disabled>
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Medium
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="sm"
        disabled>
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Small
      </cdr-button>
    </div>
    <div class="button-example">
      <h2>Color themes</h2>
      <cdr-button theme="red">red</cdr-button>
      <cdr-button
        theme="red"
        modifier="sm">red sm</cdr-button>
      <cdr-button theme="green">green</cdr-button>
      <cdr-button
        theme="green"
        modifier="xs">green xs</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        modifier="sm@lg lg@md md@sm"
      >
        Responsive
      </cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Default',
  components: Components,
  methods: {
    log() {
      console.log('clicked'); // eslint-disable-line
    },
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
