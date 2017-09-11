<template>

  <cdr-row cols="1" justify="center" align="stretch">
    <cdr-col span="4">
      <cdr-col span="6">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="circle"
          modifier="center">
          <cdr-heading level="3"><a href="https://rei.com">Circle image shape</a></cdr-heading>
          <p>Class aptent taciti sociosqu ad per inceptos himenaeos.</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="6">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="circle">
          <cdr-heading level="3"><a href="https://rei.com">Circle image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
       </cdr-col>
    </cdr-col>
    <cdr-col span="2">
      <cdr-media-object
        img-src="http://placehold.it/250x50"
        img-modifier="circle responsive"
        modifier="top center">
          <cdr-heading level="3"><a href="https://rei.com">Rounded image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
      </cdr-media-object>
      </cdr-col>
      <cdr-col span="2">
        <cdr-media-object
          img-src="http://placehold.it/250x50"
          img-modifier="rounded responsive"
          modifier="top right"
          media-align="right">
          <cdr-heading level="3"><a href="https://rei.com">Rounded image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="4">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="thumbnail"
          modifier="right"
          media-align="right">
          <cdr-heading level="3"><a href="https://rei.com">Thumbnail image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="4">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="circle"
          modifier="bottom">
          <cdr-heading level="3"><a href="https://rei.com">Thumbnail image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="2">
        <cdr-media-object
          img-src="http://placehold.it/250x50"
          img-modifier="circle responsive"
          modifier="bottom center"
          media-align="center">
          <cdr-heading level="3"><a href="https://rei.com">Thumbnail image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="2">
        <cdr-media-object
          img-src="http://placehold.it/250x50"
          img-modifier="rounded responsive"
          modifier="bottom right"
          media-align="right">
          <cdr-heading level="3"><a href="https://rei.com">Thumbnail image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="4">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="rounded"
          modifier="top center"
          media-align="center">
          <cdr-heading level="3"><a href="https://rei.com">Rounded image shape</a></cdr-heading>
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
  </cdr-row>
</template>

<script>
import * as Components from '../../../_index';

export default {
  name: 'mediaShapeAlign',
  components: Components,
};
</script>

