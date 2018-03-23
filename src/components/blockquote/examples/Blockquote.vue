<template>
  <div>
    <h2>blockquote</h2>
    <cdr-blockquote
      :summary="`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?`"
      citation="Lorem ipsum dolor sit"
    />

    <h3>Summary only</h3>
    <cdr-blockquote
      :summary="`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?`"
    />

    <h3>Caption only</h3>
    <cdr-blockquote
      citation="Lorem ipsum dolor sit"
    />
  </div>
</template>

<script>
import CdrBlockquote from '../CdrBlockquote';

export default {
  name: 'Blockquote',
  components: {
    CdrBlockquote,
  },
};
</script>

<style>
</style>
