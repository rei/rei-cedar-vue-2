<template>
  <div>
    <cdr-list modifier="disc">
      <li>List item - disc</li>
      <li>List item - disc</li>
    </cdr-list>

    <cdr-list modifier="disc compact">
      <li>List item - disc compact</li>
      <li>List item - disc compact</li>
    </cdr-list>

    <cdr-list modifier="circle">
      <li>List item - circle</li>
      <li>List item - circle</li>
    </cdr-list>

    <cdr-list modifier="circle compact">
      <li>List item - circle compact</li>
      <li>List item - circle compact</li>
    </cdr-list>

  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'StyledList',
  components: Components,
};
</script>

<style>

</style>
