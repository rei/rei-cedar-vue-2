<cedar-card-image-cap-top
    class="
    { card-media-top: true }
    { ratio }
    { orientation }
    { position }
    ">
       <img src={ opts.path } alt={ opts.alt } />
        <script>
            this.ratio = opts.ratio || 'media-frame ratio-3-4'
            this.orientation = opts.orientation || 'portrait'
            this.position = opts.position || 'center'
        </script>
        <style scoped>
            :scope { display: block; }
        </style>
</cedar-card-image-cap-top>
