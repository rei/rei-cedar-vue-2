<template>
  <div data-backstop="buttons">
    <div
      class="button-example cdr-space-inset-one-x"
      v-for="(section, index) in data"
      :key="index"
    >
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        {{ section.title }}
      </cdr-text>
      <cdr-button
        v-for="(button, index2) in section.buttons"
        :key="index2"
        :size="button.size"
        :space="button.space"
        :full-width="button.fullWidth"
        :type="button.type"
        :disabled="button.disabled"
        :data-backstop="button.backstop ? button.backstop : null"
        @click="log"
      >
        {{ button.label }}
      </cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        Primary Anchor
      </cdr-text>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--anchor"
      >
        Link
      </cdr-button>
    </div>
    <div>
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        Primary Responsive
      </cdr-text>
      <cdr-button
        size="large large@xs medium@sm small@lg"
        data-backstop="cdr-button--responsive"
      >
        Responsive
      </cdr-button>
    </div>
    <div>
      <cdr-button
        :full-width="true"
        size="large@lg"
        space="cdr-mb-space-one-x cdr-mr-space-one-x@md"
      >
        button 1
      </cdr-button>

      <cdr-button
        :full-width="true"
        modifier="secondary"
        size="large@lg"
      >
        button 2
      </cdr-button>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Default',
  components: {
    ...Components,
  },
  data: function data() {
    return {
      data: [
        {
          title: 'Default sizes',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              backstop: 'cdr-button--size',
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
              space: '',
              fullWidth: false,
            },
          ],
        },
        {
          title: 'Disabled',
          buttons: [
            {
              label: 'Large',
              disabled: true,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
              backstop: 'cdr-button--disabled',
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
              space: '',
              fullWidth: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    log() {
      console.log('clicked'); // eslint-disable-line
    },
  },
};
</script>
