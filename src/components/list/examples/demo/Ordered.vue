<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
    >
      Ordered list
    </cdr-text>

    <cdr-list
      tag="ol"
      modifier="ordered"
      space="cdr-mb-space-two-x"
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
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
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


    <cdr-text
      tag="h4"
      modifier="eyebrow-100"
    >
      Typography validation - text wrapping list
    </cdr-text>

    <cdr-text
      modifier="body-300"
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
      modifier="body-500"
      class="cdr-mt-space-one-x"
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
