<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      :col-headers="tableData.colHeaders"
      :row-headers="tableData.rowHeaders"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-col-lock-scroll"
    />

    <cdr-data-table
      :col-headers="false"
      :row-headers="tableData.rowHeaders"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-headers"
    />

    <cdr-data-table
      :col-headers="false"
      :row-headers="false"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-no-row-headers"
    />

    <!-- <cdr-data-table
      :col-headers="false"
      :row-headers="['Row 1', 'Row 2']"
      :row-data="[
        {
          a: "1",
          b: "2",
        }
      ]"
      id="new-test"
    /> -->
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import tableData from '../../data';

export default {
  name: 'Table',
  components: Components,
  data() {
    return tableData;
  },
};
</script>

<style>
.table-examples-wrapper {
  padding: 10px;
}

.table-examples-wrapper > div {
  margin-bottom: 40px;
}

</style>
