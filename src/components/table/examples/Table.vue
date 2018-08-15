<template>
  <div>
    <h2>table with data fed in</h2>
    <cdr-table
      :col-headers="true"
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

    <h2>Some text</h2>
    <cdr-table>
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
</style>
