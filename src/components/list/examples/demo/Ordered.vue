<template>
  <div>
    <h3>Ordered List</h3>
    <cdr-list list-type="ol">
      <li>List ordered</li>
      <li>List ordered</li>
      <li>List ordered</li>
    </cdr-list>

    <cdr-list
      list-type="ol"
      modifier="compact">
      <li>List ordered - compact</li>
      <li>List ordered - compact</li>
      <li>List ordered - compact</li>
    </cdr-list>

    <cdr-list
      list-type="ol"
      modifier="spread">
      <li>List ordered - spread</li>
      <li>List ordered - spread</li>
      <li>List ordered - spread</li>
    </cdr-list>

    <cdr-list list-type="ol">
      <li>List ordered Nested
        <cdr-list list-type="ol">
          <li>List ordered - nested</li>
          <li>List ordered - nested
            <cdr-list
              list-type="ol"
              modifier="numbered">
              <li>List ordered - nested - numbered</li>
              <li>List ordered - nested - numbered</li>
            </cdr-list>
          </li>
        </cdr-list>
      </li>
    </cdr-list>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'OrderedList',
  components: Components,
};
</script>

<style>

</style>
