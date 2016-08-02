<cedar-card-footer class={ card-footer: true}{ ' ' + opts.align }>
    <yield/>
    <script>
        this.align = opts.align
        this.theme = opts.theme
    </script>
    <style scoped>
        :scope { display: block; }
    </style>
</cedar-card-footer>
