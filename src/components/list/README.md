## Usage

 By default the `cdr-list` component renders as an unordered and undecorated "bare" list.
To use an ordered list pass `ol` to the tag property.
 ```
  <cdr-list tag="ol">
    <li>..</li>
  </cdr-list>
```
Note that the tag itself does not determine display.

### Variants
 In addition to our bare list the following modifiers are provided which accommodate our standard text list options.
* unordered
* ordered
* compact
* inline

#### Unordered
The unordered modifier adds a bullet decorator to child list items and a `en-dash` decorator to grand child list items. this variant can be used on both `ul` or `ol` list types.
```
  <cdr-list modifier="unordered">
```

#### ordered
The ordered modifier adds a numeric decorator to child list items and a `en-dash` decorator to grand child list items. this variant can be used on both `ul` or `ol` list types.
```
  <cdr-list
    tag="ol"
    modifier="ordered"
  >
```

#### Compact
The compact modifier reduces the vertical space between list items for non inline list variants. For inline variants the compact modifier reduces the horizontal space between list items.
```
  <cdr-list modifier="compact unordered">
```

#### Inline
The inline modifier is intended for generic or unordered list variants. In ether case this can be combined with compact to adjust the spacing of inline list variants.
```
    <cdr-list modifier="inline compact unordered">
```



## Accessibility
The `cdr-list` component has decoupled the semantic tags `ul` and `ol` from the visual presentation provided by our modifiers. 

This section is focused on sematic implementations of list. 

**Note** that it is perfectly valid to render a semantic ordered list `ol` as a visually non styled or bulleted list using our modifiers.
```
  <cdr-list tag="ol">
```

Use different types of `cdr-list` to group information according to its nature to provide orientation for users.

Unordered lists are used when the order of the items is not relevant. By default the `cdr-list` component will use the `ul` tag.

Individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists.

### Unordered list
The unordered list consists of one `<ul>` element and multiple list item `<li>` elements.

### Ordered list
The ordered list consists of one `<ol>` element and multiple list item `<li>` elements.

### Nested lists
Every `cdr-list` can be nested into another list. Assistive technology can easily inform users about the number of steps.
```
  <cdr-list>
    <li> Unordered list item text
      <cdr-list tag="ol">
        <li>Ordered list item text</li>
      </cdr-list>
    </li>
  </cdr-list>

```

## Installation

Placing the component into a your application is as simple as importing it:
```
npm i @rei/cdr-list
```

## Contributing
### Request an an enhancement
Join us on Slack at [#design-systems](https://rei.slack.com/messages/CA58YCGN4).