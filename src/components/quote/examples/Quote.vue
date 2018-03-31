<template>
  <div>
    <blockquotes data-backstop="blockquote"/>

    <pullquotes data-backstop="pullquote"/>
  </div>
</template>

<script>
import Blockquotes from './demo/Blockquotes';
import Pullquotes from './demo/Pullquotes';

export default {
  name: 'QuoteExample',
  components: {
    Blockquotes,
    Pullquotes,
  },
};
</script>

<style>
</style>
