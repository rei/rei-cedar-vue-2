### Modifiers

Modifiers can be combined 1 from each grouping.

{secondary} | {compact} | {block, fixed} **OR** link

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

#### Compact Modifier

```
<cdr-button modifier="compact">Default</cdr-button>
```

### Block Modifier

```
<cdr-button modifier="block">Default</cdr-button>
```
