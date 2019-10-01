<template>
  <div class="cdr-container-fluid">
    <cdr-row>
      <cdr-col span="3">
        <div class="row-demo" />
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo" />
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo" />
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo" />
      </cdr-col>
      <cdr-col span="3">
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
