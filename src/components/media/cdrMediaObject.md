Used for grouping buttons. Buttons are full width at smallest breakpoint.

### Modifiers
add 
{top, right,bottom, overlay, block, stretch}
<table class="table-0-31">
<thead class="tableHead-0-32">
<tr>
<th class="cellHeading-0-34">Name</th>
<th class="cellHeading-0-34 cellDesc-0-35">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="cell-0-33"><span class="name-0-42"><code class="code-0-44">top</code></span></td>
<td class="cell-0-33 cellDesc-0-35">
<div><p class="p-0-55 para-0-47">Media figure displays above Media body</p></div>
</td>
</tr>
<tr>
<td class="cell-0-33"><span class="name-0-42"><code class="code-0-44">right</code></span></td>
<td class="cell-0-33 cellDesc-0-35">
<div><p class="p-0-55 para-0-47">Media figure displays to the right of the Media body</p></div>
</td>
</tr>
<tr>
<td class="cell-0-33"><span class="name-0-42"><code class="code-0-44">bottom</code></span></td>
<td class="cell-0-33 cellDesc-0-35">
<div><p class="p-0-55 para-0-47">Media figure displays below the Media body</p></div>
</td>
</tr>
<tr>
<td class="cell-0-33"><span class="name-0-42"><code class="code-0-44">overlay</code></span></td>
<td class="cell-0-33 cellDesc-0-35">
<div><p class="p-0-55 para-0-47">Media Body overlays the Media Frame</p></div>
</td>
</tr>
<tr>
<td class="cell-0-33"><span class="name-0-42"><code class="code-0-44">stretch</code></span></td>
<td class="cell-0-33 cellDesc-0-35">
<div><p class="p-0-55 para-0-47">The Media Frame extends 16px left and right from the parent container. This is intended to be used with the top or bottom modifier.</p></div>
</td>
</tr>
<tr>
<td class="cell-0-33"><span class="name-0-42"><code class="code-0-44">block</code></span></td>
<td class="cell-0-33 cellDesc-0-35">
<div><p class="p-0-55 para-0-47">The Media Frame extends 16px left and right from the parent container. and an additional 16px left and right value wraps the media object. This is intended to be used with the top or bottom modifier.</p></div>
</td>
</tr>
</tbody>
</table>

### Examples

#### Media objects aligning media frames
```
  <cdr-media-object
    media-figure="http://placehold.it/350x150"
    media-url="http://rei.com"
    media-title="Backpacking Tents: How to Choose"
    level="2"
    media-img-shape="responsive"
    modifier="top stretch">
    <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus finibus. Proin egestas volutpat tortor, non tincidunt quam accumsan et. Donec eleifend condimentum consectetur. Ut a lorem cursus, fermentum eros in, commodo ex. Nulla fringilla mi ex, eu tempus turpis molestie vitae. Duis eget tellus malesuada, iaculis ipsum non, vehicula sapien. Mauris tincidunt sem at turpis dapibus, nec viverra arcu condimentum. Donec felis nulla, blandit mollis tristique ut, commodo in sapien.</p>
  </cdr-media-object>
```
```
  <cdr-media-object
    media-figure="http://placehold.it/350x150"
    media-url="http://rei.com"
    media-title="Backpacking Tents: How to Choose"
    level="2"
    media-img-shape="responsive"
    modifier="bottom block">
  </cdr-media-object>
```
```
  <cdr-media-object
    media-figure="http://placehold.it/150x150"
    level="3"
    media-title="Tiger Mountain Loop">
    <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p>
  </cdr-media-object>
```
```
  <cdr-media-object
    media-figure="http://placehold.it/50x50"
    media-img-shape="circle"
    level="3"
    media-title="Jerry Stritzke">
    <p>Issaquah Alps, WA</p>
  </cdr-media-object>
```
```
  <cdr-media-object
    media-figure="http://placehold.it/150x150"
    level="3"
    media-title="Tiger Mountain Loop"
    modifier="right">
    <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p>
  </cdr-media-object>
```
#### Media Object overlay
```
  <cdr-media-object
    media-figure="http://placehold.it/350x150/212121/222222"
    media-url="http://rei.com"
    media-title="Backpacking Tents: How to Choose"
    level="2"
    media-img-shape="responsive"
    modifier="top stretch overlay">
    <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus finibus. Proin egestas volutpat tortor, non tincidunt quam accumsan et. Donec eleifend condimentum consectetur. Ut a lorem cursus, fermentum eros in, commodo ex. Nulla fringilla mi ex, eu tempus turpis molestie vitae. Duis eget tellus malesuada, iaculis ipsum non, vehicula sapien. Mauris tincidunt sem at turpis dapibus, nec viverra arcu condimentum. Donec felis nulla, blandit mollis tristique ut, commodo in sapien.</p>
  </cdr-media-object>
```
#### Media Figure ratio
```
 <cdr-media-object
    media-figure="http://placehold.it/350x150"
    media-url="http://rei.com"
    media-title="Backpacking Tents: How to Choose"
    level="2"
    media-img-shape="responsive thumbnail"
    ratio="16-9"
    modifier="top stretch">
    <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus finibus. Proin egestas volutpat tortor, non tincidunt quam accumsan et. Donec eleifend condimentum consectetur. Ut a lorem cursus, fermentum eros in, commodo ex. Nulla fringilla mi ex, eu tempus turpis molestie vitae. Duis eget tellus malesuada, iaculis ipsum non, vehicula sapien. Mauris tincidunt sem at turpis dapibus, nec viverra arcu condimentum. Donec felis nulla, blandit mollis tristique ut, commodo in sapien.</p>
  </cdr-media-object>
```
