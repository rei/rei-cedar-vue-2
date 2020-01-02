<template>
  <div>
    <headings />
    <paragraphs data-backstop="paragraphs" />
    <deprecated />
  </div>
</template>

<script>
import headings from 'componentsdir/text/examples/demo/Headings';
import paragraphs from 'componentsdir/text/examples/demo/Paragraphs';
import deprecated from 'componentsdir/text/examples/demo/Deprecated';

export default {
  name: 'TextExamples',
  components: {
    headings,
    paragraphs,
    deprecated,
  },
};
</script>

<style>
</style>
