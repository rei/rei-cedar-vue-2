## CdrMediaObject


src/components/mediaObject/cdrMediaObject.vue


Cedar 2 component for media object

### Props, Methods, Events, Slots

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
width | string | n/a | false | Sets the media width
mediaAlign | string | n/a | false | Allows you to align your text
{right, left, center}
iconUrl | string | n/a | false | icon svg path
See cdr-icon
imgClass | string | n/a | false | Custom class added to the image/icon
imgSrc | string | n/a | false | Image path.
See cdr-img
imgRadius | string | n/a | false | Image radius.
See cdr-img
imgRatio | string | n/a | false | Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
See cdr-img
imgCover | boolean | n/a | false | Requires `imgRatio`.
Scale the image to be as large as possible to fill the area (background-position: cover;)
See cdr-img
imgCrop | string | n/a | false | Requires `imgRatio`.
Area to crop the image overflow to.
{top, y-center, bottom} {left, x-center, right}
See cdr-img
imgAlt | string | n/a | false | Image alternitive description, defaults to blank
See cdr-img
imgModifier | string | n/a | false | {Responsive, Rounded, circle, thumbnail}
See cdr-img
imgHref | string | n/a | false | Link the image
imgHrefText | string | n/a | false | Screen reader text for the linked image
imgTarget | string | n/a | false | Target for the image link

Slot | Description
--- | ---
default | 
