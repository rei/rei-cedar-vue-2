<cedar-list-group--filter class="list-group-filter">
    <li class="list-group-item collapsibleList checkbox {item.toggle}" data-ui="nav-level-{item.order}">
        <input type="checkbox" value="" id="list-group-item-{item.order}">
        <label for="list-group-item-{item.order}">
        {item.name}
        </label>
        <div class="nest">
        <yield/>
        </div>
    <li>
     <script>
        this.item = {
        toggle: opts.type,
        order: opts.order,
        name: opts.name
    }
    </script>
</cedar-list-group--filter>


