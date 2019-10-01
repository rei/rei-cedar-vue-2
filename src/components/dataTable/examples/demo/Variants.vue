<template>
  <div class="table-examples-wrapper">
    <cdr-data-table
      modifier="compact borderless"
      caption="Compact & Borderless - Slots"
      data-backstop="DataTable--compact-borderless"
    >
      <template slot="tbody">
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
          <td>25</td>
        </tr>
      </template>
    </cdr-data-table>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import tableData from '../data';

export default {
  name: 'Variants',
  components: Components,
  data() {
    return { tableData };
  },
};
</script>

<style>
.table-examples-wrapper {
  padding: 10px;
}

.table-examples-wrapper > div {
  margin-bottom: 40px;
}

</style>
