<template>
  <div
    data-backstop="visibility-utilities"
    class="visibility-utilities"
  >
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Visibility classes
    </cdr-text>

    <table>
      <thead>
        <tr>
          <th>class</th>
          <th class="cdr-hide cdr-show@breakpoint--xs-only">
            visible @ xs
          </th>
          <th class="cdr-hide cdr-show@breakpoint--sm-only">
            visible @ sm
          </th>
          <th class="cdr-hide cdr-show@breakpoint--md-only">
            visible @ md
          </th>
          <th class="cdr-hide cdr-show@breakpoint--lg-only">
            visible @ lg
          </th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>.cdr-hide</td>
          <td>
            <div class="cdr-hide">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--xs-only</td>
          <td>
            <div class="cdr-hide@breakpoint--xs-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--sm</td>
          <td>
            <div class="cdr-hide@breakpoint--sm">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--sm-only</td>
          <td>
            <div class="cdr-hide@breakpoint--sm-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--md</td>
          <td>
            <div class="cdr-hide@breakpoint--md">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--md-only</td>
          <td>
            <div class="cdr-hide@breakpoint--md-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--lg</td>
          <td>
            <div class="cdr-hide@breakpoint--lg">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-hide@breakpoint--lg-only</td>
          <td>
            <div class="cdr-hide@breakpoint--lg-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show</td>
          <td>
            <div class="cdr-hide cdr-show">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline</td>
          <td>
            <div class="cdr-hide cdr-show-inline">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--xs-only</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--xs-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--xs-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--xs-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--xs-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--xs-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--sm</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--sm">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--sm</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--sm">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--sm</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--sm">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--sm-only</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--sm-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--sm-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--sm-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--sm-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--sm-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--md</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--md">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--md</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--md">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--md</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--md">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--md-only</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--md-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--md-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--md-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--md-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--md-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--lg</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--lg">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--lg</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--lg">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--lg</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--lg">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show@breakpoint--lg-only</td>
          <td>
            <div class="cdr-hide cdr-show@breakpoint--lg-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline@breakpoint--lg-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline@breakpoint--lg-only">
              X
            </div>
          </td>
        </tr>

        <tr>
          <td>.cdr-show-inline-block@breakpoint--lg-only</td>
          <td>
            <div class="cdr-hide cdr-show-inline-block@breakpoint--lg-only">
              X
            </div>
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
.visibility-utilities {
  table,
  td {
    border: 1px solid lightgray;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    line-height: 1;
  }

  th {
    text-align: left;
    padding: 10px;
  }

  td {
    padding: 5px;
  }

  td:not(:first-of-type) {
    text-align: center;
  }
}
</style>
