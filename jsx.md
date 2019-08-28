JSX & Cedar
------------

Cedar component templates are currently written in JSX to allow us to export a tree-shakeable ES module build. There is currently a lack of support for building `.vue` single file components as ES modules (see https://github.com/rollup/rollup/issues/2497 and https://github.com/vuejs/vue-component-compiler/issues/80 and https://github.com/vuejs/vue-loader/issues/1234). 

## JSX Tips

See [@vue/jsx](https://github.com/vuejs/jsx) for which directives are available in the components. Note that `v-show` is available in JSX by default.

props are bound with `{}` instead of `""`, and you need to use `this`
```
<div :something="whatever" /> // .vue
<div something={this.whatever} /> // .jsx
```

pass through $attrs/$listeners:
```
{ ...{ attrs: this.$attrs, on: this.$listeners } }
```

pass vars/events into event handlers:
```
onChange={e => this.updateValue(someVariable, e)}
```

magic event handler options:
```
vOn:keydown_up_prevent={this.handleUpArrowNav}
```

passing an object:
```
style={ { height: this.height } }
```

render slots:
```
{this.$slots.default} // default slot

{this.$slots.foobar} // named slot
```

conditionally render element:
```
<div>
  {
    this.showThing && <thing />
  }
</div>
```

render slot content or default:
```
<div>
  {
    this.$slots.thing || <thing />
  }
</div>
```

eslint disable inside jsx:
```
{/* eslint-disable-next-line */}
```

iterate over an array:
```
{this.someArray.map(thing => (
    <div key={thing.text}>
      { thing.text }
    </div>
))}
```

## CSS modules

import class helper as well as style module:
```
import clsx from 'clsx';
import style from './styles/CdrComponent.scss';
```

Add `style` to data object (for buildClass to use):
```
data() {
  return {
    style,
  };
},
```

use clsx to add styles:
```
class={clsx(
  this.style['foo-bar'],
  'global-style'
  { current: something === value },
)}
```
