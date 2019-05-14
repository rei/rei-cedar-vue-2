<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading-medium"
    >
      Bare list
    </cdr-text>

    <cdr-list class="cdr-mb-space-two-x">
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
      modifier="heading-medium"
    >
      Compact bare list
    </cdr-text>

    <cdr-list
      modifier="compact"
      class="cdr-mb-space-two-x"
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
      modifier="heading-medium"
    >
      Inline bare list
    </cdr-text>

    <cdr-list
      modifier="inline"
      class="cdr-mb-space-two-x"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading-medium"
    >
      Inline compact bare list
    </cdr-text>

    <cdr-list
      modifier="inline compact"
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
  name: 'BareList',
  components: Components,
};
</script>

<style>

</style>
