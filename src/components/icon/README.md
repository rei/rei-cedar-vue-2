# <span class="display-name">CdrIcon</span>

## 3 ways to use icons
 
`cdr-icon` can support 3 different ways of getting svg icons onto your page.
 
### 1. SVG Sprite

#### Option A: Inline symbol sprite
 
Requires:
 
* Icon sprite inlined on page
 
#### Example: 

The sprite needs to be available on any page where the icons will be used so it's best to do it at the base layout/index

``` 
// Base view template (assuming .vue and vue-router) 
<template> 
  <div id="main"> 
    <cdr-icon-sprite /> 
 
    <router-view></router-view> // rest of app
  </div> 
</template> 
 
<script> 
import { CdrIconSprite } from '@rei/cdr-icon';

... 
components: {
  CdrIconSprite
}
... 
</script> 
 
// -----------------------------------------------------------------
 
// Then in any descendant child component template
<cdr-icon use="#caret-right" />
```

#### Option B: External symbol defs
 
Requires:
 
* @rei/cdr-icon/sprite/cdr-icon-sprite.svg
* A webpack loader to handle the asset (this example assumes `file-loader`)
* A polyfill for external svg resource. Possibly `svgxuse` or `svg4everybody`
 
Within an individual component (you can probably come up with a better way to scale this if you need to do it in a lot of places): 
``` 
//  A .vue file 
 
<template> 
  ... 
  <cdr-icon :use="`${iconUrl}#caret-right`" />
  ... 
</template> 
 
<script> 
// import the sprite so file-loader will do its magic 
@import iconUrl from '@rei/cdr-assets/dist/cdr-icons.svg`; 
 
export default { 
  ... 
  data() { 
    return { 
      iconUrl 
    }; 
  } 
} 
 
</script> 
``` 
 
### 2. Use individual icon components
 
**This method will bloat your HTML if using a lot of icons.** 
 
This is the easiest way to get an icon on your page. But use it carefully. 
 
Requirements: 
 
* Have `@rei/cdr-icon` installed 
 
#### Examples: 
 
``` 
<template>
  ...
    <icon-caret-right />
    <icon-clock />
  ...
</template>

<script>
import { IconCaretRight, IconClock } from '@rei/cdr-icon';

...
  components: {
    IconCaretRight,
    IconClock
  }
...

</script>
``` 
 
### 3. Use non cedar svg
 
**This method will bloat your HTML if using a lot of icons.** 
 
`cdr-icon` is simply an svg (with some default attributes set -- mostly for a11y and styling) and a slot. Any svg markup can go inside of it. Any attributes added will simply override the defaults.
 
Requirements: 
 
None, but you might find the example below helpful. 
 
#### Examples: 
 
``` 
<template> 
  ... 
  <cdr-icon viewBox="0 0 30 30">
    <title>My icon</title>
    <path d="M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z"/>
  </cdr-icon> 
  ... 
</template> 
 
<script> 
@import { CdrIcon } from '@rei/cdr-icon'; 
 
...
  components: {
    CdrIcon
  }
...
 
</script> 
```