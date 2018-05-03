# <span class="display-name">CdrButton</span>

## <span class="usage">Usage Tips</span>

### <span class="full-width">Full Width<span>

The full-width prop can be combined with static-size to create, for instance, a small button that is 100% wide.

`<cdr-button :static-size="small" :full-width="true">Small Full Width Button</cdr-button>`

Unlike some of the other sizing props, fullWidth can be used together with CTA style modifiers.

### <span class="static-size">Resoponsive Size<span>

CdrButton has responsive classes that leverage static sizes {`small`, `medium`, `large`} against set breakpoints {`extra-small`, `small`, `medium`, `large`}. This prop accepts an Array of class names and defaults to `[]`. Class names are formated as buttonSize@breakpoint.

`<cdr-button :responsive-size="['large@extra-small']">Responsive Button</cdr-button>`

Can be combined with static-size and full-width, though responsive size will take precedence because of CSS cascade.

### <span class="style-modifiers">Style Modifiers<span>

Syle modifiers will change the look of a button from the default. Accepted values are {`secondary`, `cta-brand`, `cta-light`, `cta-dark`, `cta-sale`}.

#### <span class="secondary">Secondary Buttons</span>

Secondary buttons can be combined with staticSize, full-width, and responsiveSize the same way the default button styles work.

`<cdr-button :static-size="small" :style-modifiers="['secondary']">A small secondary styled button</cdr-button>`

#### <span class="cta-butons">CTA Buttons</span>

CTA buttons are more strict about styling, and cannot be combined with staticSize and responsiveSize. CTA buttons are basically always staticSize: large, though they will also work with the fullWidth prop. Padding and text size do not scale. The various CTA classes change colors.

`<cdr-button :style-modifiers="['cta-sale']" :full-width="true">CTA Button Sale</cdr-button>`

## <span class="ada">Accessibility</span>

Since CdrButton will render a button, or an anchor that looks like a button, it will have the correct ARIA context by default. 