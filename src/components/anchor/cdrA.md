### Modifiers

Modifiers can be combined 1 from each grouping. 

{contrast, overlay, standalone} **OR** button

A modifier list that contains 'button' exposes the same modifiers as cdrButton and the other modifiers shouldn't be combined with it.

### Examples

```
<div>
    <p>Default:</p>
    <cdr-a href="https://www.rei.com/">An example link</cdr-a>

    <p>Contrast:</p>
    <div class="cdr-bg--dark-20">
        <cdr-a modifier="contrast" href="#example-contrast"> An example contrast link</cdr-a>
    </div>

    <p>Overlay:</p>
    <div class="cdr-bg--dark-20">
        <cdr-a modifier="overlay" href="#example-overlay"> An example overlay link</cdr-a>
    </div>

    <p>Standalone:</p>
    <div>
        <cdr-a modifier="standalone" href="https://www.rei.com/">An example standalone link</cdr-a>
    </div>

    <p>Button:</p>
    <cdr-a modifier="button" href="https://www.rei.com/">Link as button</cdr-a>
</div>
```
