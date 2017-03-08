<cdr-card-docs>
    <article class="card vertical-push-lg">
        <section class="card-block-xs-open-default card-block-top" data-theme="light-20">
            <h3 class="h4 card-doc-heading">{ opts.exampleTitle }</h3>
        </section>
        <section class="card-block-xs-open-default">
           <yield from="example-description" />
        </section>
        <section if="{ opts.example == null }" class="card-block-xs-open-default cedar-example" data-example-id="{ opts.elementId }"><yield from="example" /></section>
        <section if="{ opts.example-style }" class="{ opts.example-style } cedar-example" data-example-id="{ opts.elementId }"><yield from="example" /></section>

        <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
            <input type="checkbox" value="" id={ opts.elementId } data-toggle="collapse" data-target={ '#'+opts.elementId+'-example' } />
            <label for={ opts.elementId }>View code</label>
        </div>
        <div class="collapse code-toggle--document" id={ opts.elementId+'-example' } data-theme="light-20">
                <yield from="codeblock" />
        </div>
    </article>
</cdr-card-docs>

