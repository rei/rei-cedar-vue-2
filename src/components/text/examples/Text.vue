<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Text
    </cdr-text>

    <headings data-backstop="headings" />

    <paragraphs data-backstop="paragraphs" />
  </div>
</template>

<script>
import { CdrText } from 'componentsdir/_index';
import headings from 'componentsdir/text/examples/demo/Headings';
import paragraphs from 'componentsdir/text/examples/demo/Paragraphs';

export default {
  name: 'TextExamples',
  components: {
    CdrText,
    headings,
    paragraphs,
  },
};
</script>

<style>
</style>
