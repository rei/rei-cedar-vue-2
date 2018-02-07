<template>
  <div>
    <h3>Default List</h3>
    <cdr-list>
      <li>List default</li>
      <li>List default</li>
      <li>List default</li>
    </cdr-list>

    <cdr-list
    modifier="compact">
      <li>List default - compact</li>
      <li>List default - compact</li>
      <li>List default - compact</li>
    </cdr-list>

    <cdr-list
    modifier="spread">
      <li>List default - spread</li>
      <li>List default - spread</li>
      <li>List default - spread</li>
    </cdr-list>

    <cdr-list>
      <li>List Nested
        <ul is="cdr-list">
          <li>List default - nested</li>
          <li>List default - nested
            <ul
              is="cdr-list"
              modifier="numbered">
              <li>List default - nested - numbered</li>
              <li>List default - nested - numbered</li>
            </ul>
          </li>
        </ul>
      </li>
    </cdr-list>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'DefaultList',
  components: Components,
};
</script>

<style>

</style>
