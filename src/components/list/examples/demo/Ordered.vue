<template>
  <cdr-list type="ol">
    <li>List ordered - default</li>
    <li>List ordered - default
      <cdr-list
        type="ol"
        modifier="unstyled">
        <li>List ordered - nested - unstyled</li>
        <li>List ordered - nested - unstyled
          <cdr-list
            type="ol"
            modifier="bulleted">
            <li>List ordered - nested - bulleted</li>
            <li>List ordered - nested - bulleted</li>
          </cdr-list>
        </li>
      </cdr-list>
    </li>
  </cdr-list>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'OrderedList',
  components: Components,
};
</script>

<style>

</style>
