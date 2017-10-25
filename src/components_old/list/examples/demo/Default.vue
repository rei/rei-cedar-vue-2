<template>
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
  </cdr-list>
</template>

<script>
import * as Components from '../../../_index';

export default {
  name: 'default-list',
  components: Components,
};
</script>

<style>

</style>
