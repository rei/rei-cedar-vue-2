<template>
  <div class="container-fluid">
    <cdr-row>
      <cdr-col :span="3">
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col :span="3">
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col :span="3">
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col :span="3">
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col :span="3">
        <div class="row-demo"></div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
  import cdrRow from '../../../components/layouts/Row';
  import cdrCol from '../../../components/layouts/Col';

  export default {
    name: 'basic-row-example',
    components: { cdrRow, cdrCol },
  };
</script>

<style scoped>
  .row-demo {
    background-color: gray;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
  
  .row-demo-wrap {
    background-color: lightgray;
  }
</style>
