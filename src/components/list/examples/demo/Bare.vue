<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      Bare list
    </cdr-text>

    <cdr-list space="cdr-mb-space-two-x">
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
      modifier="eyebrow-100"
    >
      Typography validation - text wrapping list
    </cdr-text>

    <cdr-text
      tag="h4"
      modifier="body--400"
    >
      <cdr-list space="cdr-mb-space-two-x">
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

    <cdr-text
      tag="h4"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      Compact bare list
    </cdr-text>

    <cdr-list
      modifier="compact"
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
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      Inline bare list
    </cdr-text>

    <cdr-list
      modifier="inline"
      space="cdr-mb-space-two-x"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
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
import * as Components from 'srcdir/index';

export default {
  name: 'BareList',
  components: Components,
};
</script>

<style>

</style>
