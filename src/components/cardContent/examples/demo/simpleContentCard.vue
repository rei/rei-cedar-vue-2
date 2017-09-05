<template>
  <cdr-row cols="1" align="top" justify="center">
    <cdr-col>
      <cdr-card-content
        title="Tiger Mountain Loop"
        media="http://placehold.it/350x150"
        summary="<p> A block of content </p>"
        >
      </cdr-card-content>
    </cdr-col>
    <cdr-col>
      <cdr-card-content
        media="http://placehold.it/350x150">
      </cdr-card-content>
    </cdr-col>
  </cdr-row>
</template>

<script>
  import * as Components from '../../../_index';


  export default {
    name: 'simpleContentCard',
    components: Components,
  };
</script>

