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

<cdr-button size="sm" :on-click="log">Default</cdr-button>
```

#### Extra Small Modifier

```
function log() {
    console.log('Clicked!');
}

<cdr-button size="xs" :on-click="log">Default</cdr-button>
```

### Block Modifier

```
function log() {
    console.log('Clicked!');
}

<cdr-button modifier="block"  :on-click="log">Default</cdr-button>
```
