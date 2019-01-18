<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      :row-data="tableData.overflow.rowData"
      :col-headers="tableData.overflow.colHeaders"
      :row-headers="tableData.overflow.rowHeaders"
      :key-order="['col1', 'col2', 'col3', 'col4']"
      caption="Content Resilience - API"
    />

    <cdr-data-table
      caption="Content Resilience - Slots"
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
            v-for="(header, index) in tableData.overflow.colHeaders"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </template>
      <template slot="tbody">
        <tr
          v-for="(row, index) in tableData.overflow.rowData"
          :key="'tr_' + index"
        >
          <th
            scope="row"
          >{{ tableData.overflow.rowHeaders[index] }}</th>
          <td
            v-for="(key, index) in ['col1', 'col2', 'col3', 'col4']"
            :key="index"
          >{{ row[key] }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      caption="Constrain Width Off - API"
      :constrain-width="false"
      :row-data="tableData.overflow.rowData"
      :col-headers="tableData.overflow.colHeaders"
      :row-headers="tableData.overflow.rowHeaders"
      :key-order="['col1', 'col2', 'col3', 'col4']"
    />

    <cdr-data-table
      caption="Constrain Width Off - Slots"
      :col-headers="true"
      :row-headers="true"
      :constrain-width="false"
    >
      <template slot="thead">
        <tr>
          <th
            class="empty"
            scope="col"
          />
          <th
            v-for="(header, index) in tableData.overflow.colHeaders"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </template>
      <template slot="tbody">
        <tr
          v-for="(row, index) in tableData.overflow.rowData"
          :key="'tr_' + index"
        >
          <th
            scope="row"
          >{{ tableData.overflow.rowHeaders[index] }}</th>
          <td
            v-for="(key, index) in ['col1', 'col2', 'col3', 'col4']"
            :key="index"
          >{{ row[key] }}
          </td>
        </tr>
      </template>
    </cdr-data-table>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import tableData from '../data';

export default {
  name: 'ContentResilience',
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
