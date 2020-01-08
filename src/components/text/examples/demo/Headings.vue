<template>
  <div>
    <div data-backstop="heading-serif">
      <h3>Heading Serif</h3>
      <cdr-text
        v-for="level in heading.serif"
        :modifier="`heading--serif-${level}`"
        :key="`heading--serif-${level}`"
      >
        Heading Serif {{ level }}
      </cdr-text>
    </div>
    <div data-backstop="heading-sans">
      <h3>Heading Sans</h3>
      <cdr-text
        v-for="level in heading.sans"
        :modifier="`heading--sans-${level}`"
        :key="`heading--sans-${level}`"
      >
        Heading Sans {{ level }}
      </cdr-text>
    </div>

    <div data-backstop="heading-serif-strong">
      <h3>Heading Serif Strong</h3>
      <cdr-text
        v-for="level in heading.serifStrong"
        :modifier="`heading--serif--strong-${level}`"
        :key="`heading--serif--strong-${level}`"
      >
        Heading Serif Strong {{ level }}
      </cdr-text>
    </div>
    <div data-backstop="subheading-sans">
      <h3>Subheading Sans</h3>
      <cdr-text
        v-for="level in subheading.sans"
        :modifier="`subheading--sans-${level}`"
        :key="`subheading--sans-${level}`"
      >
        Subheading Sans {{ level }}
      </cdr-text>
    </div>
  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';

export default {
  name: 'HeadingsDemo',
  components: {
    CdrText,
  },

  data() {
    return {
      heading: {
        serif: [200, 300, 400, 500, 600, 700, 800, 900, 1100, 1200],
        serifStrong: [600, 700, 800, 900, 1100, 1200],
        sans: [200, 300, 400, 500, 600],
      },
      subheading: {
        sans: [300, 400, 500, 600],
      },
    };
  },
};
</script>

<style>

</style>
