<template>
  <div class="cdr-container-fluid">
    <cdr-row cols="3">
      <cdr-col>
        <div class="row-demo" />
      </cdr-col>
      <cdr-col>
        <div class="row-demo" />
      </cdr-col>
      <cdr-col>
        <div class="row-demo" />
      </cdr-col>
      <cdr-col>
        <div class="row-demo" />
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'BasicRowExample',
  components: { ...Components },
};
</script>
