<template>
  <div>
    <h2>table</h2>

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

    <p>2 column table</p>
    <cdr-table>
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

    <p>No stripe</p>
    <cdr-table :striped="false">
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
