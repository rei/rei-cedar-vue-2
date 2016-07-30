<cedar-card
    class="{card: true}{ isCardBlock }"
    data-={ opts.option }
    data-variant={ hasVariant }
    data-size={ size }
    data-text-align={ align }
    href={opts.href}
    >
    <yield/>

    <script>
    this.isCardBlock = opts.isCardBlock
    this.hasVariant = opts.hasVariant
    this.size = opts.size
    this.align = opts.align
    </script>

</cedar-card>
