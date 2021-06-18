<template>
  <div>

    <h3>
      Bare list
    </h3>

    <cdr-list>
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
      Typography validation - text wrapping list
    </h4>

    <cdr-text
      tag="h4"
      class="cdr-text-dev--body-400"
    >
      <cdr-list>
        <li>List item text</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
          <cdr-list>
            <li>List item text</li>
            <li>List item text</li>
          </cdr-list>
        </li>
        <li>List item text</li>
      </cdr-list>
    </cdr-text>

    <h4>
      Compact bare list
    </h4>

    <cdr-list
      modifier="compact"
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
      Inline bare list
    </h4>

    <cdr-list
      modifier="inline"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <h4>
      Inline compact bare list
    </h4>

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
import * as Components from 'srcdir/index';

export default {
  name: 'BareList',
  components: Components,
};
</script>

<style>

</style>
