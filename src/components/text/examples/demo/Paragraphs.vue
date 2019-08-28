<template>
  <!-- eslint-disable max-len -->
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-medium"
    >
      Paragraphs
    </cdr-text>
    <cdr-text>
      The default cdr-text component is a <code>p</code> tag with the class of 'cdr-text'
    </cdr-text>
    <cdr-text>Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
      congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
      donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
      mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
      vestibulum.
    </cdr-text>
    <cdr-text modifier="body">
      Some people consider articles longer than 700 words to be long-form, whereas others think
      that articles have to be in excess of 1,800 words to be considered long-form. For the sake of argument,
      let's assume that long-form content refers to articles of around 1,200 words or longer.
    </cdr-text>
    <cdr-text modifier="body">
      Here’s a fun fact: Over the last 10 years,
      our attention spans have decreased from 12 minutes to 5 minutes.
      Our ability (and our desire) to read lots of content is clearly
      impacted. So how do we rock some long form content and make it successful?
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
