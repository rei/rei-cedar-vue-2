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
    <style type="less" scoped>
    @import "../../../../../src/less/mixins";
    @text-color: red;
    @text-overlay: black;
    :scope {.card-variant(#000)}

    </style>

</cedar-card>
