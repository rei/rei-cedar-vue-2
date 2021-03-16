<template>
  <div>
    <h3>
      Unordered list
    </h3>

    <cdr-list
      modifier="unordered"
    >
      <li>List item text</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
        <cdr-list>
          <li>List item text</li>
          <li>List item text
            <cdr-list>
              <li>List item text</li>
              <li>List item text</li>
            </cdr-list>
          </li>
        </cdr-list>
      </li>
      <li>List item text</li>
    </cdr-list>

    <h4>
      Compact Unordered list
    </h4>

    <cdr-list
      modifier="unordered"
    >
      <li>List item text</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
        <cdr-list>
          <li>List item text</li>
          <li>List item text</li>
        </cdr-list>
      </li>
      <li>List item text</li>
    </cdr-list>

    <h4>
      Inline unordered list
    </h4>

    <cdr-list
      modifier="inline unordered"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <cdr-list
      modifier="inline unordered"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <h4>
      Inline compact unordered list
    </h4>

    <cdr-list
      modifier="inline compact unordered"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'UnorderedList',
  components: Components,
};
</script>

<style>

</style>
