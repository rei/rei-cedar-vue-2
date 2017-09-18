### Modifiers

Modifiers can be combined 1 from each grouping.

{secondary} | {compact} | {block, fixed, responsive} **OR** link

Responsive makes the button full width and block @ sm breakpoint.

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

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
<cdr-button modifier="secondary">Secondary</cdr-button>
```

#### Link Modifier

```
<cdr-button modifier="link">Link</cdr-button>
```

#### Small Modifier

```
<cdr-button modifier="sm">Default</cdr-button>
```

#### Extra Small Modifier

```
<cdr-button modifier="xs">Default</cdr-button>
```

### Block Modifier

```
<cdr-button modifier="block">Default</cdr-button>
```
