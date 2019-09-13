<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      caption="No Column Headers - Slots"
      :row-headers="true"
    >
      <template slot="tbody">
        <tr
          v-for="(row, index) in tableData.rowData"
          :key="'tr_' + index"
        >
          <th
            scope="row"
          >{{ tableData.rowHeaders[index] }}</th>
          <td
            v-for="(key, index2) in ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
            :key="index2"
          >{{ row[key] }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      :col-headers="false"
      :row-headers="tableData.rowHeaders"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-headers"
      caption="No Column Headers - API"
    />
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import tableData from '../data';

export default {
  name: 'NoColHeaders',
  components: Components,
  data() {
    return { tableData };
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
