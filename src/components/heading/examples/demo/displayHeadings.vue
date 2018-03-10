<template>
  <div>
    <cdr-heading
      level="2"
      modifier="heading-lg">Display Heading</cdr-heading>
    <div data-backstop="display-headings">
      <cdr-heading
        level="1"
        modifier="display">Display Heading Level 1</cdr-heading>
      <cdr-heading
        level="2"
        modifier="display">Display Heading Level 2</cdr-heading>
      <cdr-heading
        level="3"
        modifier="display">Display Heading Level 3</cdr-heading>
      <cdr-heading
        level="4"
        modifier="display">Display Heading Level 4</cdr-heading>
      <cdr-heading
        level="5"
        modifier="display">Display Heading Level 5</cdr-heading>
      <cdr-heading
        level="6"
        modifier="display">Display Heading Level 6</cdr-heading>
    </div>
    <cdr-heading
      level="2"
      modifier="heading-lg">Display Heading disable-responsive</cdr-heading>
    <div data-backstop="display-headings-disable-responsive">
      <cdr-heading
        level="1"
        modifier="display"
        disable-responsive>Display Heading Level 1, disable-responsive</cdr-heading>
      <cdr-heading
        level="2"
        modifier="display"
        disable-responsive>Display Heading Level 2, disable-responsive</cdr-heading>
      <cdr-heading
        level="3"
        modifier="display"
        disable-responsive>Display Heading Level 3, disable-responsive</cdr-heading>
      <cdr-heading
        level="4"
        modifier="display"
        disable-responsive>Display Heading Level 4, disable-responsive</cdr-heading>
      <cdr-heading
        level="5"
        modifier="display"
        disable-responsive>Display Heading Level 5, disable-responsive</cdr-heading>
      <cdr-heading
        level="6"
        modifier="display"
        disable-responsive>Display Heading Level 6, disable-responsive</cdr-heading>
    </div>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'Display',
  components: Components,
};
</script>
