<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Pullquote
    </cdr-text>
    <cdr-text modifier="body">
      Body paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
      <cdr-quote
        tag="aside"
        modifier="pull"
        summary="Aside Pullquote Summary: Nested in body paragraph.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?"
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
      Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
    </cdr-text>

    <cdr-text>
      Default paragraph: Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
    </cdr-text>
    <cdr-quote
      tag="aside"
      modifier="pull"
      summary="Aside Pullquote Summary:
      Wrapped by to default paragraphs
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?"
    />
    <cdr-text>
      Default paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
      Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
      Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?
    </cdr-text>

  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'PullquoteDemo',
  components: Components,
};
</script>

<style>
</style>
