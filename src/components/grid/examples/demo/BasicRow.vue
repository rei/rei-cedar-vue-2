<template>
  <div class="cdr-container-fluid">
    <cdr-row cols="3">
      <cdr-col>
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col>
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col>
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col>
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
