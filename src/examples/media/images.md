## API

| Prop | Type | Default | Required | Values | Description |
| --- | --- | --- | --- | --- |
| `:src` | String |  | * | image url | Image source |
| `:alt` | String |  | * |  | Descriptive alt text for the image |
| `:ratio` | String |  |  | 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9' | Gives image a media frame and defines aspect ratio for it |
| `:crop` | Array ( of Strings) |  |  | 'top', 'y-center', 'bottom', 'left', 'x-center', 'right' | Defines area of image to crop to within media frame. Requires ratio to be defined |
| `:modifier` | String |  |  | 'responsive', 'rounded', 'circle', 'thumbnail' | Defines area of image to crop to when a ratio is defined |
