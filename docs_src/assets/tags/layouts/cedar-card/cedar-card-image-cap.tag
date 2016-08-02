<cedar-card-image-cap
    class="
    { card-media: true, media-frame: true }
    { ratio }
    { orientation }
    { position }
    ">
       <img src={ opts.path } alt={ opts.alt } />
        <script>
            this.ratio = opts.ratio || 'ratio-3-4'
            this.orientation = opts.orientation || 'portrait'
            this.position = opts.position || 'center'
        </script>
        <style scoped>
            :scope { display: block; }
        </style>
</cedar-card-image-cap>
