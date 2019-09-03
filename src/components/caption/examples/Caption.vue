<template>
  <!-- eslint-disable max-len -->
  <div data-backstop="caption">
    <cdr-text
      tag="h2"
      modifier="heading-400 heading-500@md heading-500@lg"
    >
      Caption
    </cdr-text>

    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
      credit="Lorem ipsum dolor sit"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Summary only
    </cdr-text>
    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Caption only
    </cdr-text>
    <cdr-caption
      credit="Lorem ipsum dolor sit"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      In a figure
    </cdr-text>
    <figure class="caption-example__figure">
      <figcaption>
        <cdr-caption
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
          credit="Lorem ipsum dolor sit"
        />
      </figcaption>
    </figure>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'CaptionExample',
  components: {
    ...Components,
  },
};
</script>

<style>
.caption-example__figure {
  margin: 0;
}
</style>
