# <span class="display-name">CdrIcon</span>

## 3 ways to use icons
 
`cdr-icon` can support 3 different ways of getting svg icons onto your page.
 
### 1. SVG Sprite
 
Slightly more work, but offers the best performance when lots of icons will be used.
 
Requires:
 
* `cdr-icons.svg` from `@rei/cdr-assets`
* `file-loader` to get url or `raw-loader` to inline (if using webpack)
* `svgxuse` polyfill (included somewhere on page or in your bundle)
 
#### Examples:
 
Inlining the sprite (recommended)
 
(needs to be available on any page where icons are used so it's best to do it at the base layout/index)
```
// Base view template (assuming .vue and vue-router)
<template>
  <div id="main">
    <cdr-icon :raw="icons"/>
 
    <router-view></router-view> // rest of app
  </div>
</template>
 
<script>
import icons from '@rei/cdr-assets/dist/cdr-icons.svg'; // have raw-loader handle this
...
data() {
  return {
    icons
  }
}
...
</script>
 
 
 
// Then in any component template
// NOTE: It's just the id of the icon and doesn't need a full url path since it's already in the page DOM
<cdr-icon url="#caret-right" />
 
```
 
Within an individual component (you can probably come up with a better way to scale this if you need to do it in a lot of places):
```
//  A .vue file
 
<template>
  ...
  <cdr-icon :url="`${icons}#caret-right`"/>
  ...
</template>
 
<script>