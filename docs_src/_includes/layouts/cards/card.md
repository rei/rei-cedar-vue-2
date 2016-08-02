A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Root Example

Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease.

<div class="cedar-example">
    <cedar-card>
        <cedar-card-image-cap-top path="http://placehold.it/320x150" alt="Example image"></cedar-card-image-cap-top>
        <cedar-card-block>
            <h4> cedar-card component </h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </cedar-card-block>
    </cedar-card>
</div>

{% highlight html %}
<cedar-card>
    <cedar-card-image-cap-top path="img-path" alt="context"></cedar-card-image-cap-top>
    <cedar-card-block><p>Some copy</p></cedar-card-block>
</cedar-card>
{% endhighlight %}


 For example, if your card has no flush content like images, feel free to put the `.card-block` class on the `.card` element to consolidate your markup.
<div class="cedar-example">
    <cedar-card spacing="card-block">
        <h4>Card</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary">Button</button>
    </cedar-card>
</div>

{% highlight html %}
 <cedar-card spacing="card-block">
 </cedar-card>
{% endhighlight %}


### Linked Card

When linking an entire card, be sure no other actionable items are nested within the parent structure.

<div class="cedar-example" id="this-example">
<a href="#this-example" class ="card" riot-tag="cedar-card" data-example-id="link-contnet-card" >
    <cedar-card-image-cap-top alt="Example image" path="http://placehold.it/320x150" ></cedar-card-image-cap-top>
    <cedar-card-block>
        <h4> Heading </h4>
        <p>Copy.</p>
    </cedar-card-block>
</a>
</div>
{% highlight html %}
 <a href="#this-example" riot-tag="cedar-card"></a>
{% endhighlight %}
## Content within cards

Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.

<div class="cedar-example" data-example-id="content-in-content-card">
    <cedar-card>
        <cedar-card-image-cap-top alt="Example image" path="http://placehold.it/320x150" ></cedar-card-image-cap-top>
        {% include /markup-templates/list-group/list-group-filter.html %}
        <cedar-card-block align="text-xs-center">
            {% include /markup-templates/lists/inline.html param="inline-featured" %}
        </cedar-card-block>
    </cedar-card>
</div>
{% highlight html %}
<cedar-card>
    <cedar-card-image-cap-top path="img-path" alt="context"></cedar-card-image-cap-top>
    content not in card-block
    <cedar-card-block align="text-xs-center">
        content within card-block and centered
    </cedar-card-block>
</cedar-card>
{% endhighlight %}

## Sizing

Constrain the width of a card via grid classes.

<div class="cedar-example">
    <div class="row" data-example-id="card-in-grid">
        <div class="col-sm-6">
            <cedar-card>
                <cedar-card-image-cap-top alt="Example image" path="http://placehold.it/320x150" ></cedar-card-image-cap-top>
                <cedar-card-block>
                    <h4> cedar-card component </h4>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-6">
            <cedar-card>
                <cedar-card-image-cap-top alt="Example image" path="http://placehold.it/320x150" ></cedar-card-image-cap-top>
                <cedar-card-block>
                    <h4> cedar-card component </h4>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </cedar-card-block>
            </cedar-card>
      </div>
    </div>
</div>
{% highlight html %}
    <div class="row">
      <div class="col-sm-12">
        <cedar-card></cedar-card>
      </div>
    </div>
{% endhighlight %}

## Text alignment

You can quickly change the text alignment of any card—in its entirety or specific parts—with our [text align classes]({{ site.baseurl }}/components/utilities/#text-alignment).
<div class="cedar-example">
    <div class="row">
        <div class="col-xs-6">
            <cedar-card spacing="card-block" align="text-xs-center" data-example-id="card-text-xs-center">
                <h4> cedar-card component </h4>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </cedar-card>
        </div>
         <div class="col-xs-6">
             <cedar-card spacing="card-block" align="text-xs-right" data-example-id="card-text-xs-right">
                <h4> cedar-card component </h4>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </cedar-card>
        </div>
    </div>
</div>

{% highlight html %}
<cedar-card spacing='card-block' align="text-xs-center"></cedar-card>
...
<cedar-card spacing='card-block' align="text-xs-right"></cedar-card>
{% endhighlight %}


## Header and footer

Add an optional header and/or footer within a card.
<div class="cedar-example">
    <cedar-card>
        <cedar-card-header >
            <div class="media">
                <div class="media-left">
                    <img src="http://placehold.it/50x50" alt="Card image cap" class="img-circle">
                </div>
                <div class="media-body">
                    <h5 class="media-heading">Title</h5>
                    <p>ancillary text</p>
                </div>
            </div>
        </cedar-card-header>
        <cedar-card-block>
            <h4> cedar-card component </h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button class="btn btn-primary">Button</button>
        </cedar-card-block>
        <cedar-card-footer>
            2 days ago
        </cedar-card-footer>
    </cedar-card>
</div>
{% highlight html %}
<cedar-card>
        <cedar-card-header ></cedar-card-header>
        <cedar-card-block></cedar-card-block>
        <cedar-card-footer></cedar-card-footer>
</cedar-card>
{% endhighlight %}
## Image caps

Similar to headers and footers, cards include top and bottom image caps. when using the `.card-content` variant be sure to add the extra class of `.card-img` , `.card-img-top` , or `.card-img-bottom` to apply proper border radious dispaly.

### Note
The cedar-card-image-cap classes utilizes the media-frame classes with the following defaults set

`ratio: 3x4`

`position: center`

`orientaion: portrait`

this enables normal usage to only require the deffinition of the path and alt description values.
to reset any of these defaults pass the new value with the tag
{% highlight html %}
   <cedar-card-image-cap-top
    position="left"
    orientation="landscape"
    ratio="ratio-9-16"
    alt="Example image"
    path="http://placehold.it/320x150"
    >
{% endhighlight %}

<div class="cedar-example">
    <div class="row">
        <div class="col-sm-6">
            <cedar-card>
                <cedar-card-image-cap-top
                position="left"
                orientation="landscape"
                ratio="ratio-9-16"
                alt="Example image"
                path="http://placehold.it/320x150"
                >
                </cedar-card-image-cap-top>
                <cedar-card-block>
                    <h4> cedar-card component </h4>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </cedar-card-block>
            </cedar-card>
        </div>
         <div class="col-sm-6">
             <cedar-card>
                <cedar-card-block>
                    <h4> cedar-card component </h4>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </cedar-card-block>
                <cedar-card-image-cap-bottom
                alt="Example image"
                path='http://placehold.it/320x150'
                >
                </cedar-card-image-cap-bottom>
            </cedar-card>
        </div>
    </div>
</div>

{% highlight html %}
...
<cedar-card-image-cap-top></cedar-card-image-cap-top>
...

...
<cedar-card-image-cap-bottom></cedar-card-image-cap-bottom>
...
{% endhighlight %}

## Image overlays

Turn an image into a card background and overlay your card's text. To achive an accessible result, be sure to also add a background variant that is in line with the image color.
<div class="cedar-example">
    <cedar-card theme='card-dark-1'>
        <cedar-card-image-cap path="http://www.rei.com/content/landing-pages/lets-camp/img/mark/lead.jpg" alt="Text overlay cedar-card-image-cap component example" ></cedar-card-image-cap>
        <cedar-card-block overlay="true">
            <h4> cedar-card component </h4>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button class="btn btn-primary">Button</button>
        </cedar-card-block>
    </cedar-card>
</div>
{% highlight html %}
<div class="card card-content card-dark-1">
    <div class="card-img img-frame ratio-3-4 portrait center"> <img src="..." alt="example"> </div>
    <div class="card-img-overlay card-block"></div>
</div>
{% endhighlight %}

## Background variants

Cards include their own variant data attributes for quickly changing the `background-color` and `border-color` of a card. **The card variant uses contrast to determine if the foreground color should be black or white .**
pass any of the following to the `theme` attribute
{% highlight html %}
<cedar-card theme='card-light-1'>
{% endhighlight %}
<div class="cedar-example">
    <div class="row" data-example-id="card-background-variants">
        <div class="col-sm-3">
            <cedar-card theme='card-light-1'>
                <cedar-card-block><p>card-light-1</p></cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-3">
            <cedar-card theme="card-light-2">
                <cedar-card-block><p>card-light-2</p></cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-3">
              <cedar-card theme="card-medium-1">
                <cedar-card-block><p>card-medium-1</p></cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-3">
            <cedar-card theme="card-medium-2">
                <cedar-card-block><p>card-medium-2</p></cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-3">
            <cedar-card theme="card-light-3">
                <cedar-card-block><p>card-light-3</p></cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-3">
            <cedar-card theme="card-dark-1">
                <cedar-card-block><p>card-dark-1</p></cedar-card-block>
            </cedar-card>
        </div>
        <div class="col-sm-3">
            <cedar-card theme="card-dark-2">
                <cedar-card-block><p>card-dark-2</p></cedar-card-block>
            </cedar-card>
        </div>
    </div>
</div>

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
