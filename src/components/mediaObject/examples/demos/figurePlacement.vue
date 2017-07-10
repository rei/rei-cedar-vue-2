<template>
  <cdr-row cols="1" justify="center" align="stretch">
    <cdr-col span="6">
      <cdr-media-object
        media-figure="http://placehold.it/350x150"
        media-url="http://rei.com"
        media-title="Media Figure on left"
        level="2"
        media-img-shape=""
        media-body="Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus finibus.">
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="6">
      <cdr-media-object
        media-figure="http://placehold.it/350x150"
        media-url="http://rei.com"
        media-title="Media Figure on right"
        level="2"
        modifier="right"
        media-body="Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus finibus. Proin egestas volutpat tortor, non tincidunt quam accumsan et.">
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="6">
      <cdr-media-object
        media-figure="http://placehold.it/350x150"
        media-url="http://rei.com"
        media-title="Media Figure on top"
        level="2"
        modifier="top"
        media-body="Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus finibus. Proin egestas volutpat tortor, non tincidunt quam accumsan et. Donec eleifend condimentum consectetur. Ut a lorem cursus, fermentum eros in, commodo ex. Nulla fringilla mi ex, eu tempus turpis molestie vitae. Duis eget tellus malesuada, iaculis ipsum non, vehicula sapien. Mauris tincidunt sem at turpis dapibus, nec viverra arcu condimentum. Donec felis nulla, blandit mollis tristique ut, commodo in sapien.">
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="6">
      <cdr-media-object
        media-figure="http://placehold.it/350x150"
        media-url="http://rei.com"
        media-title="Media Figure on bottom"
        level="2"
        modifier="bottom"
        media-body="Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra.">
      </cdr-media-object>
    </cdr-col>
  </cdr-row>
</template>

<script>
import Components from '../../../_index';

export default {
  name: 'figurePlacement',
  components: Components,
};
</script>

<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
