<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      id="manual-size-chart"
      caption="Manual Size Chart"
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
      :col-headers="true"
      :row-headers="true"
      caption="Table with data fed in"
      id="manual-3-col"
    >
      <template slot="thead">
        <tr>
          <th
            class="empty"
            scope="col"
          />
          <th
            v-for="(header, index) in tableData.books.headers"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </template>
      <template slot="tbody">
        <tr
          v-for="(record, index) in tableData.books.records"
          :key="'tr_' + index"
        >
          <th scope="row">{{ record.rowheader }}</th>
          <td
            v-for="(colData, key, index) in record"
            v-if="key !== 'rowheader'"
            :key="index"
          >
            {{ colData }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      caption="Scroll example"
      :row-headers="true"
      id="manual-scroll"
    >
      <template slot="tbody">
        <tr
          v-for="(record, key, index) in tableData.scroll.records"
          :key="index + '_' + key"
        >
          <th>{{ record.rowheader }}</th>
          <td
            v-for="(colData, key, index) in record"
            v-if="key !== 'rowheader'"
            :key="key + '_' + index"
          >
            {{ colData }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      modifier="compact borderless"
      caption="Full Manual - Compact & Borderless"
      id="full-manual"
      data-backstop="DataTable--compact-borderless"
    >
      <template slot="tbody">
        <tr>
          <th>Best Use</th>
          <td>Casual</td>
        </tr>
        <tr>
          <th>Fabric</th>
          <td>Cotton canvas</td>
        </tr>
        <tr>
          <th>Lining Fabric</th>
          <td>Polyester microfleece/nylon</td>
        </tr>
        <tr>
          <th>Hood</th>
          <td>No</td>
        </tr>
        <tr>
          <th>Black Length</th>
          <td>Hip-length</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>Unavailable</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>Men's</td>
        </tr>
        <tr>
          <th>Number</th>
          <td>25</td>
        </tr>
      </template>
    </cdr-data-table>

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
