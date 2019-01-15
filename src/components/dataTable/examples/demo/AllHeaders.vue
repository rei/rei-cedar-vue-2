<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      id="manual-size-chart"
      caption="All Headers - Slots"
      :col-headers="true"
      :row-headers="true"
    >
      <template slot="thead">
        <tr>
          <th
            class="empty"
            scope="col"
          />
          <th
            v-for="(header, index) in tableData.colHeaders"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </template>
      <template slot="tbody">
        <tr
          v-for="(row, index) in tableData.rowData"
          :key="'tr_' + index"
        >
          <th
            scope="row"
          >{{ tableData.rowHeaders[index] }}</th>
          <td
            v-for="(key, index) in ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
            :key="index"
          >{{ row[key] }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      :col-headers="tableData.colHeaders"
      :row-headers="tableData.rowHeaders"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-col-lock-scroll"
      caption="All Headers - API"
    />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import tableData from '../data';

export default {
  name: 'AllHeaders',
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
