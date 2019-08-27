<template>
  <div data-backstop="DataTable">
    <cdr-text
      tag="h2"
      modifier="heading-400 heading-500@md heading-500@lg"
    >
      Tables
    </cdr-text>
    <all-headers />
    <no-col-headers />
    <no-headers />
    <variants />
    <content-resilience />
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';
import AllHeaders from 'componentsdir/dataTable/examples/demo/AllHeaders';
import NoColHeaders from 'componentsdir/dataTable/examples/demo/NoColHeaders';
import NoHeaders from 'componentsdir/dataTable/examples/demo/NoHeaders';
import Variants from 'componentsdir/dataTable/examples/demo/Variants';
import ContentResilience from 'componentsdir/dataTable/examples/demo/ContentResilience';

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
