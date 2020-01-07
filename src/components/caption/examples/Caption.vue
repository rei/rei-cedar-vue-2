<template>
  <!-- eslint-disable max-len -->
  <div data-backstop="caption">
    <cdr-text
      tag="h2"
      modifier="heading--sans-400 heading--sans-500@md heading--sans-500@lg"
    >
      Caption
    </cdr-text>

    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
      credit="Lorem ipsum dolor sit"
    />

    <cdr-text
      tag="h3"
      modifier="subheading--sans-300"
    >
      Summary only
    </cdr-text>
    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
    />

    <cdr-text
      tag="h3"
      modifier="subheading--sans-300"
    >
      Caption only
    </cdr-text>
    <cdr-caption
      credit="Lorem ipsum dolor sit"
    />

    <cdr-text
      tag="h3"
      modifier="subheading--sans-300"
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
