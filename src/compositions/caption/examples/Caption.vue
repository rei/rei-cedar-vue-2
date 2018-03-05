<template>
  <div>
    <cdr-caption
      :caption="`NO FIGURE
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente
      delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae
      accusamus asperiores odio fuga reiciendis blanditiis magni?`"
      credit="Lorem ipsum dolor sit"
    />

    <figure>
      <figcaption>
        <cdr-caption
          :caption="`IN A FIGURE
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis
          sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium
          molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?`"
          credit="Lorem ipsum dolor sit"
        />
      </figcaption>
    </figure>
  </div>
</template>

<script>
import CdrCaption from '../CdrCaption';

export default {
  name: 'CaptionExample',
  components: {
    CdrCaption,
  },
};
</script>

<style>
</style>
