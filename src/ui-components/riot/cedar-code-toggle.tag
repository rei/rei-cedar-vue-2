<cedar-code-toggle>
	<div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20">
        <input
            type="checkbox"
            value=""
            id={ opts.id }
            data-toggle="collapse"
            data-target={ opts.dataTarget }
        >
        <label for={ opts.labelFor }>View code</label>
    </div>
    <div class="collapse code-toggle--document" id={ opts.targetId } data-theme="light-20">
    <!-- TODO: Will this work? Can I highlight in another way for the code snippet
		% symbol will break riot
     -->
	    <pre>
{ opts.codeExample }
		</pre>
    </div>
</cedar-code-toggle>
