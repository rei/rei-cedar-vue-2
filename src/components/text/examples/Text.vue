<template>
  <div>
    <headings />
    <paragraphs data-backstop="paragraphs" />
  </div>
</template>

<script>
import headings from 'componentsdir/text/examples/demo/Headings';
import paragraphs from 'componentsdir/text/examples/demo/Paragraphs';

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
