<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      id="manual-size-chart"
      caption="No Headers - Slots"
    >
      <template slot="tbody">
        <tr
          v-for="(row, index) in tableData.rowData"
          :key="'tr_' + index"
        >
          <td
            v-for="(key, index) in ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
            :key="index"
          >{{ row[key] }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-no-row-headers"
      caption="No Headers - API"
    />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import tableData from '../data';

export default {
  name: 'NoHeaders',
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
