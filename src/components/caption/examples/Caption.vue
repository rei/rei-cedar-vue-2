<template>
  <!-- eslint-disable max-len -->
  <div data-backstop="caption">
    <h2>
      Caption
    </h2>

    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
      credit="Lorem ipsum dolor sit"
    />

    <h3>
      Summary only
    </h3>
    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
    />

    <h3>
      Caption only
    </h3>
    <cdr-caption
      credit="Lorem ipsum dolor sit"
    />

    <h3>
      In a figure
    </h3>
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
