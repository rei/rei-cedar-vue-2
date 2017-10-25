<template>
  <div class="cdr-container-fluid">
    <cdr-row cols="3">
      <cdr-col>
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo"></div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo"></div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
  import cdrRow from '../../cdrRow';
  import cdrCol from '../../cdrCol';

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
