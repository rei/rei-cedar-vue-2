<template>
  <div>
    <h2>text</h2>

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
