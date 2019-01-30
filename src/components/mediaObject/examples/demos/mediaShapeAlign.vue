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
          modifier="center"
        >
          <cdr-text
            tag="h4"
            modifier="subheading"
          >
            Circle image shape
          </cdr-text>
          <cdr-text>Class aptent taciti sociosqu ad per inceptos himenaeos.</cdr-text>
        </cdr-media-object>
      </cdr-col>
      <cdr-col span="6">
        <cdr-media-object
          img-src="http://placehold.it/50x50"
          img-modifier="circle"
        >
          <cdr-text
            tag="h4"
            modifier="subheading"
          >
            Circle image shape
          </cdr-text>
          <cdr-text>Issaquah Alps, WA</cdr-text>
        </cdr-media-object>
      </cdr-col>
    </cdr-col>
    <cdr-col span="2">
      <cdr-media-object
        img-src="http://placehold.it/250x50"
        img-modifier="circle responsive"
        modifier="top center"
      >
        <cdr-text
          tag="h4"
          modifier="subheading"
        >
          Rounded image shape
        </cdr-text>
        <cdr-text>Issaquah Alps, WA</cdr-text>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="2">
      <cdr-media-object
        img-src="http://placehold.it/250x50"
        img-modifier="rounded responsive"
        modifier="top right"
        media-align="right"
      >
        <cdr-text
          tag="h4"
          modifier="subheading"
        >
          Rounded image shape
        </cdr-text>
        <cdr-text>Issaquah Alps, WA</cdr-text>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/50x50"
        img-modifier="rounded"
        modifier="top center"
        media-align="center"
      >
        <cdr-text
          tag="h4"
          modifier="subheading"
        >
          Another Rounded image shape
        </cdr-text>
        <cdr-text>Issaquah Alps, WA</cdr-text>
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
