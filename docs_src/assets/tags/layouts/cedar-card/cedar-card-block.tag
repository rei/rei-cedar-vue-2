<cedar-card-block
class="card-block {delimiter} {opts.align} {opts.additional}"
data-overlay= { overlay }
data-theme={ opts.theme }
>
    <yield/>
    <script>
        if (opts.delimiter === 'top' ) {
            this.delimiter = 'card-block--top'
        }
        else if (opts.delimiter === 'bottom' ) {
            this.delimiter = 'card-block--bottom'
        }
        if(opts.overlay === 'true') {
            this.overlay = 'media'
        }
    </script>
</cedar-card-block>
