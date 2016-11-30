<cedar-card>
	<section class="card-block { capLocation } { classes }" data-theme="{ theme }">
        <h3>{ title }</h3>
    </section>
    <section class="card-block">
        { cardBodyContent }
    </section>

    <script>
        this.capLocation = opts.capLocation;
        this.theme = opts.theme;
        this.title = opts.title;
        this.cardBodyContent = opts.cardBodyContent;
    </script>
</cedar-card>
