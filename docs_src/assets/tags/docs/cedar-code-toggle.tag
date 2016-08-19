<cedar-code-toggle
class="code-toggle"
data-theme={ theme }
>
<div class="code-toggle--controle checkbox {toggle} {align}">
    <input
    type="checkbox"
    value=""
    id="checkbox{identifier}"
    data-toggle="collapse"
    data-target="#{identifier}"
    >
    <label for="checkbox{identifier}"> {name} </label>
</div>
<div class="collapse code-toggle--document" id="{identifier}">
    <yield/>
</div>
    <script>
        this.toggle = opts.toggle || 'toggle-expand-collapse'
        this.name = opts.name || 'View Code'
        this.identifier = opts.identifier
        this.align = opts.align || 'text-xs-right'
        this.theme = opts.theme || 'light-20'
    </script>
   <style scoped>
   :scope {
    display: block;
   }
    </style>
</cedar-code-toggle>
