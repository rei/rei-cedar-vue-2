<template>
  <cdr-row cols="1" align="top" justify="center">
    <cdr-col>
      <cdr-card-content
        level="2"
        heading="Tiger Mountain Loop"
        media="http://placehold.it/350x150"
        content-a-gutter="top"
        >
        <p> A block of content </p>
      </cdr-card-content>
    </cdr-col>
    <cdr-col>
      <cdr-card-content
        profile="http://placehold.it/50x50"
        author="Harald Hardrada"
        author-heading="3"
        creation-time="Issaquah Alps, WA"
        level="2"
        label="MTB Project"
        heading="Tiger Mountain Loop"
        heading-url="http://rei.com"
        media="http://placehold.it/350x150"
        attribution >
      </cdr-card-content>
    </cdr-col>
  </cdr-row>
</template>

<script>
  import Components from '../../../_index';


  export default {
    name: 'simpleContentCard',
    components: Components,
  };
</script>

