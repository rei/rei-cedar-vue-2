<cedar-example-card>
    <cedar-card>
        <cedar-card-block delimiter="top" theme="light-20">
            <h2 class="h4">{ opts.title }</h2>
        </cedar-card-block>
        <cedar-card-block>
            <yield from="description" />
        </cedar-card-block>
        <cedar-card-block additional="cedar-example">
            <yield from="example" />
        </cedar-card-block>
        <cedar-code-toggle
            name="view code"
            identifier="root-example"
            type="toggle-expand-collapse"
            align="text-xs-right"
        >
        {% highlight html %}
            <yield from="sample" />
        {% endhighlight %}
        </cedar-code-toggle>
    </cedar-card>
</cedar-example-card>


<cedar-card
    class="card { opts.spacing } { opts.align } { opts.additional }"
    data-theme={ opts.theme }
>
    <yield/>
</cedar-card>
<cedar-card-block
    class="card-block { delimiter } { opts.align } { opts.additional }"
    data-overlay= { overlay }
    data-theme={ opts.theme }
>
    <yield/>
    <script>
        if ( opts.delimiter === 'top' ) {
            this.delimiter = 'card-block--top';
        }
        else if ( opts.delimiter === 'bottom' ) {
            this.delimiter = 'card-block--bottom';
        }
        if( opts.overlay === 'true') {
            this.overlay = 'media';
        }
    </script>
</cedar-card-block>
<cedar-code-toggle
    class="code-toggle"
    data-theme={ theme }
>
<div class="code-toggle--control checkbox { item.toggle} { align }">
    <input
        type="checkbox"
        value=""
        id="checkbox{ item.identifier }"
        data-toggle="collapse"
        data-target="#{ item.identifier }"
    >
    <label for="checkbox{ item.identifier }"> { item.name } </label>
</div>
<div class="collapse code-toggle--document" id="{ item.identifier }">
    <yield/>
</div>
    <script>
        this.item = {
            toggle: opts.type,
            name: opts.name,
            identifier: opts.identifier
        };
        this.align = opts.align || 'text-xs-right';
        this.theme = opts.theme || 'light-20';
    </script>
    <style scoped>
       :scope {
        display: block;
       }
    </style>
</cedar-code-toggle>





