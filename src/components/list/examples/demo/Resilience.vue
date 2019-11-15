<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Resilience Tests
    </cdr-text>

    <cdr-text
      tag="h4"
      modifier="heading-500 heading-600@md heading-600@lg"
    >
      Typography validation - text wrapping lists
    </cdr-text>

    <cdr-text
      v-for="p1 in paragraphs"
      :key="p1"
      :modifier="`body-${p1}`"
    >
      <cdr-list space="cdr-mb-space-two-x">
        <li>List item text</li>
        <li>Lorem ipsum dolor
          <cdr-text
            tag="span"
            :modifier="`body--strong-${p1}`"
          >
            sit amet,
          </cdr-text>
          consectetur adipiscing elit, sed do eiusmodList ordered
          <cdr-list>
            <li>List item text</li>
            <li>List item text</li>
          </cdr-list>
        </li>
        <li>List item text</li>
      </cdr-list>
    </cdr-text>


    <cdr-text
      v-for="utility in utilities"
      :key="utility"
      :modifier="`utility-${utility}`"
    >
      <cdr-list
        v-for="l1 in lists"
        :key="l1"
        :modifier="`${l1}`"
        space="cdr-mb-space-two-x"
      >
        <li>utility {{ utility }} in list {{ l1 }} </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
          <cdr-list>
            <li>List item text</li>
            <li>List item text</li>
          </cdr-list>
        </li>
        <li>List item text</li>
      </cdr-list>
    </cdr-text>

    <cdr-list
      tag="ol"
      modifier="ordered"
      class="cdr-mt-space-one-x"
    >
      <li
        v-for="paragraph in paragraphs"
        :key="paragraph"
      >
        <cdr-text
          tag="span"
          :modifier="`body-${paragraph}`"
        >
          body-{{ paragraph }}
        </cdr-text>
      </li>
      <li>
        text
        <cdr-list>
          <li
            v-for="paragraph in paragraphs"
            :key="paragraph"
          >
            <cdr-text
              tag="span"
              :modifier="`body-${paragraph}`"
            >
              body-{{ paragraph }}
            </cdr-text>
          </li>
        </cdr-list>
      </li>
    </cdr-list>

    <cdr-list
      modifier="unordered"
      class="cdr-mt-space-one-x"
    >
      <li
        v-for="utility in utilities"
        :key="utility"
      >
        random text
        <cdr-text
          tag="span"
          :modifier="`utility-${utility}`"
        >
          utility-{{ utility }}
        </cdr-text>
      </li>
      <li>
        text
        <cdr-list>
          <li
            v-for="utility in utilities"
            :key="utility"
          >
            <cdr-text
              tag="span"
              :modifier="`utility-${utility}`"
            >
              utility-{{ utility }}
            </cdr-text>
          </li>
        </cdr-list>
      </li>
    </cdr-list>

    <cdr-list
      modifier="unordered inline "
      class="cdr-mt-space-one-x"
    >
      <li
        v-for="utility in utilities"
        :key="utility"
      >
        random text
      </li>
      <li>
        text
      </li>
    </cdr-list>

    NON Cedar list
    <ul class="cdr-mt-space-one-x">
      <li
        v-for="utility in utilities"
        :key="utility"
      >
        random text
        <cdr-text
          tag="span"
          :modifier="`utility-${utility}`"
        >
          utility-{{ utility }}
        </cdr-text>
      </li>
      <li>
        text
        <ul>
          <li
            v-for="utility in utilities"
            :key="utility"
          >
            random text
            <cdr-text
              tag="span"
              :modifier="`utility-${utility}`"
            >
              utility-{{ utility }}
            </cdr-text>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'ResilienceTest',
  components: Components,
  data() {
    return {
      paragraphs: ['300', '400', '500'],
      utilities: ['100', '200', '300', '400', '500', '600', '700', '800'],
      lists: ['bare', 'unordered', 'ordered'],

    };
  },
};
</script>

<style>

</style>
