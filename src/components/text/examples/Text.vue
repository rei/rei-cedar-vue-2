<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Text
    </cdr-text>

    <headings data-backstop="headings"/>

    <paragraphs data-backstop="paragraphs"/>
  </div>
</template>

<script>
import headings from './demo/Headings';
import paragraphs from './demo/Paragraphs';

export default {
  name: 'TextExamples',
  components: {
    headings,
    paragraphs,
  },
};
</script>

<style>
</style>
