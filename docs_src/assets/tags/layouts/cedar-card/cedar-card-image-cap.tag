<cedar-card-image-cap
class="card-media media-frame { ratio } { orientation } { position }">
    <img src={ opts.path } alt={ opts.alt } />
    <script>
        this.ratio = opts.ratio || 'ratio-3-4';
        this.orientation = opts.orientation || 'portrait';
        this.position = opts.position || 'center';
    </script>
</cedar-card-image-cap>
