### Modifiers

Modifiers can be combined 1 from each grouping.

{secondary} | {compact} | {block, fixed} **OR** link

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

### Standard Examples

```
function log() {
    console.log('Clicked!');
}

<div>
    <p>Default with Click:</p>
    <cdr-button :on-click="log">Click Me</cdr-button>

    <p>Secondary:</p>
    <cdr-button modifier="secondary">Secondary</cdr-button>

    <p>Link:</p>
    <cdr-button modifier="link">Link</cdr-button>
</div>
```
### compact Examples
```

<div>
    <p>Default:</p>
    <cdr-button modifier="compact">Click Me</cdr-button>

    <p>Secondary:</p>
    <cdr-button modifier="secondary compact">Secondary</cdr-button>
</div>
```
### block Examples
```

<div>
    <p>Default:</p>
    <cdr-button modifier="block">Click Me</cdr-button>

    <p>Secondary:</p>
    <cdr-button modifier="secondary block">Secondary</cdr-button>
</div>
```
