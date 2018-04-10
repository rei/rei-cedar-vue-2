#### Examples:

Inlining the sprite (recommended)

(needs to be available on any page where icons are used so it's best to do it at the base layout/index)
```
// Base view template (assuming .vue and vue-router)
<template>
  <div id="main">
    <cdr-icon :raw="icons"/>

    <router-view></router-view>
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
// import the sprite so file-loader will do its magic
@import icons from '@rei/cdr-assets/dist/cdr-icons.svg`;

export default {
  ...
  data() {
    return {
      icons
    };
  }
}

</script>
```

### 2. Inline from standard REI icons

**This method will bloat your HTML if using a lot of icons.**

This is the easiest way to get an icon on your page. But use it carefully.

Requirements:

* Have `@rei/cdr-assets` installed

#### Examples:

```
<cdr-icon name="caret-right"/>
```

### 3. Inline from external svg file

**This method will bloat your HTML if using a lot of icons.**

This is so you can include icons from outside of the standard set but still benefit from our classes/a11y that is built in. You might consider making a symbol sprite for your icons if you have to use a lot and then using method 1 above.

Requirements:

None, but you might find the example below helpful.

#### Examples:

This example assumes you have raw-loader (or something similar) set up
```
//  A .vue file

<template>
  ...
  <cdr-icon raw="icon"/>
  ...
</template>

<script>
// import the svg so raw-loader will do its magic
@import icon from 'path/to/your-icon.svg`;

export default {
  ...
  data() {
    return {
      icon
    };
  }
}

</script>
```
