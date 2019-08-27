<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Unordered list
    </cdr-text>

    <cdr-list
      modifier="unordered"
      space="cdr-mb-space-two-x"
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

    <cdr-text
      tag="h4"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Compact Unordered list
    </cdr-text>

    <cdr-list
      modifier="unordered"
      space="cdr-mb-space-two-x"
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

    <cdr-text
      tag="h4"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Inline unordered list
    </cdr-text>

    <cdr-list
      modifier="inline unordered"
      space="cdr-mb-space-two-x"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Inline compact unordered list
    </cdr-text>

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
import * as Components from 'componentsdir/_index';

export default {
  name: 'UnorderedList',
  components: Components,
};
</script>

<style>

</style>
