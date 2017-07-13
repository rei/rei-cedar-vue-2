### Modifiers

Modifiers can be combined 1 from each grouping.

{secondary} | {condenced} | {block, fixed} **OR** link

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

### Examples

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
