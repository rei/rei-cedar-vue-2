### Modifiers

Modifiers can be combined 1 from each grouping.

{secondary} | {sm,xs} | {block, fixed, responsive} **OR** link

Use of the 'link' modifier depends on including the css for cdrA.

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

Responsive makes the button full width and block @ sm breakpoint.

### Examples

#### Default

```
function log() {
    console.log('Clicked!');
}

<cdr-button :on-click="log">I have a click event</cdr-button>
```

#### Secondary

```
function log() {
    console.log('Clicked!');
}

<cdr-button modifier="secondary" :on-click="log">Secondary</cdr-button>
```

#### CTA Sale

```
<cdr-button modifier="cta-sale">Secondary</cdr-button>
```

#### Link Modifier

```
function log() {
    console.log('Clicked!');
}

<cdr-button modifier="link" :on-click="log">Link</cdr-button>
```

### Sizes and Shapes

#### Small Modifier

```
function log() {
    console.log('Clicked!');
}

<cdr-button modifier="sm" :on-click="log">Default</cdr-button>
```

#### Extra Small Modifier

```
function log() {
    console.log('Clicked!');
}

<cdr-button modifier="xs" :on-click="log">Default</cdr-button>
```

### Block Modifier

```
function log() {
    console.log('Clicked!');
}

<cdr-button modifier="block"  :on-click="log">Default</cdr-button>
```
