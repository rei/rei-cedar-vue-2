<template>
  <div class="accordion-container">
    <h2>Accordion</h2>
    <div class="accordion-group">
      <h3>Default style</h3>
      <cdr-accordion-group
        :show="true"
      >
        <cdr-accordion
          id="default"
          label="A short label"
        >
          This is some text. It's not in a <strong>paragraph</strong> element because
          that would include margin and add space to the container.
        </cdr-accordion>
        <cdr-accordion
          id="default-long-label"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
        >
          <ul>
            <li>This is a list item inside an accordion.</li>
            <li>It includes no extra styling</li>
            <li>I'm adding a bunch of items</li>
            <li>to this list because</li>
            <li>I want to see what it's like</li>
            <li>when animated!</li>
          </ul>
        </cdr-accordion>
      </cdr-accordion-group>
    </div>
    <div class="accordion-group">
      <h3>Compact</h3>
      <cdr-accordion-group
        :compact="true"
      >
        <cdr-accordion
          id="compact"
          label="Compact label"
        >
          This is the compact style. It has smaller font-size and spacing.
        </cdr-accordion>
        <cdr-accordion
          id="compact-2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
        >
          It also makes the icon smaller to match.
        </cdr-accordion>
      </cdr-accordion-group>
    </div>
    <div class="accordion-group">
      <h3>Border-Aligned</h3>
      <cdr-accordion-group>
        <cdr-accordion
          id="border-aligned"
          label="It's another label"
          modifier="border-aligned"
        >
          You can see the button extends outside its container if when you hover.
        </cdr-accordion>
        <cdr-accordion
          id="border-aligned-2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
          modifier="border-aligned border-last"
        >
          This is some text inside.
        </cdr-accordion>
      </cdr-accordion-group>
    </div>
    <div class="accordion-group">
      <h3>Border-aligned and compact</h3>
      <cdr-accordion-group>
        <cdr-accordion
          id="border-aligned-compact"
          label="Border-aligned and compact"
          :compact="true"
          modifier="border-aligned">
          It helps to see at least two accordions together.
        </cdr-accordion>
        <cdr-accordion
          id="border-aligned-compact-2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
          :compact="true"
          modifier="border-aligned">
          Some text inside, should align to the label above.
        </cdr-accordion>
      </cdr-accordion-group>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Accordion',
  components: Components,
};
</script>

<style>
.accordion-container h2,
.accordion-group h3 {
  margin-bottom: 10px;
}

/*
.accordion-group h3 {
  margin-bottom: 10px;
}
*/

.accordion-group {
  margin-bottom: 30px;
}
</style>
