<template>
  <div
    id="app"
    class="cdr-container-fluid"
  >
    <h1>Cedar Proving grounds</h1>

    <anchors
      class="cpg-section"
      data-backstop="anchors"
    />
    <buttons
      class="cpg-section"
      data-backstop="buttons"
    />
    <cards class="cpg-section"/>
    <!-- <card-content class="cpg-section"></card-content> -->
    <activity class="cpg-section"/>
    <checkboxes
      class="cpg-section"
      data-backstop="checkboxes"
    />
    <grid class="cpg-section"/>
    <headings
      class="cpg-section"
      data-backstop="headings"
    />
    <icons
      class="cpg-section"
      data-backstop="icons"
    />
    <images class="cpg-section"/>
    <searchbox
      class="cpg-section"
      data-backstop="search"
    />
    <inputs
      class="cpg-section"
      data-backstop="inputs"
    />
    <lists
      class="cpg-section"
      data-backstop="lists"
    />
    <mediaObject class="cpg-section"/>
    <mountains class="cpg-section"/>
    <radios
      class="cpg-section"
      data-backstop="radios"
    />
    <ratings
      class="cpg-section"
      data-backstop="ratings"
    />
    <selects
      class="cpg-section"
      data-backstop="selects"
    />
    <test
      class="cpg-section"
      data-backstop="test"
    />
    <utilities class="cpg-section"/>

    <cdr-heading modifier="heading-xl">I'm a heading</cdr-heading>
  </div>
</template>

<script>
import examples from 'Components/examples';
import compexamples from 'Compositions/examples';

const all = Object.assign({}, examples, compexamples);

export default {
  name: 'App',
  components: all,
};
</script>

<style scoped>
  .cpg-section {
    margin: 16px 0;
  }

  .cdr-heading-xl {
    font: $spruce-dsp-100;

    @media {
      font: $spruce-dsp-80;
    }
  }

  .spruce-dsp-100 {
    font: size, weight, line height

    @media {
      font: size, weight, line height
    }
  }
</style>
