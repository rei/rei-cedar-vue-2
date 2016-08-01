<cedar-card-header class={card-header:true}{ ' ' + opts.align }>
    <yield/>
    <script>
        this.align = opts.align
    </script>
    <style scoped>
        :scope { display: block; }
    </style>
</cedar-card-header>
