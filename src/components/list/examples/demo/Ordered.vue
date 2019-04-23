<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading-medium"
    >
      Ordered list
    </cdr-text>

    <cdr-list
      tag="ol"
      modifier="ordered"
      class="cdr-stack--lg"
    >
      <li>List item text</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
        <cdr-list
          tag="ol"
          modifier="ordered"
        >
          <li>List item text</li>
          <li>List item text
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
        </cdr-list>
      </li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading-medium"
    >
      Compact ordered list
    </cdr-text>

    <cdr-list
      tag="ol"
      modifier="ordered compact"
    >
      <li>List item text</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
        <cdr-list
          tag="ol"
          modifier="ordered"
        >
          <li>List item text</li>
          <li>List item text</li>
        </cdr-list>
      </li>
      <li>List item text</li>
    </cdr-list>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'OrderedList',
  components: Components,
};
</script>

<style>

</style>
