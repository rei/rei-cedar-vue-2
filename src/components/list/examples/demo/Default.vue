<template>
  <div>
    <h3>Default List</h3>
    <cdr-list>
      <li>List default</li>
      <li>List default
        <cdr-list>
          <li>List default - nested</li>
          <li>List default - nested
            <cdr-list modifier="numbered">
              <li>List default - nested - numbered</li>
              <li>List default - nested - numbered</li>
            </cdr-list>
          </li>
        </cdr-list>
      </li>
      <li>List default - nested</li>
      <li>List default - nested</li>
    </cdr-list>
    <cdr-list
    modifier="compact">
      <li>List default - compact</li>
      <li>List default - compact</li>
      <li>List default - compact</li>
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
