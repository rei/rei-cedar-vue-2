<p>A <strong>card</strong> is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, theme colors, and powerful display options.</p>
<p>Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease.</p>
<p>Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.</p>
<h2>Examples</h2>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Card orginization</h3>
    </section>
    <section class="card-block"><p>A Card containing content witin the card components: cedar-card-image-cap-top, cedar-card and cedar-card-block.</p></section>
    <section class="card-block cedar-example">
        <article class="card" data-example-id="card-orginization">
            <section class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </section>
            {% include /markup-templates/list-group/list-group-filter.html %}
            <section class="card-block text-xs-center">
            {% include /markup-templates/lists/inline.html param="inline-featured" %}
            </section>
        </article>
    </section>
    
    <cedar-code-toggle></cedar-code-toggle>
    <script src="/riot/compiled-tags/cedar-code-toggle.js" type="riot/tag"></script>
    <script>
        var codeSampleString = '<article class="card">\n' +
            '<section class="card-media-top media-frame ratio-3-4 portrait center">\n' +
                '<img src="http://placehold.it/320x150" alt="Example image">\n' +
            '</section>\n' +
            'content out of card-block\n' +
            '<section class="card-block text-xs-center">\n' +
                'content within card-block\n' +
            '</section>\n' +
        '</article>';

        var opts = {
            dataTarget : '#card-orginization',
            id : 'checkbox-card-orginization',
            targetId : 'card-orginization',
            labelFor : 'checkbox-card-orginization',
            codeExample : codeSampleString
        };
        riot.mount('*', opts )
    </script>

</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Groups within cards</h3>
    </section>
    <section class="card-block">Placeing a group of tiles within a card.</section>
    <section class="card-block cedar-example">
        <article class="card" data-example-id="groups-within-cards">
            <section class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </section>
            <div class="group group-display-fixed">
                <div class="col-xs-4">
                    <section class="tile">
                        <div class="media-frame ratio-3-4 portrait center">
                            <img src="http://placehold.it/320x150" alt="Example image">
                        </div>
                    </section>
                </div>
                <div class="col-xs-4">
                    <section class="tile">
                        <div class="media-frame ratio-3-4 portrait center">
                            <img src="http://placehold.it/320x150" alt="Example image">
                        </div>
                    </section>
                </div>
                <div class="col-xs-4">
                    <section class="tile">
                        <div class="media-frame ratio-3-4 portrait center">
                            <img src="http://placehold.it/320x150" alt="Example image">
                        </div>
                    </section>
                </div>
            </div>
        </article>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkbox-groups-within-cards"
            data-toggle="collapse"
            data-target="#groups-within-cards"
        >
        <label for="checkbox-groups-within-cardse">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="groups-within-cards" data-theme="light-20">
    {% highlight html %}
    <article class="card">
        <section class="card-media-top"></section>
        <div class="group group-display-fixed">
            <div class="col-xs-4">
                <section class="tile"></section>
            </div>
            <div class="col-xs-4">
                <section class="tile"></section>
            </div>
            <div class="col-xs-4">
                <section class="tile"></section>
            </div>
        </div>
    </article>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Linked Card</h3>
    </section>
    <section class="card-block">
        <p>When linking an entire card, be sure no other actionable items are nested within the parent structure.</p>
    </section>
    <section class="card-block cedar-example">
        <a href="#anchored-card-example" class="card" id="anchored-card-example" data-example-id="linked-card">
            <section class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </section>
            <section class="card-block">
                <h4>Heading</h4>
                <p>Copy.</p>
            </section>
        </a>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkbox-linked-card"
            data-toggle="collapse"
            data-target="#linked-card"
        >
        <label for="checkbox-linked-card">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="linked-card" data-theme="light-20">
    {% highlight html %}
    <a href="#anchored-card-example" class="card">
        <section class="card-media-top media-frame ratio-3-4 portrait center">
            <img src="http://placehold.it/320x150" alt="Example image">
        </section>
        <section class="card-block">
            <h4>Heading</h4>
            <p>Copy.</p>
        </section>
    </a>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20">
        <h3 class="h4">Card image caps</h3>
    </section>
    <section class="card-block">
        <p>Using cedar-card-image-cap-top will allow a full blead media frame within a card that also provides a border-radius to the top left and right of the media.</p>
    </section>
    <section class="card-block cedar-example">
        <article class="card" data-example-id="card-image-caps">
            <img class="card-media-top img-responsive" src="http://placehold.it/320x150" alt="Example image">
            <section class="card-block">
                <h4>Cedar-card component</h4>
            </section>
            <img class="card-media-bottom img-responsive" src="http://placehold.it/320x150" alt="Example image">
        </article>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkbox-card-img-cap"
            data-toggle="collapse"
            data-target="#card-img-cap"
        >
        <label for="checkbox-card-img-cap">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="card-img-cap" data-theme="light-20">
    {% highlight html %}
    <article class="card">
        <img class="card-media-top img-responsive" />
        <section class="card-block"></section>
        <img class="card-media-bottom img-responsive" />
    </article>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Image overlays</h3></section>
    <section class="card-block"><p>Turn an image into a card background and overlay your card’s text. when an image will encompass the entirety of this container use the <code>.card-media</code> class to ensure the image will receive a border radius to all corners To achieve an accessible result, be sure to pass a <strong>theme</strong> value that is in line with the image color.</p>
   </section>
    <section class="card-block cedar-example">
        <article class="card" data-theme="dark-10" data-example-id="image-overlays">
            <section class="card-media media-frame ratio-3-4 portrait center">
                <img src="http://www.rei.com/content/landing-pages/lets-camp/img/mark/lead.jpg" alt="Text overlay cedar-card-image-cap component example">
            </section>
            <section class="card-block media-overlay">
                <h4>Cedar-card component</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn btn-primary">Button</button>
            </section>
        </article>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkbox-image-overlay"
            data-toggle="collapse"
            data-target="#image-overlay"
        >
        <label for="checkbox-image-overlay">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="image-overlay" data-theme="light-20">
    {% highlight html %}
    <article class="card" data-theme="dark-10">
        <section class="card-media media-frame ratio-3-4 portrait center">
        </section>
        <section class="card-block media-overlay">
        </section>
    </article>
    {% endhighlight %}
    </div>
</article>

<article class="card vertical-push-lg">
    <section class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Theming a card</h3></section>
    <section class="card-block">
        <p>Cards can include a theme data attribute for quickly changing the <strong>background-color</strong> and <strong>color</strong> of a card or a card-block.</p>
    </section>
    <section class="cedar-example">
        <div class="group group-display-fixed group-gutter-open-10" data-example-id="card-background-variants" data-theme="light-20" data-example-id="theming-a-card">
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='light-10'>
                    <div class="card-block">
                        <p>light-10</p>
                    </div>
                </article>
            </div>
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='light-20'>
                    <div class="card-block">
                        <p>light-20</p>
                    </div>
                </article>
            </div>
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='light-30'>
                    <div class="card-block">
                        <p>light-30</p>
                    </div>
                </article>
            </div>
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='medium-10'>
                    <div class="card-block">
                        <p>medium-10</p>
                    </div>
                </article>
            </div>
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='medium-20'>
                    <div class="card-block">
                        <p>medium-20</p>
                    </div>
                </article>
            </div>
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='dark-10'>
                    <div class="card-block">
                        <p>dark-10</p>
                    </div>
                </article>
            </div>
            <div class="col-xs-6 col-sm-4">
                <article class="card" data-theme='dark-20'>
                    <div class="card-block">
                        <p>dark-20</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="card-block bs-callout bs-callout-info">
        <p>For additional accessibility and contrast, our darker themes add text shadow to <code> h1-h6 and p </code> tags </p>
    </section>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkbox-theming-a-card"
            data-toggle="collapse"
            data-target="#theming-a-card"
        >
        <label for="checkbox-theming-a-card">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="theming-a-card" data-theme="light-20">
    {% highlight html %}
    <article class="card" data-theme='light-20'>
        <section class="card-block"></section>
    </article>
    {% endhighlight %}
    </div>
</article>
