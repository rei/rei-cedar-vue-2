<template>
  <div>
    <h2>subheading</h2>
    <div data-backstop="subheadings">
      <cdr-heading
        level="1"
        modifier="subheading">Subeading Level 1</cdr-heading>
      <cdr-heading
        level="2"
        modifier="subheading">Subeading Level 2</cdr-heading>
      <cdr-heading
        level="3"
        modifier="subheading">Subeading Level 3</cdr-heading>
      <cdr-heading
        level="4"
        modifier="subheading">Subeading Level 4</cdr-heading>
      <cdr-heading
        level="5"
        modifier="subheading">Subeading Level 5</cdr-heading>
      <cdr-heading
        level="6"
        modifier="subheading">Subeading Level 6</cdr-heading>
    </div>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'Subheadings',
  components: Components,
};
</script>
