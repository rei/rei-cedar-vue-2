<template>
  <!-- eslint-disable max-len -->
  <div>
    <cdr-text>
      The default cdr-text component is a <code>p</code> tag with the class of 'cdr-text'
    </cdr-text>
    <cdr-text>Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
      congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
      donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
      mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
      vestibulum.
    </cdr-text>
  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';

export default {
  name: 'ParagraphsDemo',
  components: {
    CdrText,
  },
};
</script>

<style>

</style>
