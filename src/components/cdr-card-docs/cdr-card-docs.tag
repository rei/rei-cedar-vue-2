<cdr-card-docs>
    <article class="card vertical-push-lg">
        <section class="card-block-xs-open-default card-block-top" data-theme="medium-10">
            <h3 class="card-doc-heading">{ opts.exampleTitle }</h3>
        </section>
        <section class="card-block-xs-open-default">
           <yield from="example-description" />
        </section>
        <section if="{ opts.exampleStyle == null }" class="card-block-xs-open-default cedar-example" data-example-id="{ opts.elementId }">   <yield from="example" />
        </section>
        <section data-theme="{ opts.exampleTheme }" if="{ opts.exampleStyle }" class="{ opts.exampleStyle + ' cedar-example'}" data-example-id="{ opts.elementId }">
            <yield from="example" />
        </section>
        <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="medium-10">
            <input type="checkbox" value="" id="{ 'checkbox-' + opts.elementId }" data-toggle="collapse" data-target="{ '#' + opts.elementId }" />
            <label for="{ 'checkbox-' + opts.elementId }">View code</label>
        </div>
        <div class="collapse code-toggle--document" id="{ opts.elementId }" data-theme="medium-10">
            <yield from="codeblock" />
        </div>
    </article>
</cdr-card-docs>
