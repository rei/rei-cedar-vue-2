<template>
  <div>
    <h2>Blockquote</h2>
    <cdr-quote
      modifier="block"
      cite="http://github.com/rei/rei-cedar"
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
      citation="Citation: Lorem ipsum dolor sit"
    />

    <h3>Nested blockquote</h3>
    <cdr-quote
      modifier="block"
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?">
      <cdr-quote
        modifier="block"
        citation="bob">
        <cdr-text>
          consectetur adipisicing elit. At perferendis reiciendis
          sapiente delectus commodi eaque sunt aperiam ex aliquam.
          Temporibus, veritatis laudantium molestiae accusamus asperiores
          odio fuga reiciendis blanditiis magni?
        </cdr-text>
      </cdr-quote>
    </cdr-quote>

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
