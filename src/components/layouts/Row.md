

## API

### Row

| Prop | Type | Default | Values | Description |
| --- | --- | --- | --- | --- |
| `:cols` [-md, -lg, -xl, -xxl] | Number |  | 1 through 12 | Specifies how many columns in the row |
| `:justify`  [-md, -lg, -xl, -xxl] | String | 'left' | 'left', 'center', 'right', 'around', 'between' | Specifies how to justify columns with empty space in row (see flexbox -> justify-content) |
| `:align` [-md, -lg, -xl, -xxl] | String | 'stretch' | 'top', 'middle', 'bottom', 'stretch' | Specifies how to align columns of differing heights (see flexbox -> align-items) |
| `:vertical` [-md, -lg, -xl, -xxl] | Boolean | false | | Changes row layout to column (see flexbox -> flex-direction: column) |
| `:nowrap` [-md, -lg, -xl, -xxl] | Boolean | false | | Turns off row wrapping and sets up overflow scrolling (see flexbox -> flex-wrap: nowrap) |
| `:wrap` [-md, -lg, -xl, -xxl] | Boolean | true | | Turns on row wrapping. Only needs to be changed if overriding `:nowrap` (see flexbox -> flex-wrap: wrap) |
| `:gutter` [-md, -lg, -xl, -xxl] | Number | | 0 | 0 turns off gutters for that row |

### Col

| Prop | Type | Default | Values | Description |
| --- | --- | --- | --- | --- |
| `:span` [-md, -lg, -xl, -xxl] | Number |  | 1 through 12 | Specifies number of columns (out of 12) this column will span |
| `:is-row` | Boolean | false |  | Column acts as a row and exposes row API (above) |
| `:align-self` [-md, -lg, -xl, -xxl] | String | 'stretch' | 'Top', 'middle', 'bottom', 'stretch' | Specifies how the column should align itself (see flexbox -> align-self) |
| `:off-left` [-md, -lg, -xl, -xxl] | Number |  | 1 through 12 | Columns of empty space to add left of this column |
| `:off-right` [-md, -lg, -xl, -xxl] | Number |  | 1 through 12 | Columns of empty space to add right of this column |
| `:hide` [-sm, -md, -lg, -xl, -xxl] | String |  | 'up', 'down', 'only' | Hides the column from breakpoint up, breakpoint down, or only at that breakpoint |