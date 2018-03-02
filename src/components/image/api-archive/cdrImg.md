## CdrImg


src/components/image/cdrImg.vue


Cedar 2 component for image

### Props, Methods, Events, Slots

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
src | string | n/a | true | Required. Image source url.
alt | string | " " | false | Required. Image alt text.
lazy | boolean | n/a | false | Object of lazy options
lazyOpts | object | function() {} | false | 
ratio | string | n/a | false | lg breakpoint and above
ratioSm | string | n/a | false | sm breakpoint and above
ratioMd | string | n/a | false | md breakpoint and above
ratioLg | string | n/a | false | 
crop | string | n/a | false | Requires a `ratio`.
Area to crop the image overflow to.
{top, y-center, bottom} {left, x-center, right}
cover | boolean | n/a | false | Requires a `ratio`.
Scale the image to be as large as possible to fill the area (background-position: cover;)
radius | string | n/a | false | Sets a border radius to an element {square, top, right, bottom, left}
