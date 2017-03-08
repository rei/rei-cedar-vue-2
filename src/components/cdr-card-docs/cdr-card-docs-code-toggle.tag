<cdr-card-docs-code-toggle>
    <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id={ elementId }
            data-toggle="collapse"
            data-target={ targetId }
        >
        <label for={ elementId }>View code</label>
    </div>
    <div class="collapse code-toggle--document" id={ targetId } data-theme="light-20">
        <pre>
        <yield from="codeblock">
        </pre>
    </div>
    <script>
        this.elementId = opts.elementId;
        this.targetId = opts.targetId;
    </script>
</cdr-card-docs-code-toggle>
