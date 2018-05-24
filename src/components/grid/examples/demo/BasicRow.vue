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
import CdrRow from 'componentsdir/row/CdrRow';
import CdrCol from 'componentsdir/column/CdrCol';

export default {
  name: 'BasicRowExample',
  components: { CdrRow, CdrCol },
};
</script>
