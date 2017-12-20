<template>
  <div>
    <h3>Styled List</h3>
    <cdr-list modifier="disc">
      <li>List item - disc</li>
      <li>List item - disc</li>
      <li>List item - disc</li>
    </cdr-list>

    <cdr-list modifier="disc compact">
      <li>List item - disc compact</li>
      <li>List item - disc compact</li>
      <li>List item - disc compact</li>
    </cdr-list>

    <cdr-list modifier="disc spread">
      <li>List item - disc spread</li>
      <li>List item - disc spread</li>
      <li>List item - disc spread</li>
    </cdr-list>

    <cdr-list modifier="circle">
      <li>List item - circle</li>
      <li>List item - circle</li>
      <li>List item - circle</li>
    </cdr-list>

    <cdr-list modifier="circle compact">
      <li>List item - circle compact</li>
      <li>List item - circle compact</li>
      <li>List item - circle compact</li>
    </cdr-list>

    <cdr-list modifier="circle spread">
      <li>List item - circle spread</li>
      <li>List item - circle spread</li>
      <li>List item - circle spread</li>
    </cdr-list>

    <h4>Inline</h4>

    <cdr-list modifier="inline">
      <li>Inline list item</li>
      <li>Inline list item</li>
      <li>Inline list item</li>
    </cdr-list>

    <cdr-list modifier="inline disc">
      <li>Inline List Item - disc</li>
      <li>Inline List Item - disc</li>
      <li>Inline List Item - disc</li>
    </cdr-list>

    <cdr-list modifier="inline circle">
      <li>Inline List Item - circle</li>
      <li>Inline List Item - circle</li>
      <li>Inline List Item - circle</li>
    </cdr-list>

    <cdr-list modifier="inline compact">
      <li>Inline list item - compact</li>
      <li>Inline list item - compact</li>
      <li>Inline list item - compact</li>
    </cdr-list>

    <cdr-list modifier="inline compact disc">
      <li>Inline List Item - compact - disc</li>
      <li>Inline List Item - compact - disc</li>
      <li>Inline List Item - compact - disc</li>
    </cdr-list>

    <cdr-list modifier="inline compact circle">
      <li>Inline List Item - compact - circle</li>
      <li>Inline List Item - compact - circle</li>
      <li>Inline List Item - compact - circle</li>
    </cdr-list>

    <cdr-list modifier="inline spread">
      <li>Inline list item - spread</li>
      <li>Inline list item - spread</li>
      <li>Inline list item - spread</li>
    </cdr-list>

    <cdr-list modifier="inline spread disc">
      <li>Inline List Item - spread - disc</li>
      <li>Inline List Item - spread - disc</li>
      <li>Inline List Item - spread - disc</li>
    </cdr-list>

    <cdr-list modifier="inline spread circle">
      <li>Inline List Item - spread - circle</li>
      <li>Inline List Item - spread - circle</li>
      <li>Inline List Item - spread - circle</li>
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
