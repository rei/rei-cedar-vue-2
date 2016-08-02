<cedar-card-block
class={ card-block: true}{ ' ' + opts.align }
data-overlay= { overlay ? 'media' : 'no-overlay' }
data-theme={ theme }
>
    <yield/>
    <script>
        this.align = opts.align
        this.overlay = opts.hasOwnProperty('overlay')
        ? opts.overlay === '' || opts.overlay === 'active' || opts.overlay === 'true'
        : false

        this.theme = opts.theme
    </script>
    <style scoped>
        :scope { display: block; }
    </style>
</cedar-card-block>
