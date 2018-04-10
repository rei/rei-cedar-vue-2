<template>
  <div>
    <div class="button-example">
      <h2>Default buttons with size modifiers</h2>
      <cdr-button
        type="submit"
        modifier="lg"
      >Large {lg}
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
      >Small {sm}
      </cdr-button>
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
      <h2>Icon buttons with size modifiers</h2>
      <cdr-button
        type="submit"
        modifier="lg">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Large {lg}
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
        Small {sm}
      </cdr-button>
      <cdr-button
        type="submit"
        modifier="lg"
        disabled>
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Large {lg}
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
        Small {sm}
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

  .button-icon-example > .cdr-icon {
    fill: inherit;
  }
</style>
