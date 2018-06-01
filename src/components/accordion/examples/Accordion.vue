<template>
  <div class="accordion-container">
    <h2>Accordion</h2>
    <cdr-accordion
      id="darin"
      label="Label with multiple words, so many words in fact that
       this content may wrap to several lines"
      :init-show="true"
    >
      This is some paragraph text. It should align on the left with the label above it.
    </cdr-accordion>
    <cdr-accordion
      id="nofx"
      label="Label with multiple words, so many words in fact that
       this content may wrap to several lines"
      :compact="true"
    >This is the inner text, yo.
    </cdr-accordion>
    <cdr-accordion
      id="something"
      label="Label with multiple words, so many words in fact that
       this content may wrap to several lines"
      modifier="border-aligned"
    >
      This is some text inside.
    </cdr-accordion>
    <cdr-accordion
      label="Label with multiple words, so many words in fact that
       this content may wrap to several lines"
      :compact="true"
      modifier="border-aligned border-last">
      Some text inside, should align to the label above.
    </cdr-accordion>
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
.accordion-container h2 {
  margin-bottom: 10px;
}
</style>
