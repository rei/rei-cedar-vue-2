<p>A <strong>Tile</strong> is a flexible and extensible content container.</p>
<p>Tiles require a small amount of markup and classes to provide you with as much control as possible.</p>
<p>Tiles support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the tile you need.</p>
<h2>Examples</h2>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Tile orginization example</h3>
    </section>
    <section class="card-block cedar-example">
        <section class="tile">
            <div class="media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            <p>Don't wrap content within a tile-block when the content needs to span edge to edge.</p>
                <div class="tile-block text-xs-center">
                <p>The tile-block class provides padding to nested content</p>
                </div>
        </section>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboxroot-example"
            data-toggle="collapse"
            data-target="#root-example"
        >
        <label for="checkboxroot-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="root-example" data-theme="light-20">
    {% highlight html %}
    <section class="tile">
        <div class="media-frame ratio-3-4 portrait center">
            <img src="http://placehold.it/320x150" alt="Example image">
        </div>
        content out side of a block
        <div class="tile-block text-xs-center">
            content within a tile-block
        </div>
    </section>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Groups within tiles</h3>
    </section>
    <section class="card-block">Placeing a group of wells within a tile.</section>
    <section class="card-block cedar-example">
        <section class="tile">
            <section class="media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </section>
            <div class="group group-display-fixed">
                <div class="col-xs-4">
                    <section class="well">
                        <div class="media-frame ratio-3-4 portrait center">
                            <img src="http://placehold.it/320x150" alt="Example image">
                        </div>
                    </section>
                </div>
                <div class="col-xs-4">
                    <section class="well">
                        <div class="media-frame ratio-3-4 portrait center">
                            <img src="http://placehold.it/320x150" alt="Example image">
                        </div>
                    </section>
                </div>
                <div class="col-xs-4">
                    <section class="well">
                        <div class="media-frame ratio-3-4 portrait center">
                            <img src="http://placehold.it/320x150" alt="Example image">
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboxcard-group-example"
            data-toggle="collapse"
            data-target="#tile-group-example"
        >
        <label for="checkboxcard-group-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="tile-group-example" data-theme="light-20">
    {% highlight html %}
    <section class="tile">
            <section class="media-frame"></section>
            <div class="group group-display-fixed">
                <div class="col-xs-4">
                    <section class="well"></section>
                </div>
                <div class="col-xs-4">
                    <section class="well"></section>
                </div>
                <div class="col-xs-4">
                    <section class="well"></section>
                </div>
            </div>
    </section>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Linked Tile</h3>
    </section>
    <section class="card-block"><p>When linking an entire tile, be sure no other actionable items are nested within the parent structure.</p></section>
    <section class="card-block cedar-example">
        <a href="#tile-as-an-anchor" class="tile" id="tile-as-an-anchor">
            <div class="media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            <div class="tile-block">
                <h4>Heading</h4>
                <p>Copy.</p>
            </div>
        </a>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboxcard-link-example"
            data-toggle="collapse"
            data-target="#tile-link-example"
        >
        <label for="checkboxcard-link-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="tile-link-example" data-theme="light-20">
    {% highlight html %}
    <a href="#tile-as-an-anchor" class="tile" id="tile-as-an-anchor">
        <div class="media-frame ratio-3-4 portrait center">
            <img src="http://placehold.it/320x150" alt="Example image">
        </div>
        <div class="tile-block">
            <h4>Heading</h4>
            <p>Copy.</p>
        </div>
    </a>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Image overlays</h3>
    </section>
    <section class="card-block">
        <p>Turn an image into a card background and overlay your card's text. To achive an accessible result, be sure to pass a <strong>theme</strong> value that is in line with the image color.</p>
    </section>
    <section class="card-block cedar-example">
        <section class="tile" data-theme="dark-10">
            <div class="media-frame ratio-3-4 portrait center">
                <img src="http://www.rei.com/content/landing-pages/lets-camp/img/mark/lead.jpg" alt="Text overlay cedar-card-image-cap component example">
            </div>
            <div class="tile-block media-overlay">
                <h4>Cedar tile</h4>
                <p>Some quick example text to build on the tile title and make up the bulk of the tiles content.</p>
                <button class="btn btn-primary">Button</button>
            </div>
        </section>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboximage-overlay-example"
            data-toggle="collapse"
            data-target="#image-overlay-example"
        >
        <label for="checkboximage-overlay-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="image-overlay-example" data-theme="light-20">
    {% highlight html %}
    <section class="tile" data-theme="dark-10">
        <div class="media-frame ratio-3-4 portrait center">
            <img src="img-path" alt="context">
        </div>
        <div class="tile-block media-overlay">
        </div>
    </section>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Theming a card</h3></section>
    <section class="card-block"><p>Tiles can include a theme data attribute for quickly changing the <strong>background-color</strong> and <strong>color</strong>.</p></section>
    <section class="card-block cedar-example">
        <div class="group group-display-fixed" data-example-id="card-background-variants">
            <div class="col-sm-3">
                <section class="tile" data-theme='light-10'>
                    <div class="tile-block">
                        <p>light-10</p>
                    </div>
                </section>
            </div>
            <div class="col-sm-3">
                <section class="tile" data-theme='light-20'>
                    <div class="tile-block">
                        <p>light-20</p>
                    </div>
                </section>
            </div>
            <div class="col-sm-3">
                <section class="tile" data-theme='light-30'>
                    <div class="tile-block">
                        <p>light-30</p>
                    </div>
                </section>
            </div>
            <div class="col-sm-3">
                <section class="tile" data-theme='medium-10'>
                    <div class="tile-block">
                        <p>medium-10</p>
                    </div>
                </section>
            </div>
            <div class="col-sm-3">
                <section class="tile" data-theme='medium-20'>
                    <div class="tile-block">
                        <p>medium-20</p>
                    </div>
                </section>
            </div>
            <div class="col-sm-3">
                <section class="tile" data-theme='dark-10'>
                    <div class="tile-block">
                        <p>dark-10</p>
                    </div>
                </section>
            </div>
            <div class="col-sm-3">
                <section class="tile" data-theme='dark-20'>
                    <div class="tile-block">
                        <p>dark-20</p>
                    </div>
                </section>
            </div>
        </div>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboximage-theme-example"
            data-toggle="collapse"
            data-target="#image-theme-example"
        >
        <label for="checkboximage-theme-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="image-theme-example" data-theme="light-20">
    {% highlight html %}
    <section class="tile" data-theme='light-20'>
        <div class="tile-block"></div>
    </section>
    {% endhighlight %}
    </div>
</article>

