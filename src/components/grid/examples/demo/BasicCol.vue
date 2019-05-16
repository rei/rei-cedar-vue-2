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
import CdrRow from 'componentsdir/grid/CdrRow';
import CdrCol from 'componentsdir/grid/CdrCol';

export default {
  name: 'BasicRowExample',
  components: { CdrRow, CdrCol },
};
</script>

<style>
  .row-demo-wrapper [class^="cdr-row_"] {
    margin-bottom: 16px;
  }

  .row-demo {
    background-color: lightgray;
    text-align: center;
    padding: 10px;
    width: 100%;
    line-height: 1;
  }

  .row-demo > * {
    line-height: 1;
  }

</style>
