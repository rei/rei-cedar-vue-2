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
    
        <article class="card">
            <section class="card-media-top media-frame ratio-3-4 portrait center">
                <img src="http://placehold.it/320x150" alt="Example image">
            </section>
            content out of card-block
            <section class="card-block text-xs-center">
                content within card-block
            </section>
        </article>
    	
    </div>
</cedar-code-toggle>
