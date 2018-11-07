# CdrDataTable

## Properties

| Name                                 | Type   | Default |
|--------------------------------------|--------|---------|
| id                                   | string | N/A     |
| Sets unique id on `<table>` element. |        |         |

<br />

| Name                                                                                                                                                                                                                                                  | Type          | Default |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------|
| colHeaders                                                                                                                                                                                                                                            | array/boolean | false   |
| The colHeaders prop accepts an array of column header strings or a boolean value. Renders in the `thead` slot. If the value is false, column heads are not displayed. For example, possible values are: [ ‘Column Header 1’, ‘Column Header 2’, ... ] |               |         |

<br />

| Name                                                                                                                                                                                                                                      | Type          | Default |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------|
| rowHeaders                                                                                                                                                                                                                                | array/boolean | false   |
| The rowHeaders prop accepts an array of row header strings or a boolean value. Renders in the `tbody` slot. If the value is false, row heads are not displayed. For example, possible values are: [ ‘Row Header 1’, ‘Row Header 2’, ... ] |               |         |

<br />

| Name                                                         | Type  | Default |
|--------------------------------------------------------------|-------|---------|
| rowData                                                      | array | []      |
| Sets an array of objects representing each row in the table. |       |         |

<br />

| Name                                           | Type  | Default |
|------------------------------------------------|-------|---------|
| keyOrder                                       | array | []      |
| Determines the order of cell content in a row. |       |         |

<br />

| Name                                | Type   | Default |
|-------------------------------------|--------|---------|
| caption                             | string | N/A     |
| Sets the caption text for the table |        |         |


## Slots

| Name  | Notes |
|:-----|:-------|
| thead | Sets the innerHTML for the thead element. Includes default slot content. |
| tbody | Sets the innerHTML for the tbody element. Includes default slot content. |

## Installation

Resources are available within the [CdrDataTable package:](https://www.npmjs.com/search?q=cdr-data-table)

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-data-table`
- Component styles: `cdr-data-table.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrDataTable package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-data-table
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-data-table/dist/cdr-data-table.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-table
    id="size-details"
    :col-headers="colHeaders"
    :row-headers="rowHeaders"
    :row-data="rowData"
    :key-order="keyOrder"
  />
</template>

<script>
import { CdrTable } from '@rei/cdr-table';
export default {
  ...
  components: {
     CdrTable  
  }, 
  data() {
    ...
  },
}
</script>
```

## Usage

### Using Props

The simplest way to use CdrDataTable is using the props API. The below example shows how:
- The data props (`colHeaders`, `rowHeaders`, `rowData`) are used
- `keyOrder` determines values displayed in each cell. The array order must match the `colHeaders` or column order

```vue
<template>
  <cdr-data-table
    id="props-example"
    :col-headers="colHeaders"
    :row-headers="rowHeaders"
    :row-data="rowData"
    :key-order="keyOrder"
    caption="CdrTable props usage"
  />
</template>

<script>
  ...
  data() {
    colHeaders: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    rowHeaders: ['Chest', 'Sleeve Length', 'Waist', 'Hip', 'Inseam'],
    keyOrder: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
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
      ...
    ],
  },
}
</script>
```

### Using Slots

The same table can be rendered using the `v-for` Vue directive and CdrDataTable's named slots:
- Iterates over the data set by looping through items in an array or object
- Generates appropriate markup for each named slot

In the below examples, the `colHeaders` prop is set to true because there are column headers for the data table.

```vue
<template>
  <cdr-data-table
    id="slots-example"
    :col-headers="true"
    caption="CdrTable slots usage"
  >
    <template slot="thead">
       <tr>
         <th
           class="empty"
           scope="col"
         />
         <th
           v-for="(header, index) in tableData.colHeaders"
           :key="index"
         >
           {{ header }}
         </th>
       </tr>
     </template>
     <template slot="tbody">
       <tr
         v-for="(row, index) in tableData.rowData"
         :key="'tr_' + index"
       >
         <th
           scope="row"
         >{{ tableData.rowHeaders[index] }}</th>
         <td
           v-for="(key, index) in ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
           :key="index"
         >{{ row[key] }}
         </td>
       </tr>
     </template>
  </cdr-data-table>
</template>

<script>
  ...
  data() {
    ...
 ],
  },
}
</script>
```

The below example uses:
- `compact` and `borderless` modifiers
- CdrDataTable's named slots
- Markup is manual, not data-driven

```vue
<cdr-data-table
  modifier="compact borderless"
  caption="Full Manual - Compact & Borderless"
  id="full-manual"
>
  <template slot="tbody">
    <tr>
      <th scope=”row”>Best Use</th>
      <td>Casual</td>
    </tr>
    <tr>
      <th scope=”row”>Fabric</th>
      <td>Cotton canvas</td>
    </tr>
    <tr>
      <th scope=”row”>Lining Fabric</th>
      <td>Polyester microfleece/nylon</td>
    </tr>
    ...
  </template>
</cdr-data-table>
```

### Modifiers

Following variants are available to the `cdr-data-table` modifier attribute:

|              |                      |
|--------------|----------------------|
| `compact`    | Reduces cell padding |
| `borderless` | Removes cell borders |
