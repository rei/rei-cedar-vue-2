<template>
  <cdr-row
    cols="1"
    justify="center"
    align="stretch"
  >
    <cdr-col span="6">
      <cdr-media-object
      img-src="http://placehold.it/350x150">
        <cdr-heading level="2"><a href="https://rei.com">Media Figure on left</a></cdr-heading>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="6">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="right">
        <cdr-heading level="2"><a href="https://rei.com">Media Figure on Right</a></cdr-heading>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa.
        Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="6">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="top">
        <cdr-heading level="2"><a href="https://rei.com">Media Figure on top</a></cdr-heading>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa.
        Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="6">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="bottom">
        <cdr-heading level="2"><a href="https://rei.com">Media Figure on bottom</a></cdr-heading>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
  </cdr-row>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'FigurePlacement',
  components: Components,
};
</script>

<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
