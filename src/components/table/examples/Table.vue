<template>
  <div>
    <h2>table with data fed in</h2>
    <cdr-table
      :records="bookRecords"
      :headers="bookHeaders"/>
    <h2>default table (non-scrollable mobile)</h2>
    <cdr-table>
      <tbody>
        <tr>
          <th scope="row">row header</th>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th scope="row">row header</th>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th scope="row">row header</th>
          <td>
            test
          </td>
        </tr>
        <tr>
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
    <cdr-table modifier="borderless">
      <tbody>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <th scope="row">borderless</th>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
      </tbody>
    </cdr-table>

    <h2>compact table</h2>
    <cdr-table modifier="compact">
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
          <th scope="row">row header</th>
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
        },
        {
          title: 'Book C',
          year: 1532,
          author: 'Joey',
        },
        {
          title: 'Book E',
          year: 1253,
          author: 'Scotty',
        },
      ],
    };
  },
};
</script>

<style>
</style>
