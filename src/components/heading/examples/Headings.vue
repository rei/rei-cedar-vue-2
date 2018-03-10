<template>
  <div>
    <h2>Display Heading</h2>
    <div data-backstop="headings">
      <cdr-heading
        level="1"
        modifier="display">Display Heading Large Level 1</cdr-heading>
      <cdr-heading
        level="6"
        modifier="display">Display Heading Small Level 6</cdr-heading>
    </div>
    <h2>Headings</h2>
    <div data-backstop="headings">
      <cdr-heading
        level="1"
        modifier="heading-lg">Heading Large Level 1</cdr-heading>
      <cdr-heading
        level="2"
        modifier="heading-lg">Heading Large Level 2</cdr-heading>
      <cdr-heading
        level="3"
        modifier="heading-md">Heading Medium Level 3</cdr-heading>
      <cdr-heading
        level="4"
        modifier="heading-sm">Heading Small Level 4</cdr-heading>
      <cdr-heading
        level="5"
        modifier="heading-sm">Heading Small Level 5</cdr-heading>
      <cdr-heading
        level="6"
        modifier="heading-sm">Heading Small Level 6</cdr-heading>
    </div>
    <h2>subheading</h2>
    <div data-backstop="subheadings">
      <cdr-heading
        level="1"
        modifier="subheading">Display Heading Large Level 1</cdr-heading>
      <cdr-heading
        level="6"
        modifier="subheading">Display Heading Small Level 6</cdr-heading>
    </div>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'Headings',
  components: Components,
};
</script>
