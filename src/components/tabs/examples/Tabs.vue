<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="tab-demo-section">
      <h2>Tabs</h2>
      <cdr-tabs height="100px">
        <cdr-tab-panel name="Tab1">
          <h1>Tab One Content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Tab2">
          <h1>
            Tab Two Content
            <p>What's a rerun? Hey, hey listen guys. Look, I don't wanna mess with no reefer addicts, okay? Whoa, whoa, kid, kid, stop, stop, stop, stop. Leave me alone. Oh, thank you, thank you. Okay now, we run some industrial strength electrical cable from the top of the clocktower down to spreading it over the street between two lamp posts. Meanwhile, we out-fitted the vehicle with this big pole and hook which runs directly into the flux-capacitor. At the calculated moment, you start off from down the street driving toward the cable execrating to eighty-eight miles per hour. According to the flyer, at !0:04 pm lightning will strike the clocktower sending one point twenty-one gigawatts into the flux-capacitor, sending you back to 1985. Alright now, watch this. You wind up the car and release it, I'll simulate the lightening. Ready, set, release. Huhh.

            I have a feeling too. What? Well, I figured, what the hell. Alright, we're the pinheads. C'mon.

            Yeah, well, I still don't understand what Dad was doing in the middle of the street. Right. Lou, gimme a milk, chocolate. Lorraine, my density has popped me to you. Great good, good, Lorraine, I had a feeling about you two. Right. Well, Marty, I want to thank you for all your good advise, I'll never forget it.</p>
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="REALLY REALLY LARGE TAB NAME">
          <h1>
            Tab Three Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="4">
          <h1>
            Four Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Five">
          <h1>
            Tab Five Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Six">
          <h1>
            Tab Six Content
          </h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Compact Modifier -->
    <div class="tab-demo-section">
      <h2>Compact Tabs</h2>
      <cdr-tabs modifier="compact">
        <cdr-tab-panel name="one">
          <h1>tab one content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <h1>tab five content</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Full Width Modifier -->
    <div class="tab-demo-section">
      <h2>Full Width Tabs</h2>
      <cdr-tabs modifier="full-width">
        <cdr-tab-panel name="one">
          <h1>tab one content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <h1>tab five content</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- No Border Modifier -->
    <div class="tab-demo-section">
      <h2>No Border Tabs</h2>
      <cdr-tabs modifier="no-border">
        <cdr-tab-panel name="one">
          <h1>tab one content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <h1>tab five content</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'TabsExample',
  components: { ...Components },
};
</script>

<style>
  .tab-demo-section {
    text-align: center;
    height: 150px;
    padding-top: 25px;
  }

  .tab-demo-section > h2 {
    text-align: left;
  }
</style>
