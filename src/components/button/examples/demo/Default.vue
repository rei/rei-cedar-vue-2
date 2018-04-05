<template>
  <div>
    <div class="button-example">
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log"
      >
        Default with click
      </cdr-button>
      <cdr-button>
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"
        />
        Button with icon
      </cdr-button>
      <cdr-button disabled>Default Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm"
      >Small button</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs"
      >Extra Small button</cdr-button>
    </div>

    <div class="button-example">
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
