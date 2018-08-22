<template>
  <div class="table-examples-wrapper">
    <cdr-table
      :col-headers="true"
      :row-headers="true"
      caption="Table with data fed in"
    >
      <template slot="col-headers">
        <th
          v-for="(header, index) in books.headers"
          :key="index"
        >
          {{ header }}
        </th>
      </template>
      <tr
        v-for="(record) in books.records"
        :key="record.rowheader"
      >
        <th>{{ record.rowheader }}</th>
        <td
          v-for="(colData, index) in record"
          v-if="index !== 'rowheader'"
          :key="index"
        >
          {{ colData }}
        </td>
      </tr>
    </cdr-table>

    <cdr-table
      caption="Scroll example"
      :row-headers="true"
    >
      <tr
        v-for="(record) in scroll.records"
        :key="record.rowheader"
      >
        <th>{{ record.rowheader }}</th>
        <td
          v-for="(colData, index) in record"
          v-if="index !== 'rowheader'"
          :key="index"
        >
          {{ colData }}
        </td>
      </tr>
    </cdr-table>

    <cdr-table
      caption="Scroll example"
    >
      <tr
        v-for="(record) in scroll.records"
        :key="record.rowheader"
      >
        <td
          v-for="(colData, index) in record"
          v-if="index !== 'rowheader'"
          :key="index"
        >
          {{ colData }}
        </td>
      </tr>
    </cdr-table>

    <cdr-table
      modifier="compact borderless"
      caption="Compact & Borderless"
      summary="Summary"
    >
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
        <td class="content-align-right">25</td>
      </tr>
    </cdr-table>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Table',
  components: Components,
  data() {
    const headers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const records = [];

    for (let i = 0; i < 2; i += 1) {
      const record = {};

      headers.forEach((header) => {
        record[header] = header;
      });

      record.rowheader = 'Row header';
      records.push(record);
    }

    return {
      books: {
        headers: [
          'Title',
          'Year',
          'Author',
        ],
        records: [
          {
            title: 'Book A',
            year: 1823,
            author: 'Mikey',
            rowheader: 'row 1',
          },
          {
            title: 'Book C',
            year: 1532,
            author: 'Joey',
            rowheader: 'row 2',
          },
          {
            title: 'Book E',
            year: 1253,
            author: 'Scotty',
            rowheader: 'row 3',
          },
        ],
      },
      scroll: {
        headers,
        records,
      },
    };
  },
};
</script>

<style>

.table-examples-wrapper > div {
  margin-bottom: 40px;
}

</style>
