A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

If you're familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Root Example

Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease. For example, if your card has no flush content like images, feel free to put the `.card-block` class on the `.card` element to consolidate your markup.
<div class="cedar-example">
    <div class="card card-block text-xs-center" data-example-id="basic-card" >
        <div class="img-frame ratio-9-16 portrait center vertical-push">
            <img src="http://placehold.it/320x150" alt="Card image cap">
        </div>
        <h4>Card</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
</div>

{% highlight html %}
<div class="card card-block text-xs-center">
    <div class="img-frame ratio-9-16 portrait center vertical-push"><img src="..." alt="example img"></div>
    <p>Content.</p>
</div>
{% endhighlight %}


## Card Types

### Card Content

By adding the `.card-content` class to `.card` you can update the skin of the basic card to account for content cards, which are intended to display one complete thought in a grouping.

<div class="cedar-example">
    <div class="card card-content" data-example-id="basic-content-card" >
        <div class="card-img-top img-frame ratio-9-16 portrait center">
            <img src="http://placehold.it/320x150" alt="Card image cap">
        </div>
      <div class="card-block">
        <h4>Card content</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary">Button</button>
      </div>
    </div>
</div>

{% highlight html %}
<div class="card card-content">
    <div class="card-img-top img-frame ratio-9-16 portrait center">
        <img src="..." alt="example image">
    </div>
    <div class="card-block">
        <p>Content in card block.</p>
    </div>
</div>
{% endhighlight %}

### Linked Card

When linking an entire card, be sure no other actionable items are nested within the parent structure.
<div class="cedar-example" id="this-example">
    <div class="row">
        <div class="col-sm-6">
            <a class="card card-content" href="#this-example" data-example-id="link-contnet-card">
                <div class="card-img-top img-frame ratio-9-16 portrait center">
                    <img src="http://placehold.it/320x150" alt="Card image cap">
                </div>
                <div class="card-block">
                    <h4>Card Content</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
        <div class="col-sm-6">
            <a class="card card-tile" href="#this-example" data-example-id="link-tile-card">
                <div class="card-img-top img-frame ratio-9-16 portrait center">
                    <img src="http://placehold.it/320x150" alt="Card image cap">
                </div>
                <div class="card-block">
                    <h4>Card tile</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
    </div>
</div>

### Card Tile
By adding the `.card-tile` class to `.card` you can update the skin of the basic card to account for tile cards, which are intended to display one part of a group.
<div class="cedar-example">
    <div class="card card-tile" data-example-id="basic-tile-card">
        <div class="card-img-top img-frame ratio-9-16 portrait center">
            <img src="http://placehold.it/320x150" alt="Card image cap">
        </div>
        <div class="card-block">
            <h4>Card title</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-primary">Button</button>
        </div>
    </div>
</div>
{% highlight html %}
<div class="card card-tile">
  <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
{% endhighlight %}

## Content within cards

Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.

<div class="cedar-example">
    <div class="card card-content" data-example-id="content-in-content-card">
        <div class="card-img-top img-frame ratio-9-16 portrait center">
            <img src="http://placehold.it/320x150" alt="Card image cap">
        </div>
        {% include /markup-templates/list-group/list-group-filter.html %}
        <div class="card-block text-xs-center">
            {% include /markup-templates/lists/inline.html param="inline-featured" %}
        </div>
    </div>
</div>
{% highlight html %}
<div class="card card-content">
    <div class="card-img-top img-frame ratio-9-16 portrait center">
        <img src="http://placehold.it/320x150" alt="Card image cap">
    </div>
    <p>Content out of card-block</p>
    <div class="card-block text-xs-center">
    <p>Content in card-block and centered</p>
    </div>
</div>
{% endhighlight %}


## Sizing

Constrain the width of a card via grid classes.

<div class="cedar-example">
    <div class="row" data-example-id="card-in-grid">
      <div class="col-sm-6">
        <div class="card card-content card-block">
          <h3>Special title treatment</h3>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-primary">Button</button>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card card-content card-block">
          <h3>Special title treatment</h3>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
</div>
{% highlight html %}
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
        </div>
      </div>
    </div>
{% endhighlight %}


## Text alignment

You can quickly change the text alignment of any card—in its entirety or specific parts—with our [text align classes]({{ site.baseurl }}/components/utilities/#text-alignment).
<div class="cedar-example">

<div class="card card-tile card-block text-xs-center" data-example-id="card-text-xs-center" >
  <h4>Heading</h4>
  <p>Copy.</p>
  <button class="btn btn-primary">Button</button>
</div>

<div class="card card-tile card-block text-xs-right" data-example-id="card-text-xs-right">
  <h4>Heading</h4>
  <p>Copy.</p>
  <button class="btn btn-primary">Button</button>
</div>
</div>

{% highlight html %}
<div class="card card-tile card-block text-xs-center">
  <h4>Heading</h4>
  <p>Copy.</p>
  <button class="btn btn-primary">Button</button>
</div>

<div class="card card-tile card-block text-xs-right">
  <h4>Heading</h4>
  <p>Copy.</p>
  <button class="btn btn-primary">Button</button>
</div>
{% endhighlight %}


## Header and footer

Add an optional header and/or footer within a card.
<div class="cedar-example">
    <div class="card card-content" data-example-id="card-header-and-footer">
        <div class="card-header card-block">
            <div class="media">
                <div class="media-left">
                    <img src="http://placehold.it/50x50" alt="Card image cap" class="img-circle">
                </div>
                <div class="media-body">
                    <h5 class="media-heading">Title</h5>
                    <p>ancillary text</p>
                </div>
            </div>
        </div>
        <div class="card-block">
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-primary">Button</button>
        </div>
        <div class="card-footer card-block text-muted">
            2 days ago
        </div>
    </div>
</div>
{% highlight html %}
<div class="card card-content">
    <div class="card-header card-block">
    <p>content in header block</p>
    </div>
    <div class="card-block">
    <p>content in block</p>
    </div>
    <div class="card-footer card-block text-muted">
        <p>content in footer block</p>
    </div>
</div>
{% endhighlight %}

## Image caps

Similar to headers and footers, cards include top and bottom image caps. when using the `.card-content` variant be sure to add the extra class of `.card-img` , `.card-img-top` , or `.card-img-bottom` to apply proper border radious dispaly.
<div class="cedar-example">
<div class="row">
<div class="col-sm-6">
    <div class="card card-tile" data-example-id="card-tile-img-caps-top">
        <div class="card-img-top img-frame ratio-9-16 portrait center">
            <img src="http://placehold.it/320x150" alt="Card image cap">
        </div>
        <div class="card-block">
            <h4>Card title</h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card card-tile" data-example-id="card-tile-img-caps-bottom">
        <div class="card-block">
            <h4>Card title</h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <div class="icard-img-bottom img-frame ratio-9-16 portrait center">
            <img src="//lorempixel.com/300/160/nature" alt="Card image cap">
        </div>
    </div>
</div>
<div class="col-sm-6">
    <div class="card card-content" data-example-id="card-content-img-caps-top">
        <div class="card-img-top img-frame ratio-9-16 portrait center">
            <img src="//lorempixel.com/300/160/nature" alt="Card image cap">
        </div>
        <div class="card-block">
            <h4>Card title</h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card card-content" data-example-id="card-content-img-caps-bottom">
        <div class="card-block">
            <h4>Card title</h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <div class="card-img img-frame ratio-9-16 landscape center">
            <img src="//lorempixel.com/300/160/nature" alt="Card image cap">
        </div>
    </div>
</div>
</div>

</div>
{% highlight html %}
...
  <div class="card-img-top img-frame ratio-9-16 portrait center">
     <img src="..." alt="Card image cap">
  </div>
...

...
    <div class="card-img-bottom img-frame ratio-9-16 landscape center">
        <img src="..." alt="Card image cap">
    </div>
...
{% endhighlight %}

## Image overlays

Turn an image into a card background and overlay your card's text. To achive an accessible result, be sure to also add a background variant that is in line with the image color.
<div class="cedar-example">
    <div class="card card-content card-dark-1" data-example-id="card-img-overlay">
        <div class="card-img img-frame ratio-3-4 portrait center">
            <img src="//lorempixel.com/output/abstract-q-g-318-160-6.jpg" alt="Card image cap">
        </div>
        <div class="card-img-overlay card-block">
            <h4>Card title</h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>
{% highlight html %}
<div class="card card-content card-dark-1">
    <div class="card-img img-frame ratio-3-4 portrait center"> <img src="..." alt="example"> </div>
    <div class="card-img-overlay card-block"></div>
</div>
{% endhighlight %}

## Background variants

Cards include their own variant classes for quickly changing the `background-color` and `border-color` of a card. **The card variant uses contrast to determine if the foreground color should be black or white .**
<div class="cedar-example">
<div class="row" data-example-id="card-background-variants">
<div class="col-sm-3">
  <div class="card card-content card-light-1" >
      <div class="card-block">
        <p>card-light-1</p>
      </div>
    </div>
</div>
<div class="col-sm-3">
  <div class="card card-content card-light-2">
      <div class="card-block">
        <p>card-light-2</p>
      </div>
    </div>
</div>
<div class="col-sm-3">
  <div class="card card-content card-medium-1">
      <div class="card-block">
        <p>card-medium-1</p>
      </div>
    </div>
</div>
<div class="col-sm-3">
  <div class="card card-content card-medium-2">
      <div class="card-block">
        <p>card-medium-2</p>
      </div>
    </div>
</div>
<div class="col-sm-3">
  <div class="card card-content card-medium-3">
      <div class="card-block">
        <p>card-medium-3</p>
      </div>
    </div>
</div>
<div class="col-sm-3">
  <div class="card card-content card-dark-1">
      <div class="card-block">
        <p>card-dark-1</p>
      </div>
    </div>
</div>
<div class="col-sm-3">
  <div class="card card-content card-dark-2">
      <div class="card-block">
        <p>card-dark-2</p>
      </div>
    </div>
</div>
</div>

</div>
{% highlight html %}
<div class="card card-content card-light-1" >
    <div class="card-block">
        <p>card-light-1</p>
    </div>
</div>
{% endhighlight %}


<cedar-card isCardBlock="true"></cedar-card>
<cedar-card></cedar-card>
<cedar-card></cedar-card>
<cedar-card></cedar-card>



<script>
//riot.mount('cedar-card', { c: 'card-tile'})
</script>


<!--
## Groups

Use card groups to render cards as a single, attached element with equal width and height columns. By default, card groups use `display: table;` and `table-layout: fixed;` to achieve their uniform sizing. However, enabling [flexbox mode]({{ site.baseurl }}/getting-started/flexbox) can switch that to use `display: flex;` and provide the same effect.

Only applies to small devices and above.

{% highlight html %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endhighlight %}

## Decks

Need a set of equal width and height cards that aren't attached to one another? Use card decks. By default, card decks require two wrapping elements: `.card-deck-wrapper` and a `.card-deck`. We use table styles for the sizing and the gutters on `.card-deck`. The `.card-deck-wrapper` is used to negative margin out the `border-spacing` on the `.card-deck`.

Only applies to small devices and above.

**ProTip!** If you enable [flexbox mode]({{ site.baseurl }}/getting-started/flexbox/), you can remove the `.card-deck-wrapper`.

{% highlight html %}
<div class="card-deck-wrapper">
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

## Columns

Cards can be organized into [Masonry](http://masonry.desandro.com)-like columns with just CSS by wrapping them in `.card-columns`. Only applies to small devices and above.

**Heads up!** This is **not available in IE9 and below** as they have no support for the [`column-*` CSS properties](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_multi-column_layouts).

{% highlight html %}
<div class="card-columns">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px160/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title that wraps to a new line</h4>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px160/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card card-block card-inverse card-primary text-xs-center">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer>
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card card-block text-xs-center">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <div class="card">
    <img class="card-img" data-src="holder.js/100px260/" alt="Card image">
  </div>
  <div class="card card-block text-xs-right">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endhighlight %}
 -->
