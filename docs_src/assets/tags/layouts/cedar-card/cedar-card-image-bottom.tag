<cedar-card-image-cap-bottom
    class="
    { card-media-cap-bottom: true}
    { opts.placement }
    { opts.ratio }
    { opts.orientation }
    { opts.position }
    ">
       <img src={ opts.path } alt={ opts.alt } />
        <script>
            this.placement = opts.placement
            this.ratio = opts.ratio
            this.orientation = opts.orientation
            this.position = opts.position
            this.path = opts.path
            this.alt = opts.alt
        </script>
        <style scoped>
            :scope { display: block; }
        </style>
</cedar-card-image-cap-bottom>
