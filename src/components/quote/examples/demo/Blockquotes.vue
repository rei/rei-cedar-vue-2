<template>
  <div>
    <h2>Blockquote</h2>
    <cdr-quote
      modifier="block"
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?"
      citation="Blockquote Citation: Lorem ipsum dolor sit"
    />

    <h3>Summary only</h3>
    <cdr-quote
      modifier="block"
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?"
    />

    <h3>citation only</h3>
    <cdr-quote
      modifier="block"
      citation="q Citation: Lorem ipsum dolor sit"
    />

  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'BlockquoteDemo',
  components: Components,
};
</script>

<style>
</style>
