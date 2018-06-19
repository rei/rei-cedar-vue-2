<template>
  <div class="accordion-container">
    <h2>Accordion</h2>
    <div class="accordion-group">
      <h3>Default - show is true</h3>
      <cdr-accordion
        :show-all="false"
      >
        <cdr-accordion-item
          id="default"
          label="A short label"
          :show="true"
        >
          This is some text. It's not in a <strong>paragraph</strong> element because
          that would include margin and add space to the container.
        </cdr-accordion-item>
        <cdr-accordion-item
          id="default-long-label"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
          modifier="border-last"
        >
          <ul>
            <li>This is a list item inside an accordion.</li>
            <li>It includes no extra styling</li>
            <li>I'm adding a bunch of items</li>
            <li>to this list because</li>
            <li>I want to see what it's like</li>
            <li>when animated!</li>
          </ul>
        </cdr-accordion-item>
      </cdr-accordion>
    </div>
    <div class="accordion-group">
      <h3>Compact and Border-aligned</h3>
      <cdr-accordion
        :compact="true"
        :border-aligned="true"
      >
        <cdr-accordion-item
          id="border-aligned-compact"
          label="Border-aligned and compact"
          modifier="border-aligned">
          It helps to see at least two accordions together.
        </cdr-accordion-item>
        <cdr-accordion-item
          id="border-aligned-compact-2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
          modifier="border-aligned">
          Some text inside, should align to the label above.
        </cdr-accordion-item>
      </cdr-accordion>
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

.accordion-group {
  margin-bottom: 30px;
}
</style>
