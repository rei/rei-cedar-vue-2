## CdrActivityCard


src/compositions/activityCard/cdrActivityCard.vue


A composition of search.

### Props, Methods, Events, Slots

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
media | string | n/a | false | Requires `mediaRatio`.
Area to crop the image overflow to.
{top, y-center, bottom} {left, x-center, right}
See cdr-img
mediaAlt | string | " " | false | this is set to top when there is no attribution
mediaRatio | string | n/a | false | Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
See cdr-img
mediaCover | boolean | n/a | false | Requires `mediaRatio`.
Scale the image to be as large as possible to fill the area (background-position: cover;)
See cdr-img
mediaCrop | string | n/a | false | 
title | string | n/a | false | Title text
titleUrl | string | n/a | true | href to turn card into a link
titleLevel | string|number | "2" | false | Heading level
label | string | n/a | false | Label text
location | string | n/a | false | Location text
snapshot | array | n/a | false | Snapshot text
rating | string|number | n/a | false | Rating value
count | string|number | n/a | false | Number of ratings
