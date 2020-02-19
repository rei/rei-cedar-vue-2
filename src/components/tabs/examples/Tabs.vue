<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="tab-demo-section">
      <cdr-text
        tag="h2"
        modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
      >
        Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        data-backstop="tab-default"
        :active-tab="1"
        aria-disabled="true"
      >
        <cdr-tab-panel name="Tab1">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="Tab2"
          :disabled="true"
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
        <cdr-tab-panel name="REALLY REALLY LARGE TAB NAME">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="4">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="Five">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="Six">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Six Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Compact Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Compact Tabs
      </cdr-text>
      <cdr-tabs size="small" :active-tab="1" aria-disabled="true">
        <cdr-tab-panel name="one" :disabled="true">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="two" :disabled="true">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Full Width Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Full Width Tabs
      </cdr-text>
      <cdr-tabs modifier="full-width" aria-disabled="true">
        <cdr-tab-panel
          name="one"
          id="full-width-one"
          :disabled="true"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="two"
          id="full-width-two"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="three"
          id="full-width-three"
        >
          <cdr-text
            tag="h1"
            modifier="display-600 display-700@md display-900@lg"
          >tab three content</cdr-text>
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            <cdr-text>What's a rerun? Hey, hey listen guys. Look, I don't wanna mess with no reefer addicts, okay? Whoa, whoa, kid, kid, stop, stop, stop, stop. Leave me alone. Oh, thank you, thank you. Okay now, we run some industrial strength electrical cable from the top of the clocktower down to spreading it over the street between two lamp posts. Meanwhile, we out-fitted the vehicle with this big pole and hook which runs directly into the flux-capacitor. At the calculated moment, you start off from down the street driving toward the cable execrating to eighty-eight miles per hour. According to the flyer, at !0:04 pm lightning will strike the clocktower sending one point twenty-one gigawatts into the flux-capacitor, sending you back to 1985. Alright now, watch this. You wind up the car and release it, I'll simulate the lightening. Ready, set, release. Huhh.

              I have a feeling too. What? Well, I figured, what the hell. Alright, we're the pinheads. C'mon.

              Yeah, well, I still don't understand what Dad was doing in the middle of the street. Right. Lou, gimme a milk, chocolate. Lorraine, my density has popped me to you. Great good, good, Lorraine, I had a feeling about you two. Right. Well, Marty, I want to thank you for all your good advise, I'll never forget it.</cdr-text>
            <cdr-text
              tag="h1"
              modifier="display-600 display-700@md display-900@lg"
            >tab three content</cdr-text>
            Tab Two Content
            <cdr-text>What's a rerun? Hey, hey listen guys. Look, I don't wanna mess with no reefer addicts, okay? Whoa, whoa, kid, kid, stop, stop, stop, stop. Leave me alone. Oh, thank you, thank you. Okay now, we run some industrial strength electrical cable from the top of the clocktower down to spreading it over the street between two lamp posts. Meanwhile, we out-fitted the vehicle with this big pole and hook which runs directly into the flux-capacitor. At the calculated moment, you start off from down the street driving toward the cable execrating to eighty-eight miles per hour. According to the flyer, at !0:04 pm lightning will strike the clocktower sending one point twenty-one gigawatts into the flux-capacitor, sending you back to 1985. Alright now, watch this. You wind up the car and release it, I'll simulate the lightening. Ready, set, release. Huhh.

              I have a feeling too. What? Well, I figured, what the hell. Alright, we're the pinheads. C'mon.

              Yeah, well, I still don't understand what Dad was doing in the middle of the street. Right. Lou, gimme a milk, chocolate. Lorraine, my density has popped me to you. Great good, good, Lorraine, I had a feeling about you two. Right. Well, Marty, I want to thank you for all your good advise, I'll never forget it.</cdr-text>
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="four"
          id="full-width-four"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="five"
          id="full-width-five"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- No Border Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        No Border Tabs
      </cdr-text>
      <cdr-tabs modifier="no-border">
        <cdr-tab-panel
          name="one"
          id="no-border-one"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="two"
          id="no-border-two"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="three"
          id="no-border-three"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="four"
          id="no-border-four"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="five"
          id="no-border-five"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- Center Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Centered Tabs
      </cdr-text>
      <cdr-tabs modifier="centered">
        <cdr-tab-panel
          name="one"
          id="centered-one"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="two"
          id="centered-two"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="three"
          id="centered-three"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="four"
          id="centered-four"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel
          name="five"
          id="centered-five"
        >
          <cdr-text
            tag="strong"
            modifier="subheading"
          >
            Tab Five Content
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
};
</script>

<style>
  .tab-demo-section {
    text-align: center;
    padding-top: 25px;
  }
</style>
