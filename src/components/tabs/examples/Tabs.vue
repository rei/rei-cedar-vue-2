<template>
  <!-- eslint-disable max-len -->
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
      class="cdr-align-text-center"
    >
      Tabs
    </cdr-text>

    <tabs-default :background-color="backgroundColor" />

    <!-- small -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Small Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        size="small"
        :background-color="backgroundColor"
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-small-' + tab"
          :aria-labelledby="'tab-small-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- full-width -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Full-Width Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="full-width"
        :background-color="backgroundColor"
      >
        <cdr-tab-panel
          v-for="tab in tabs"
          :key="tab"
          :name="tab"
          :id="'tab-panel-full-width-' + tab"
          :aria-labelledby="'tab-full-width-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- No-border -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        No Border Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="no-border"
        :background-color="backgroundColor"
      >
        <cdr-tab-panel
          v-for="tab in tabs"
          :key="tab"
          :name="tab"
          :id="'tab-panel-no-border-' + tab"
          :aria-labelledby="'tab-no-border-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- auto -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Auto Height Tabs
      </cdr-text>
      <cdr-tabs
        height="auto"
        :background-color="backgroundColor"
      >
        <cdr-tab-panel
          name="short tab"
          id="tab-panel-auto-short"
          aria-labelledby="tab-auto-short"
        >
          <cdr-text
            modifier="body-300"
          >
            short tab content
          </cdr-text>
        </cdr-tab-panel>


        <cdr-tab-panel
          name="tall tab"
          id="tab-panel-auto-tall"
          aria-labelledby="tab-auto-tall"
        >
          <cdr-text
            modifier="body-300"
          >
            tall tab content. look at it go. wow, so much content.
            letters, punctuation, spaces, all together in one tab.
            what more could you ask for. in awe at this tab.
            look at how the height of it's container adjusts to fit all of the content within it.
            Magical, truly magical. The things you can do with CSS these days i tell ya.
            Just imagine all the hyper text markup that can be styled with sheets that cascade!
            The possibilities for displaying content to users of the world wide web are boundless!
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- Centered -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Centered Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="centered"
        :background-color="backgroundColor"
      >
        <cdr-tab-panel
          v-for="tab in tabs"
          :key="tab"
          :name="tab"
          :id="'tab-panel-centered-' + tab"
          :aria-labelledby="'tab-centered-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>

        <cdr-tab-panel
          name="six"
          id="centered-six"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab six Content
          </cdr-text>
        </cdr-tab-panel>

        <cdr-tab-panel
          name="seven"
          id="centered-seven"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab seven Content
          </cdr-text>
        </cdr-tab-panel>

        <cdr-tab-panel
          name="eight"
          id="centered-eight"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab eight Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
  </div>
</template>

<script>
import {
  CdrColorBackgroundPrimary,
  CdrColorBackgroundSecondary,
  CdrColorBackgroundSuccess,
  CdrColorBackgroundInfo,
  CdrColorBackgroundWarning,
  CdrColorBackgroundError,
} from '@rei/cdr-tokens';
import * as Components from 'srcdir/index';
import tabsDefault from 'componentsdir/tabs/examples/demo/TabsDefault';

export default {
  name: 'TabsExample',
  components: { ...Components, tabsDefault },
  data() {
    return {
      tabs: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
      backgroundColor: CdrColorBackgroundPrimary,
    };
  },
  watch: {
    $route(to) {
      this.setBackground(to.query.background);
    },
  },
  mounted() {
    this.setBackground(this.$router.currentRoute.query.background);
  },
  methods: {
    setBackground(background) {
      switch (background) {
        case 'primary':
          this.backgroundColor = CdrColorBackgroundPrimary;
          break;
        case 'secondary':
          this.backgroundColor = CdrColorBackgroundSecondary;
          break;
        case 'success':
          this.backgroundColor = CdrColorBackgroundSuccess;
          break;
        case 'info':
          this.backgroundColor = CdrColorBackgroundInfo;
          break;
        case 'warning':
          this.backgroundColor = CdrColorBackgroundWarning;
          break;
        case 'error':
          this.backgroundColor = CdrColorBackgroundError;
          break;
        default:
          this.backgroundColor = CdrColorBackgroundPrimary;
      }
    },
  },
};
</script>

<style>
  .tab-demo-section {
    margin-bottom: 30px;
  }
</style>
