<template>
  <div data-backstop="visibility-utilities">
    <h2>Visibility classes</h2>

    <table>
      <thead>
        <tr>
          <th>class</th>
          <th class="cdr-hide cdr-show@xs-only">visible @ xs</th>
          <th class="cdr-hide cdr-show@sm-only">visible @ sm</th>
          <th class="cdr-hide cdr-show@md-only">visible @ md</th>
          <th class="cdr-hide cdr-show@lg-only">visible @ lg</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>.cdr-hide</td>
          <td>
            <div class="cdr-hide">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@xs-only</td>
          <td>
            <div class="cdr-hide@xs-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@sm</td>
          <td>
            <div class="cdr-hide@sm">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@sm-only</td>
          <td>
            <div class="cdr-hide@sm-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@md</td>
          <td>
            <div class="cdr-hide@md">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@md-only</td>
          <td>
            <div class="cdr-hide@md-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@lg</td>
          <td>
            <div class="cdr-hide@lg">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@lg-only</td>
          <td>
            <div class="cdr-hide@lg-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show</td>
          <td>
            <div class="cdr-hide cdr-show">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@xs-only</td>
          <td>
            <div class="cdr-hide cdr-show@xs-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@sm</td>
          <td>
            <div class="cdr-hide cdr-show@sm">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@sm-only</td>
          <td>
            <div class="cdr-hide cdr-show@sm-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@md</td>
          <td>
            <div class="cdr-hide cdr-show@md">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@md-only</td>
          <td>
            <div class="cdr-hide cdr-show@md-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@lg</td>
          <td>
            <div class="cdr-hide cdr-show@lg">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@lg-only</td>
          <td>
            <div class="cdr-hide cdr-show@lg-only">X</div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VisibleUtilities',
};
</script>

<style>
table,
td {
  border: 1px solid lightgray;
}

table {
  border-collapse: collapse;
}

th {
  padding: 10px;
}

td {
  padding: 5px;
}

td:not(:first-of-type) {
  text-align: center;
}
</style>
