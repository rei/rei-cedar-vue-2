<cedar-card
    class="card {spacing} {opts.align} {opts.additional}"
    data-theme={ opts.theme }
    >
    <yield/>
    <script>
     if(opts.spacing === "true") {
            this.spacing = "card-block"
        }
    </script>
</cedar-card>
