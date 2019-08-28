<template>
  <div>
    <div
      class="button-example"
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
        :full-width="button.fullWidth"
        :type="button.type"
        :disabled="button.disabled"
        :data-backstop="button.backstop ? button.backstop : null"
        @click="log"
      >
        {{ button.label }}
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        Responsive
      </cdr-text>
      <cdr-button
        @click="log"
        full-width
        size="large@sm"
      >
        Responsive with default
      </cdr-button>
    </div>
    <div class="button-example">
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
              fullWidth: false,
              backstop: 'cdr-button--size',
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
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
              fullWidth: false,
              backstop: 'cdr-button--disabled',
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
              fullWidth: false,
            },
          ],
        },
        {
          title: 'Full Width',
          buttons: [
            {
              label: 'Small + full width',
              disabled: false,
              size: 'small',
              fullWidth: true,
            },
            {
              label: 'Medium + full width',
              disabled: false,
              size: 'medium',
              fullWidth: true,
            },
            {
              label: 'Large + full width',
              disabled: false,
              size: 'large',
              fullWidth: true,
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

<style>
/* This should be removed: */

/* having custom styles here provides false positives */

.button-example {
  padding: 10px;
}

.button-example button,
.button-example a {
  margin: 0 10px 5px 0;
}
</style>
