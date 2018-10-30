<template>
  <div data-backstop="visibility-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Visibility classes
    </cdr-text>

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
          <td>.cdr-show-inline</td>
          <td>
            <div class="cdr-hide cdr-show-inline">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@xs-only</td>
          <td>
            <div class="cdr-hide cdr-show@xs-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@xs-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@xs-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@xs-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@xs-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@sm</td>
          <td>
            <div class="cdr-hide cdr-show@sm">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@sm</td>
          <td>
            <div class="cdr-hide cdr-show-inline@sm">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@sm</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@sm">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@sm-only</td>
          <td>
            <div class="cdr-hide cdr-show@sm-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@sm-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@sm-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@sm-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@sm-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@md</td>
          <td>
            <div class="cdr-hide cdr-show@md">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@md</td>
          <td>
            <div class="cdr-hide cdr-show-inline@md">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@md</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@md">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@md-only</td>
          <td>
            <div class="cdr-hide cdr-show@md-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@md-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@md-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@md-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@md-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@lg</td>
          <td>
            <div class="cdr-hide cdr-show@lg">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@lg</td>
          <td>
            <div class="cdr-hide cdr-show-inline@lg">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@lg</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@lg">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@lg-only</td>
          <td>
            <div class="cdr-hide cdr-show@lg-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@lg-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@lg-only">X</div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@lg-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@lg-only">X</div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'VisibleUtilities',
  components: { ...Components },
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
