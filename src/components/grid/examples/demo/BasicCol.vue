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
import CdrRow from 'componentsdir/row/CdrRow';
import CdrCol from 'componentsdir/column/CdrCol';

export default {
  name: 'BasicRowExample',
  components: { CdrRow, CdrCol },
};
</script>
