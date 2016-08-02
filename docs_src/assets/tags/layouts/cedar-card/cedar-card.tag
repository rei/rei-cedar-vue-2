<cedar-card
    class="{card: true}{ ' ' + spacing }{ ' ' + align}"
    data-size={ size }
    data-theme={ theme }
    href={opts.href}
    >
    <yield/>

    <script>
    this.spacing = opts.spacing
    this.size = opts.size
    this.align = opts.align
    this.theme = opts.theme
    </script>
</cedar-card>
