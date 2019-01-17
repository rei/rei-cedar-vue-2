<template>
  <cdr-row
    cols="1"
    justify="center"
    align="stretch"
  >
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        img-modifier="responsive"
        modifier="top">
        <cdr-text
          tag="h4"
          modifier="heading-medium">
          Responsive
        </cdr-text>
        <cdr-text>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</cdr-text>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="top stretch">
        <cdr-text
          tag="h4"
          modifier="heading-medium">
          Stretch
        </cdr-text>
        <cdr-text>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</cdr-text>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="top block">
        <cdr-text
          tag="h4"
          modifier="heading-medium">
          block
        </cdr-text>
        <cdr-text>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</cdr-text>
      </cdr-media-object>
    </cdr-col>
  </cdr-row>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'MediaObjectFlux',
  components: Components,
};
</script>

<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
