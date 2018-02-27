<template>
  <div class="cdr-container-fluid">
    <cdr-row>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import cdrRow from 'Components/row/cdrRow';
import cdrCol from 'Components/column/cdrCol';

export default {
  name: 'BasicRowExample',
  components: { cdrRow, cdrCol },
};
</script>
