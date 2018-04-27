<template>

  <cdr-row
    cols="1"
    justify="center"
    align="stretch"
  >
    <cdr-col span="4">
      <cdr-col span="6">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="circle"
          modifier="center">
          <cdr-text tag="h3"><a href="https://rei.com">Circle image shape</a></cdr-text>
          <p>Class aptent taciti sociosqu ad per inceptos himenaeos.</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="6">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="circle">
          <cdr-text tag="h3"><a href="https://rei.com">Circle image shape</a></cdr-text>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
    </cdr-col>
    <cdr-col span="2">
      <cdr-media-object
        img-src="http://placehold.it/250x50"
        img-modifier="circle responsive"
        modifier="top center">
        <cdr-text tag="h3"><a href="https://rei.com">Rounded image shape</a></cdr-text>
        <p>Issaquah Alps, WA</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="2">
      <cdr-media-object
        img-src="http://placehold.it/250x50"
        img-modifier="rounded responsive"
        modifier="top right"
        media-align="right">
        <cdr-text tag="h3"><a href="https://rei.com">Rounded image shape</a></cdr-text>
        <p>Issaquah Alps, WA</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/50x50"
        img-modifier="rounded"
        modifier="top center"
        media-align="center">
        <cdr-text tag="h3"><a href="https://rei.com">Another Rounded image shape</a></cdr-text>
        <p>Issaquah Alps, WA</p>
      </cdr-media-object>
    </cdr-col>
  </cdr-row>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'MediaShapeAlign',
  components: Components,
};
</script>

