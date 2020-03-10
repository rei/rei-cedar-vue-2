<template>
  <!-- eslint-disable max-len -->
  <div class="tab-demo-section tabs-demo-default">
    <cdr-tabs
      height="500px"
      data-backstop="tab-default"
    >
      <cdr-tab-panel
        name="Details"
        aria-labelledby="tab-default-defails"
        id="tab-panel-default-details"
      >
        <cdr-text
          tag="h3"
          modifier="heading-serif-400"
          class="tab-title"
        >
          Details
        </cdr-text>

        <cdr-list
          modifier="unordered"
          space="cdr-mb-space-two-x"
        >
          <li>Tuckaway, spacer-mesh shoulder straps and integrated handle make carrying a breeze</li>
          <li>Back pocket holds a hydration reservoir (sold separately)</li>
          <li>Large main compartment has padded interior sleeve to hold a tablet or other device</li>
          <li>Zippered mesh organizer pocket with key fob; 2 side mesh pockets; open-topped stash pocket for jacket or other quick-use items; small front zip pocket</li>
          <li>Mesh-covered back panel has slotted foam for ventilation and breathability</li>
          <li>Attaches to a variety of compatible Osprey packs (sold separately)</li>
        </cdr-list>
      </cdr-tab-panel>
      <cdr-tab-panel
        name="Specs"
        aria-labelledby="tab-default-specs"
        id="tab-panel-default-specs"
      >
        <cdr-text
          tag="h3"
          modifier="heading-serif-400"
          class="tab-title"
        >
          Specs
        </cdr-text>
        <cdr-data-table
          modifier="compact borderless"
        >
          <template slot="tbody">
            <tr>
              <th>Best Use</th>
              <td>Hiking, Travel</td>
            </tr>
            <tr>
              <th>Bag Style</th>
              <td>Backpack</td>
            </tr>
            <tr>
              <th>Frame Type</th>
              <td>Frameless</td>
            </tr>
            <tr>
              <th>Gear Capacity (cu. in.)</th>
              <td>1,220 cubic inches</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>1 lb. 3.8 oz</td>
            </tr>
            <tr>
              <th>Pack ACcess</th>
              <td>2 + main compartments</td>
            </tr>
            <tr>
              <th>Hipbelt</th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>18 x 10 x 9 inches</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>Unisex</td>
            </tr>
          </template>
        </cdr-data-table>
      </cdr-tab-panel>
      <cdr-tab-panel
        name="Reviews"
        aria-labelledby="tab-default-reviews"
        id="tab-panel-default-reviews"
        :disabled="true"
      />
      <cdr-tab-panel
        name="Q&A"
        aria-labelledby="tab-default-Q&A"
        id="tab-panel-default-Q&A"
      >
        <cdr-text
          tag="h3"
          modifier="heading-serif-400"
          class="tab-title"
        >
          Q&A
        </cdr-text>

        <cdr-accordion
          id="default"
          :opened="accordion1"
          @accordion-toggle="accordion1 = !accordion1"
        >
          <template slot="label">
            A short label
          </template>
          <cdr-text
            modifier="body-300"
          >
            This is some text. It's in a
            <cdr-text
              tag="strong"
              modifier="body-strong-300"
            >cdr-text paragraph with a modifier of <code>body-300</code></cdr-text> element as
            thats how you assign the correct font and line-height for text dislpay on REI.
            does not include margin or add space to the container. Lorem ipsum dolor
          </cdr-text>
        </cdr-accordion>
        <cdr-accordion
          id="default-long-label"
          :opened="accordion2"
          @accordion-toggle="accordion2 = !accordion2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
        >
          <cdr-list modifier="unordered">
            <li>This is a cdr-list item inside an accordion.</li>
            <li>It includes no extra styling</li>
            <li>I'm adding a bunch of items</li>
            <li>to this list because</li>
            <li>I want to see what it's like</li>
            <li>when animated!</li>
          </cdr-list>
        </cdr-accordion>
      </cdr-tab-panel>
    </cdr-tabs>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'TabsDefault',
  components: { ...Components },
  data() {
    return {
      accordion1: false,
      accordion2: false,
    };
  },
};
</script>

<style>
  .tabs-demo-default {
    max-width: 800px;
  }

  h3.tab-title {
    margin: 20px 0;
  }
</style>
