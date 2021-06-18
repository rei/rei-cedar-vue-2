<template>
  <div data-backstop="buttons">
    <div
      class="inset"
      v-for="(section, index) in data"
      :key="index"
      :data-backstop="section.backstop ? section.backstop : null"
    >
      <h3>
        {{ section.title }}
      </h3>
      <cdr-text v-if="index === 0">
        Clicks: {{ clickCount }}
      </cdr-text>
      <cdr-button
        v-for="(button, index2) in section.buttons"
        :key="index2"
        :size="button.size"

        :full-width="button.fullWidth"
        :type="button.type"
        :disabled="button.disabled"
        @click="clickCount++"
      >
        {{ button.label }}
      </cdr-button>
    </div>
    <div
      class="inset"
      data-backstop="cdr-button--anchor"
    >
      <h3>
        Primary Anchor
      </h3>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
      >
        Large Link
      </cdr-button>

      <cdr-button
        tag="a"
        href="https://rei.com"
        size="small"
      >
        Small Link
      </cdr-button>
    </div>
    <div
      class="inset"
    >
      <h3>
        Primary Responsive
      </h3>
      <cdr-button
        size="large large@xs medium@sm small@lg"
      >
        Responsive
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
      clickCount: 0,
      data: [
        {
          title: 'Default sizes',
          backstop: 'cdr-button--size',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              size: 'large',
              fullWidth: false,
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
          backstop: 'cdr-button--disabled',
          buttons: [
            {
              label: 'Large',
              disabled: true,
              size: 'large',
              fullWidth: false,
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
      ],
    };
  },
};
</script>
