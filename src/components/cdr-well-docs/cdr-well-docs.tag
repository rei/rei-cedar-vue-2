<cdr-well-docs>
    <div class="well vertical-push-lg">
        <div class="group group-display-fixed">
            <div class="col-xs-12 col-sm-8">
                <h2 class="h3" id="{'nav-' + opts.elementId }">{ opts.exampleTitle }</h2>
            </div>
             <div class="col-xs-12 col-sm-4">
                <div class="code-toggle--control checkbox toggle-show-hide text-sm-right">
                    <input type="checkbox" value="" id="{ 'checkbox-' + opts.elementId }" data-toggle="collapse" data-target="{ '#' + opts.elementId }" />
                    <label for="{ 'checkbox-' + opts.elementId }">View code</label>
                </div>
            </div>
        </div>
        <div class="collapse code-toggle--document" id="{ opts.elementId }" >
            <yield from="codeblock" />
        </div>
        <section>
            <yield from="example-description" />
        </section>
        <section if="{ opts.exampleStyle == null }" class="cedar-example" data-example-id="{ opts.elementId }">   <yield from="example" />
        </section>
        <section data-theme="{ opts.exampleTheme }" if="{ opts.exampleStyle }" class="{ opts.exampleStyle + ' cedar-example'}" data-example-id="{ opts.elementId }">
            <yield from="example" />
        </section>
    </div>
</cdr-well-docs>
