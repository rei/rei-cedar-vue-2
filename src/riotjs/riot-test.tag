<!-- mount point -->
<my-tag></my-tag>

<!-- inlined tag definition -->
<script type="riot/tag">
  <my-tag>
    <h3>Tag layout</h3>
    <inner-tag />
  </my-tag>
</script>

<!-- include riot.js and the compiler -->
<script src="https://cdn.jsdelivr.net/riot/2.6/riot+compiler.min.js"></script>


<!-- mount normally -->
<script>
riot.mount('*')
</script>
