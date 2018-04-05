# <span class="display-name">CdrIcon</span>

## 3 ways to use icons

`cdr-icon` can support 3 different ways of getting svg icons onto your page.

### 1. SVG Sprite

Slightly more work, but offers the best performance when lots of icons will be used.

Requires:

* `cdr-icons.svg` from `@rei/cdr-assets`
* `file-loader` to get url or `raw-loader` to inline (if using webpack)
* `svgxuse` polyfill (included somewhere on page or in your bundle)
