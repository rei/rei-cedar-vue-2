<cedar-card
    class="{card: true}{ ' ' + spacing }{ ' ' + align}"
    data-variant={ hasVariant }
    data-size={ size }
    href={opts.href}
    >
    <yield/>

    <script>
    this.spacing = opts.spacing
    this.hasVariant = opts.hasVariant
    this.size = opts.size
    this.align = opts.align
    </script>

</cedar-card>
