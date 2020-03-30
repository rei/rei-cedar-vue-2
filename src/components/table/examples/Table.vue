<template>
  <div>
    <h2>table</h2>

    <div data-backstop="regular-tables">
      <p>1 column table</p>
      <cdr-table>
        <thead>
          <tr>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>2 column table (with hover)</p>
      <cdr-table hover>
        <thead>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Small table</p>
      <cdr-table size="small">
        <thead>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Medium table</p>
      <cdr-table size="medium">
        <thead>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Large table</p>
      <cdr-table size="large">
        <thead>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Not full width</p>
      <cdr-table :full-width="false">
        <thead>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Responsive full width</p>
      <div data-backstop="responsive-table-width">
        <cdr-table full-width="@sm @lg">
          <thead>
            <tr>
              <th>Test head</th>
              <th>Test head</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test content</td>
              <td>Test content</td>
            </tr>
            <tr>
              <td>Test content</td>
              <td>Test content</td>
            </tr>
            <tr>
              <td>Test content</td>
              <td>Test content</td>
            </tr>
          </tbody>
        </cdr-table>
      </div>

      <p>Table without head</p>
      <cdr-table>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Striped</p>
      <cdr-table striped>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>No border</p>
      <cdr-table :border="false">
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Table with caption</p>
      <cdr-table>
        <caption>I'm the caption</caption>
        <thead>
          <tr>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Bigger table</p>
      <cdr-table>
        <thead>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Complex table</p>
      <cdr-table>
        <thead>
          <tr>
            <th colspan="2">
              Test head
            </th>
            <th colspan="2">
              Test head
            </th>
          </tr>
          <tr>
            <th>Test head</th>
            <th>Test head</th>
            <th>Test head</th>
            <th>Test head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
          <tr>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
            <td>Test content</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Test Foot</td>
            <td>Test Foot</td>
            <td>Test Foot</td>
            <td>Test Foot</td>
          </tr>
          <tr>
            <td>Test Foot</td>
            <td>Test Foot</td>
            <td>Test Foot</td>
            <td>Test Foot</td>
          </tr>
          <tr>
            <td>Test Foot</td>
            <td>Test Foot</td>
            <td>Test Foot</td>
            <td>Test Foot</td>
          </tr>
        </tfoot>
      </cdr-table>
    </div>

    <div data-backstop="horizontal-tables">

      <p>Horizontal table</p>
      <cdr-table>
        <tbody>
          <tr>
            <th>Date</th>
            <td>12 February</td>
            <td>24 March</td>
            <td>14 April</td>
          </tr>
          <tr>
            <th>Event</th>
            <td>Waltz with Strauss</td>
            <td>The Obelisks</td>
            <td>The What</td>
          </tr>
          <tr>
            <th>Venue</th>
            <td>Main Hall</td>
            <td>West Wing</td>
            <td>Main Hall</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Striped Horizontal table</p>
      <cdr-table striped>
        <tbody>
          <tr>
            <th>Date</th>
            <td>12 February</td>
            <td>24 March</td>
            <td>14 April</td>
          </tr>
          <tr>
            <th>Event</th>
            <td>Waltz with Strauss</td>
            <td>The Obelisks</td>
            <td>The What</td>
          </tr>
          <tr>
            <th>Venue</th>
            <td>Main Hall</td>
            <td>West Wing</td>
            <td>Main Hall</td>
          </tr>
        </tbody>
      </cdr-table>

      <p>Complex Horizontal table</p>
      <cdr-table>
        <thead>
          <tr>
            <th />
            <th>
              Test head
            </th>
            <th colspan="2">
              Test head
            </th>
          </tr>
          <tr>
            <th />
            <th>head 2</th>
            <th>head 3</th>
            <th>head 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Date</th>
            <td>12 February</td>
            <td>24 March</td>
            <td>14 April</td>
          </tr>
          <tr>
            <th>Event</th>
            <td>Waltz with Strauss</td>
            <td>The Obelisks</td>
            <td>The What</td>
          </tr>
          <tr>
            <th>Venue</th>
            <td>Main Hall</td>
            <td>West Wing</td>
            <td>Main Hall</td>
          </tr>
        </tbody>
      </cdr-table>
    </div>

    <div data-backstop="minimal-tables">
      <p>Table without thead, tbody, or tfoot</p>
      <cdr-table>
        <tr>
          <th>head</th>
          <th>head</th>
          <th>head</th>
        </tr>
        <tr>
          <td>conent</td>
          <td>conent</td>
          <td>conent</td>
        </tr>
        <tr>
          <td>conent</td>
          <td>conent</td>
          <td>conent</td>
        </tr>
        <tr>
          <td>conent</td>
          <td>conent</td>
          <td>conent</td>
        </tr>
      </cdr-table>

      <p>Striped Table without thead, tbody, or tfoot</p>
      <cdr-table striped>
        <tr>
          <th>head</th>
          <th>head</th>
          <th>head</th>
        </tr>
        <tr>
          <td>conent</td>
          <td>conent</td>
          <td>conent</td>
        </tr>
        <tr>
          <td>conent</td>
          <td>conent</td>
          <td>conent</td>
        </tr>
        <tr>
          <td>conent</td>
          <td>conent</td>
          <td>conent</td>
        </tr>
      </cdr-table>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Table',
  components: {
    ...Components,
  },
};
</script>

<style>
</style>
