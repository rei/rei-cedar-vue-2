<template>
  <div class="table-examples-wrapper">
    <cdr-table
      :col-headers="colHeaders"
      :row-headers="rowHeaders"
      :row-data="rowData"
      id="auto-table-col-lock-scroll"
    />

    <cdr-table
      :col-headers="false"
      :row-headers="rowHeaders"
      :row-data="rowData"
      id="auto-table-no-col-headers"
    />

    <cdr-table
      :col-headers="false"
      :row-headers="false"
      :row-data="rowData"
      id="auto-table-no-col-no-row-headers"
    />

    <!--<cdr-table
      :col-headers="false"
      :row-headers="['Row 1', 'Row 2']"
      :row-data="[
        {
          a: "1",
          b: "2",
        }
      ]"
      id="new-test"
    />-->
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Table',
  components: Components,
  data() {
    return {
      colHeaders: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      rowHeaders: ['Chest', 'Sleeve Length', 'Waist', 'Hip', 'Inseam'],
      rowData: [
        {
          xs: '31.5 - 33',
          s: '35 - 38',
          m: '38 - 41',
          l: '42 - 45',
          xl: '46 - 49',
          xxl: '50 - 53',
          xxxl: '54-57',
        },
        {
          s: '33',
          m: '34',
          l: '35',
          xl: '35.5',
          xxl: '36',
          xxxl: '36.6',
          xs: 'N/A',
        },
        {
          xs: '26.5 - 27.5',
          s: '28 - 30',
          m: '32 - 34',
          l: '36 - 38',
          xl: '40 - 42',
          xxl: '44 - 46',
          xxxl: '48 - 50',
        },
        {
          xs: 'N/A',
          s: '35 - 37',
          m: '38 - 40',
          l: '41 - 43',
          xl: '44 - 46',
          xxl: '47 - 49',
          xxxl: '51 - 54',
        },
        {
          xs: '31',
          s: '32',
          m: '32',
          l: '32',
          xl: '32',
          xxl: '32',
          xxxl: '32',
        },
      ],
      twoCol: [

      ],
    };
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
