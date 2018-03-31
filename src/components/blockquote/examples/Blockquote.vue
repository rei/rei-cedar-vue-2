<template>
  <div>
    <h2>blockquote</h2>
    <cdr-blockquote
      :summary="`Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?`"
      attribution="attribution: Lorem ipsum dolor sit"
    />

    <h3>Summary only</h3>
    <cdr-blockquote
      :summary="`Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?`"
    />

    <h3>attribution only</h3>
    <cdr-blockquote
      attribution="attribution: Lorem ipsum dolor sit"
    />
  </div>
</template>

<script>
import CdrBlockquote from '../CdrBlockquote';

export default {
  name: 'BlockquoteExample',
  components: { CdrBlockquote },
};
</script>

<style>
</style>
