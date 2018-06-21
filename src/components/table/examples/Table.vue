<template>
  <div>
    <h2>table</h2>
    <cdr-table>
      <thead>
        <tr>
          <th/>
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
      </tbody>
    </cdr-table>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Table',
  components: Components,
};
</script>

<style>
</style>
