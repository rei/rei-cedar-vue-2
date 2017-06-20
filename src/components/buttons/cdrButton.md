### Modifiers

Modifiers can be combined 1 from each grouping.

{alternate, secondary, secondary-alternate} | {small, extra-small} | {block, fixed} **OR** link

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

### Examples

```
function log() {
    console.log('Clicked!');
}

<div>
    <p>Default with Click:</p>
    <cdr-button :on-click="log">Click Me</cdr-button>

    <p>Alternate:</p>
    <cdr-button modifier="alternate">Alternate</cdr-button>

    <p>Secondary:</p>
    <cdr-button modifier="secondary">Secondary</cdr-button>

    <p>Secondary-alternate:</p>
    <div class="cdr-bg--dark-20" style="padding:10px;">
        <cdr-button modifier="secondary-alternate">Secondary-alternate</cdr-button>
    </div>

    <p>Link:</p>
    <cdr-button modifier="link">Link</cdr-button>
</div>
```