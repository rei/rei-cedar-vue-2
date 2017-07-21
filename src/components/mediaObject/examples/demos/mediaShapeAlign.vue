<template>

  <cdr-row cols="1" justify="center" align="stretch">
    <cdr-col span="4">
      <cdr-col span="6">
        <cdr-media-object
          media-figure="http://placehold.it/50x50"
          media-img-shape="circle"
          modifier="center"
          level="3"
          media-title="Circle image shape">
          <p>Class aptent taciti sociosqu ad per inceptos himenaeos.</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="6">
        <cdr-media-object
          media-figure="http://placehold.it/50x50"
          media-img-shape="circle"
          level="3"
          media-title="Circle image shape">
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
       </cdr-col>
    </cdr-col>
    <cdr-col span="2">
      <cdr-media-object
        media-figure="http://placehold.it/250x50"
        media-img-shape="circle responsive"
        modifier="top center"
        level="3"
        media-title="Rounded image shape">
        <p>Issaquah Alps, WA</p>
      </cdr-media-object>
      </cdr-col>
      <cdr-col span="2">
        <cdr-media-object
          media-figure="http://placehold.it/250x50"
          media-img-shape="rounded responsive"
          modifier="top right"
          media-align="right"
          level="3"
          media-title="Rounded image shape">
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="4">
        <cdr-media-object
          media-figure="http://placehold.it/50x50"
          media-img-shape="thumbnail"
          modifier="right"
          media-align="right"
          level="3"
          media-title="Thumbnail image shape">
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="4">
        <cdr-media-object
          media-figure="http://placehold.it/50x50"
          media-img-shape="circle"
          modifier="bottom"
          level="3"
          media-title="Thumbnail image shape">
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="2">
        <cdr-media-object
          media-figure="http://placehold.it/250x50"
          media-img-shape="circle responsive"
          modifier="bottom center"
          media-align="center"
          level="3"
          media-title="Thumbnail image shape">
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="2">
        <cdr-media-object
          media-figure="http://placehold.it/250x50"
          media-img-shape="rounded responsive"
          modifier="bottom right"
          media-align="right"
          level="3"
          media-title="Thumbnail image shape">
          <p>Issaquah Alps, WA</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="4">
        <cdr-media-object
          media-figure="http://placehold.it/50x50"
          media-img-shape="rounded"
          modifier="top center"
          media-align="center"
          level="3"
          media-title="Rounded image shape">
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

