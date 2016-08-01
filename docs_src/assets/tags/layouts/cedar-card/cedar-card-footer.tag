<cedar-card-footer class={ card-footer: true}{ ' ' + opts.align }>
    <yield/>
    <script>
        this.align = opts.align
    </script>
    <style scoped>
        :scope { display: block; }
    </style>
</cedar-card-footer>
