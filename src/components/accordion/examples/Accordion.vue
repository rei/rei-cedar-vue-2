<template>
  <div class="accordion-container">
    <h2>Accordion</h2>
    <div class="accordion-group">
      <h3>Default</h3>
      <cdr-accordion
        data-backstop="accordion-default"
      >
        <cdr-accordion-item
          id="default"
          label="A short label"
        >
          This is some text. It's not in a <strong>paragraph</strong> element because
          that would include margin and add space to the container. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed dictum fermentum tortor posuere
          fermentum. Sed interdum vel urna at tempor. Nullam vel sapien odio. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce venenatis ex ut ultricies tincidunt. Suspendisse potenti.
          Sed ut euismod mi, sit amet porta augue. Proin dictum laoreet blandit. Nulla
          tempus tellus id ligula sodales ultrices. Proin lacus diam, ornare at libero
          nec, eleifend vulputate mi. Praesent vestibulum accumsan erat id dapibus.
          Suspendisse ut laoreet nunc, et tempor eros. Etiam vel commodo velit. Proin
          egestas fringilla elit et lacinia. Praesent et vehicula massa. Fusce ac purus neque.
        </cdr-accordion-item>
        <cdr-accordion-item
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
        </cdr-accordion-item>
      </cdr-accordion>
    </div>
    <div class="accordion-group">
      <h3>Compact</h3>
      <cdr-accordion-item
        id="compact"
        label="Compact"
      >
        <ul>
          <li>
            <a
              href="https://www.rei.com/"
            >
              REI.com
            </a>
          </li>
          <li>
            <a
              href="https://www.rei.com/h/adventure-projects"
            >
              adventure projects
            </a>
          </li>
          <li>
            <a
              href="https://www.rei.com/stewardship"
            >
              stewardship
            </a>
          </li>
        </ul>
      </cdr-accordion-item>
      <cdr-accordion-item
        id="compact-2"
        label="Label with multiple words, so many words in fact that
        this content may wrap to several lines"
      >
        <cdr-list tag="ol">
          <li>Item one</li>
          <li>Item two</li>
          <li>Hopefully right font size</li>
        </cdr-list>
      </cdr-accordion-item>
    </div>
    <div class="accordion-group">
      <h3>Border-Aligned</h3>
      <cdr-accordion
        :border-aligned="true"
        data-backstop="accordion-border-aligned"
      >
        <cdr-accordion-item
          id="border-aligned"
          label="Border-aligned"
        >
          It helps to see at least two accordions together.
        </cdr-accordion-item>
        <cdr-accordion-item
          id="border-aligned-2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
        >
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
  data() {
    return {
      tabindex: -1,
    };
  },
  provide() {
    return {
      compact: true,
      borderAligned: false,
      showAll: false,
    };
  },
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
