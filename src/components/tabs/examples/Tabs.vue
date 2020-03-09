<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="tab-demo-section">
      <cdr-text
        tag="h2"
        modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
        class="cdr-align-text-center"
      >
        Tabs
      </cdr-text>
      <cdr-tabs
        height="300px"
        data-backstop="tab-default"
        :active-tab="1"
      >
        <cdr-tab-panel
          name="Tab1"
          id="tab-panel-default-1"
          aria-labelled-by="tab-default-1"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="Tab2"
          id="tab-panel-default-2"
          aria-labelled-by="tab-default-2"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            <cdr-text>What's a rerun? Hey, hey listen guys. Look, I don't wanna mess with no reefer addicts, okay? Whoa, whoa, kid, kid, stop, stop, stop, stop. Leave me alone. Oh, thank you, thank you. Okay now, we run some industrial strength electrical cable from the top of the clocktower down to spreading it over the street between two lamp posts. Meanwhile, we out-fitted the vehicle with this big pole and hook which runs directly into the flux-capacitor. At the calculated moment, you start off from down the street driving toward the cable execrating to eighty-eight miles per hour. According to the flyer, at !0:04 pm lightning will strike the clocktower sending one point twenty-one gigawatts into the flux-capacitor, sending you back to 1985. Alright now, watch this. You wind up the car and release it, I'll simulate the lightening. Ready, set, release. Huhh.

              I have a feeling too. What? Well, I figured, what the hell. Alright, we're the pinheads. C'mon.

              Yeah, well, I still don't understand what Dad was doing in the middle of the street. Right. Lou, gimme a milk, chocolate. Lorraine, my density has popped me to you. Great good, good, Lorraine, I had a feeling about you two. Right. Well, Marty, I want to thank you for all your good advise, I'll never forget it.</cdr-text>
            Tab Two Content
            <cdr-text>What's a rerun? Hey, hey listen guys. Look, I don't wanna mess with no reefer addicts, okay? Whoa, whoa, kid, kid, stop, stop, stop, stop. Leave me alone. Oh, thank you, thank you. Okay now, we run some industrial strength electrical cable from the top of the clocktower down to spreading it over the street between two lamp posts. Meanwhile, we out-fitted the vehicle with this big pole and hook which runs directly into the flux-capacitor. At the calculated moment, you start off from down the street driving toward the cable execrating to eighty-eight miles per hour. According to the flyer, at !0:04 pm lightning will strike the clocktower sending one point twenty-one gigawatts into the flux-capacitor, sending you back to 1985. Alright now, watch this. You wind up the car and release it, I'll simulate the lightening. Ready, set, release. Huhh.

              I have a feeling too. What? Well, I figured, what the hell. Alright, we're the pinheads. C'mon.

              Yeah, well, I still don't understand what Dad was doing in the middle of the street. Right. Lou, gimme a milk, chocolate. Lorraine, my density has popped me to you. Great good, good, Lorraine, I had a feeling about you two. Right. Well, Marty, I want to thank you for all your good advise, I'll never forget it.</cdr-text>
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="REALLY REALLY LARGE TAB NAME"
          id="tab-panel-default-3"
          aria-labelled-by="tab-default-3"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="4"
          id="tab-panel-default-4"
          aria-labelled-by="tab-default-4"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="Five"
          id="tab-panel-default-5"
          aria-labelled-by="tab-default-5"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="Six"
          id="tab-panel-default-6"
          aria-labelled-by="tab-default-6"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Six Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

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
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-small-' + tab"
          :aria-labelled-by="'tab-small-' + tab"
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
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-full-width-' + tab"
          :aria-labelled-by="'tab-full-width-' + tab"
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
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-no-border-' + tab"
          :aria-labelled-by="'tab-no-border-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
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
        Centered
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="centered"
      >
        <cdr-tab-panel
          v-for="tab in tabs"
          :key="tab"
          :name="tab"
          :id="'tab-panel-centered-' + tab"
          :aria-labelled-by="'tab-centered-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'TabsExample',
  components: { ...Components },
  data() {
    return {
      tabs: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
    };
  },
};
</script>

<style>
  .tab-demo-section {
    margin-bottom: 30px;
  }
</style>
