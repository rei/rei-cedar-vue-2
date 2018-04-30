# <span class="display-name">CdrButton</span>

## <span class="props">Props</span>

### <span class="el">el<span>

CdrButton can be rendered as a button (default), or as an anchor styled like a button. Passing 'a' to the 'el' prop will render an anchor instead of a button.

`<cdr-button :el="a" href="https://google.com">Google</cdr-button>`

### <span class="type">Type<span>

Button type attribute. Type attribute will not render on an anchor. Accepted values are {`button`, `submit`, `reset`}.

`<cdr-button :type="submit">Submit</cdr-button>`

### <span class="static-size">Static Size<span>

CdrButton has three basic sizes {`small`, `medium`, `large`} that scale padding and text size. Medium is the default.

`<cdr-button :static-size="large">Large Button</cdr-button>`

### <span class="full-width">Full Width<span>

Defaults to false. Passing `true` will render a button that has width: 100%.

`<cdr-button :static-size="large" :full-width="true">Full Width Button</cdr-button>`

The full-width prop can be combined with static-size to create, for instance, a small button that is 100% wide.

`<cdr-button :static-size="small" :full-width="true">Small Full Width Button</cdr-button>`

### <span class="static-size">Resoponsive Size<span>

CdrButton has responsive classes that leverage static size {`small`, `medium`, `large`} against set breakpoints {`extra-small`, `small`, `medium`, `large`}. This prop accepts an Array of class names and defaults to `[]`.

`<cdr-button :responsive-size="['large@extra-small']">Responsive Button</cdr-button>`

Can be combined with static-size and full-width, though responsive size will take precedence because of CSS cascade.

### <span class="static-size">Style Modifiers<span>

Syle modifiers will change the look of a button. Accepted values are {`secondary`, `cta-brand`, `cta-light`, `cta-dark`, `cta-sale`}.

`<cdr-button :style-modifiers="['cta-sale']">CTA Button Sale</cdr-button>`

CTA buttons have a sepcific styling, and can only be combined with the full-width prop. CTA buttons will ignore static-size and responsive-size props.
