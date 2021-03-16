<template>
  <div>

    <h3>
      Ordered list
    </h3>

    <cdr-list
      tag="ol"
      modifier="ordered"
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

    <h4>
      Compact ordered list
    </h4>

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

    <h4>
      Typography validation - text wrapping list
    </h4>

    <cdr-text
      class="cdr-text-dev--body-300"
    >
      <cdr-list
        tag="ol"
        modifier="ordered compact"
      >
        <li>body--300</li>
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
      class="cdr-text-dev--body-500"
      style="margin-top: 16px;"
    >
      an ordered list nested in a text style
      will alter the entire list including
      decorations
      <cdr-list
        tag="ol"
        modifier="ordered"
      >
        <li>body-500</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
          <cdr-list>
            <li>List item text</li>
            <li>List item text</li>
          </cdr-list>
        </li>
        <li>List item text</li>
      </cdr-list>
    </cdr-text>

  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'OrderedList',
  components: Components,
  data() {
    return {
      paragraphs: ['300', '400', '500'],
      utilities: ['100', '200', '300', '400', '500', '600', '700', '800'],

    };
  },
};
</script>

<style>

</style>
