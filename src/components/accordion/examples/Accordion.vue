<template>
  <div class="accordion-container">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Accordion
    </cdr-text>
    <div class="accordion-group">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Default
      </cdr-text>
      <cdr-accordion-item
        id="default"
      >
        <template slot="label">
          A short label
        </template>
        <cdr-text>
          This is some text. It's in a
          <strong>cdr-text paragraph</strong> element as
          thats how you assign the correct font and line-height for text dislpay on REI.
          does not include margin or add space to the container. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed dictum fermentum tortor posuere
          fermentum. Sed interdum vel urna at tempor. Nullam vel sapien odio. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce venenatis ex ut ultricies tincidunt. Suspendisse potenti.
          Sed ut euismod mi, sit amet porta augue. Proin dictum laoreet blandit. Nulla
          tempus tellus id ligula sodales ultrices. Proin lacus diam, ornare at libero
          nec, eleifend vulputate mi. Praesent vestibulum accumsan erat id dapibus.
          Suspendisse ut laoreet nunc, et tempor eros. Etiam vel commodo velit. Proin
          egestas fringilla elit et lacinia. Praesent et vehicula massa. Fusce ac purus neque.
        </cdr-text>
      </cdr-accordion-item>
      <cdr-accordion-item
        id="default-long-label"
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
      </cdr-accordion-item>
      <!-- </cdr-accordion> -->
    </div>
    <div class="accordion-group">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Compact
      </cdr-text>
      <cdr-accordion-item
        id="compact"
        label="Compact"
        data-backstop="accordion-compact"
        :compact="true"
      >
        <cdr-list modifier="unordered">
          <li>
            <cdr-link
              href="https://www.rei.com/"
            >
              REI.com
            </cdr-link>
          </li>
          <li>
            <cdr-link
              href="https://www.rei.com/h/adventure-projects"
            >
              adventure projects
            </cdr-link>
          </li>
          <li>
            <cdr-link
              href="https://www.rei.com/stewardship"
            >
              stewardship
            </cdr-link>
          </li>
        </cdr-list>
      </cdr-accordion-item>
      <cdr-accordion-item
        id="compact-2"
        label="Label with multiple words, so many words in fact that
        this content may wrap to several lines"
        :compact="true"
      >
        <cdr-list tag="ol">
          <li>Item one</li>
          <li>Item two</li>
          <li>Hopefully right font size</li>
        </cdr-list>
      </cdr-accordion-item>
    </div>
    <div class="accordion-group">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Border-Aligned
      </cdr-text>
      <!-- <cdr-accordion
        :border-aligned="true"
        data-backstop="accordion-border-aligned"
      > -->
      <cdr-accordion-item
        id="border-aligned"
        label="Border-aligned"
        :border-aligned="true"
      >
        <cdr-text>
          It helps to see at least two accordions together.
        </cdr-text>
      </cdr-accordion-item>
      <cdr-accordion-item
        id="border-aligned-2"
        label="Label with multiple words, so many words in fact that
        this content may wrap to several lines"
        :border-aligned="true"
      >
        <cdr-text>
          Some text inside, should align to the label above.
        </cdr-text>
      </cdr-accordion-item>
      <!-- </cdr-accordion> -->
    </div>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'Accordion',
  components: Components,
  data() {
    return {
      tabindex: -1,
    };
  },
};
</script>

<style>
.accordion-group {
  margin-bottom: 30px;
}
</style>
