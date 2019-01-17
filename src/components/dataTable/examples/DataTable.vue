<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-small">
      Tables
    </cdr-text>
    <all-headers />
    <!-- <no-col-headers />
    <no-headers />
    <variants />-->
    <content-resilience />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import AllHeaders from './demo/AllHeaders';
import NoColHeaders from './demo/NoColHeaders';
import NoHeaders from './demo/NoHeaders';
import Variants from './demo/Variants';
import ContentResilience from './demo/ContentResilience';

export default {
  name: 'Tables',
  components: {
    ...Components,
    AllHeaders,
    NoColHeaders,
    NoHeaders,
    Variants,
    ContentResilience,
  },
};
</script>
