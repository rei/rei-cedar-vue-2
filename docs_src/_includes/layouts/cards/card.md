<p>A <strong>card</strong> is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
<p>Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease.</p>
<p>Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.</p>
<h2>Examples</h2>

<div class="card">
    <div class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Card orginization example</h3></div>
    <div class="card-block"><p>A Card containing content witin the card components: cedar-card-image-cap-top, cedar-card and cedar-card-block.</p></div>
    
    <div class="card-block cedar-example">
        <div class="card">
            <div class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            {% include /markup-templates/list-group/list-group-filter.html %}
                <div class="card-block text-xs-center">
            {% include /markup-templates/lists/inline.html param="inline-featured" %}
                </div>
        </div>
    </div>
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
            <div class="card">
                <div class="card-media-top media-frame ratio-3-4 portrait center">
                    <img src="img-path" alt="context">
                </div>
                content not in card-block
                <div class="card-block text-xs-center">
                    content within card-block and centered
                </div>
            </div>
        {% endhighlight %}
    </div>
</div>

<div class="card">
    <div class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Linked Card</h3></div>
    <div class="card-block"><p>When linking an entire card, be sure no other actionable items are nested within the parent structure.</p></div>
    
    <div class="card-block cedar-example">
        <a href="#this-example" class="card">
            <div class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            <div class="card-block">
                <h4>Heading</h4>
                <p>Copy.</p>
            </div>
        </a>
    </div>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboxcard-link-example"
            data-toggle="collapse"
            data-target="#card-link-example"
        >
        <label for="checkboxcard-link-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="card-link-example" data-theme="light-20">
        {% highlight html %}
            <a href="#this-example"></a>
        {% endhighlight %}
    </div>
</div>

<div class="card">
    <div class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Card Image Caps</h3></div>
    <div class="card-block"><p>Using cedar-card-image-cap-top will allow a full blead media frame within a card that also provides a border-radius to the top left and right of the media. See <a href="#cedar-card-img">the table</a> below for more information on options.</p></div>
    
    <div class="card-block cedar-example">
        <div class="card">
            <div class="card-media-top media-frame ratio-9-16 landscape left">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            <div class="card-block">
                <h4>Cedar-card component</h4>
            </div>
            <div class="card-media-bottom media-frame ratio-4-3 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
        </div>
    </div>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id="checkboxcard-img-cap-example"
            data-toggle="collapse"
            data-target="#card-img-cap-example"
        >
        <label for="checkboxcard-img-cap-example">View code</label>
    </div>
    <div class="collapse code-toggle--document" id="card-link-example" data-theme="light-20">
        {% highlight html %}
            ...
            <div class="card-media-top media-frame ratio-9-16 landscape left">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            ...
            ...
            <div class="card-media-bottom media-frame ratio-4-3 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </div>
            ...
        {% endhighlight %}
    </div>
</div>

<div class="card">
    <div class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Image overlays</h3></div>
    <div class="card-block"><p>Turn an image into a card background and overlay your card's text. To achive an accessible result, be sure to pass a <strong>theme</strong> value that is in line with the image color.</p></div>
    
    <div class="card-block cedar-example">
        <div class="card" data-theme="dark-10">
            <div class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://www.rei.com/content/landing-pages/lets-camp/img/mark/lead.jpg" alt="Text overlay cedar-card-image-cap component example">
            </div>
            <div class="card-block" data-overlay="media">
                <h4>Cedar-card component</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn btn-primary">Button</button>
            </div>
        </div>
    </div>
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
            <div class="card" data-theme="dark-10">
                <div class="card-media-top media-frame ratio-3-4 portrait center">
                    <img src="img-path" alt="context">
                </div>
                <div class="card-block" data-overlay="media">
                </div>
            </div>
        {% endhighlight %}
    </div>
</div>

<div class="card">
    <div class="card-block card-block--top" data-theme="light-20"><h3 class="h4">Theming a card</h3></div>
    <div class="card-block"><p>Cards can include a theme data attribute for quickly changing the <strong>background-color</strong> and <strong>color</strong> of a card or a card-block.</p></div>
    <div class="card-block cedar-example">
        <div class="row" data-example-id="card-background-variants">
            <div class="col-sm-3">
                <div class="card" data-theme='light-10'>
                    <div class="card-block">
                        <p>light-10</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card" data-theme='light-20'>
                    <div class="card-block">
                        <p>light-20</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card" data-theme='light-30'>
                    <div class="card-block">
                        <p>light-30</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card" data-theme='medium-10'>
                    <div class="card-block">
                        <p>medium-10</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card" data-theme='medium-20'>
                    <div class="card-block">
                        <p>medium-20</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card" data-theme='dark-10'>
                    <div class="card-block">
                        <p>dark-10</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card" data-theme='dark-20'>
                    <div class="card-block">
                        <p>dark-20</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            <div class="card" data-theme='light-20'>
                <div class="card-block"></div>
            </div>
            <div class="card-block" data-theme="medium-20"></div>
        {% endhighlight %}
    </div>
</div>

<table class="table">
    <caption>Card properties</caption>
    <thead>
        <tr>
            <th scope="row">Name</th>
            <th>Type</th>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>spacing</th>
            <td>bool</td>
            <td></td>
            <td>false</td>
            <td>for a card that will padd all child elements, rather than using a card > card-block you can use the spacing attribute to set a card to card-block.</td>
        </tr>
        <tr>
            <th scope="row">align</th>
            <td>string</td>
            <td><a href="/elements/typography/#alignment">documentation <span class="sr-only">for text alignment classes.</span></a></td>
            <td></td>
            <td>Pass the card one of the pre-defined utility text alignment classes.</td>
        </tr>
        <tr>
            <th scope="row">theme</th>
            <td>string</td>
            <td><a href="/layouts/color/">documentation <span class="sr-only">for container themeing options.</span></a></td>
            <td></td>
            <td>provides a card with set background forground and border color values.</td>
        </tr>
        <tr>
            <th scope="row">additional</th>
            <td>string</td>
            <td></td>
            <td></td>
            <td>need to add additional classes? This is where you do it.</td>
        </tr>
    </tbody>
</table>
<table class="table">
    <caption>Card Block properties</caption>
    <thead>
        <tr>
            <th scope="row">Name</th>
            <th>Type</th>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>delimiter</th>
            <td>string</td>
            <td>top || bottom</td>
            <td></td>
            <td>Sets a border top or bottom.</td>
        </tr>
        <tr>
            <th scope="row">align</th>
            <td>string</td>
            <td><a href="/elements/typography/#alignment">documentation <span class="sr-only">for text alignment classes.</span></a></td>
            <td></td>
            <td>Pass the card one of the pre-defined utility text alignment classes.</td>
        </tr>
        <tr>
            <th scope="row">theme</th>
            <td>string</td>
            <td><a href="/layouts/color/">documentation <span class="sr-only">for container themeing options.</span></a></td>
            <td></td>
            <td>provides a card with set background forground and border color values.</td>
        </tr>
        <tr>
            <th scope="row">additional</th>
            <td>string</td>
            <td></td>
            <td></td>
            <td>need to add additional classes? This is where you do it.</td>
        </tr>
        <tr>
            <th scope="row">overlay</th>
            <td>bool</td>
            <td></td>
            <td>false</td>
            <td>Allows text to overlay a card-img.</td>
        </tr>
    </tbody>
</table>
<table id="cedar-card-img" class="table">
    <caption>Card Image Cap, Card Image Cap Top, Card Image Cap Bottom</caption>
    <thead>
        <tr>
            <th scope="row">Name</th>
            <th>Type</th>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>ratio</th>
            <td>string</td>
            <td><a href="#">documentation <span class="sr-only">for available aspect ratio classes.</span></a></td>
            <td>ratio-3-4</td>
            <td>Provide an image aspect ratio. By default this is set to 3-4 which is the most standard.</td>
        </tr>
        <tr>
            <th scope="row">orientation</th>
            <td>string</td>
            <td>portrait || landscape</td>
            <td>portrait</td>
            <td>Provide the orientation of the image being used.</td>
        </tr>
        <tr>
            <th scope="row">position</th>
            <td>string</td>
            <td><a href="#">documentation <span class="sr-only">on combining position and ratio classes.</span></a></td>
            <td>center</td>
            <td></td>
        </tr>
        <tr>
            <th scope="row">path</th>
            <td>string</td>
            <td></td>
            <td></td>
            <td>provide the path to the asset</td>
        </tr>
        <tr>
            <th scope="row">alt</th>
            <td>string</td>
            <td></td>
            <td>empty</td>
            <td>Allows you to provide an image description</td>
        </tr>
    </tbody>
</table>