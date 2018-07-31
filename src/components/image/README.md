## Properties

| Name  | Type | Default     |
|:-----|:-------|:--------|
| alt | string   | empty |

Sets alternate text for the image. Default value is empty.

| Name | Type   | Default |
|:-----|:-------|:--------|
| src  | string | empty   |

Sets image source URL.

| Name | Type   | Default |
|:-----|:-------|:--------|
| lazy  | bool | false   |

For internal applications. If true, this property will enable lazy loading. Lazy loading is provided using the FEDPACK rei-lazy-image-loader project

| Name | Type | Default |
|:-----|:-----|:--------|
| lazyOpts | object | array   |

For internal projects. Provide an object of lazy options as defined on within the rei-lazy-image-loader API. This will output each option as a `data-` attribute on the root element.

| Name     | Type   | Default |
|:---------|:-------|:--------|
| ratio | enum | n/a   |

Sets aspect ratio and scales the image as large as possible without cropping or stretching the image (See CSS background-size: contain). Possible values: 'auto' | 'square' | '1-2' | '2-3' | '3-4' | '9-16' | '2-1' | '3-2' | '4-3' | '16-9'