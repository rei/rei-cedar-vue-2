<template>
  <div>
    <h2>table with data fed in</h2>
    <cdr-table
      :records="bookRecords"
      :headers="bookHeaders"
      data-backstop="tables"/>

    <h2>table with data fed in and row headers</h2>
    <cdr-table
      :records="bookRecords"
      :headers="bookHeaders"
      :row-headers="true"/>

    <h2>default table (non-scrollable mobile)</h2>
    <cdr-table>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>
    <h2>default table (srcollable mobile)</h2>
    <cdr-table>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>default table with header (scrollable mobile)</h2>
    <cdr-table>
      <thead>
        <tr>
          <th class="empty" />
          <th>one</th>
          <th>two</th>
          <th>three</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>default table (srcollable tablet)</h2>
    <cdr-table>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>default table without header (scrollable tablet)</h2>
    <cdr-table>
      <thead>
        <tr>
          <th>one</th>
          <th>two</th>
          <th>three</th>
          <th>four</th>
          <th>five</th>
          <th>six</th>
          <th>seven</th>
          <th>eight</th>
          <th>nine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>default table with header (scrollable tablet)</h2>
    <cdr-table>
      <thead>
        <tr>
          <th class="empty" />
          <th>one</th>
          <th>two</th>
          <th>three</th>
          <th>four</th>
          <th>five</th>
          <th>six</th>
          <th>seven</th>
          <th>eight</th>
          <th>nine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>borderless table</h2>
    <cdr-table
      modifier="borderless"
      data-backstop="tables--borderless">
      <tbody>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th class="row-header">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>compact table</h2>
    <cdr-table
      modifier="compact"
      data-backstop="tables--compact">
      <thead>
        <tr>
          <th class="empty" />
          <th>one</th>
          <th>two</th>
          <th>three</th>
          <th>four</th>
          <th>five</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>borderless compact table</h2>
    <cdr-table modifier="compact borderless">
      <thead>
        <tr>
          <th class="empty" />
          <th>one</th>
          <th>two</th>
          <th>three</th>
          <th>four</th>
          <th>five</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th class="row-header">row header</th>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </cdr-table>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Table',
  components: Components,
  data() {
    return {
      bookHeaders: [
        'Title',
        'Year',
        'Author',
      ],
      bookRecords: [
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
    };
  },
};
</script>

<style>
</style>
