<template>
  <div
    id="app"
    class="cdr-container-fluid"
  >
    <h1>Cedar Proving grounds</h1>
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path">{{ route.name }} *
    </router-link>

    <links
      class="cpg-section"
      data-backstop="links"
    />
    <accordion
      class="cpg-section"
      data-backstop="accordion"
    />
    <breadcrumb
      class="cpg-section"
      data-backstop="breadcrumbs"
    />
    <buttons
      class="cpg-section"
      data-backstop="buttons"
    />
    <cta
      class="cpg-section"
      data-backstop="cta-links"
    />
    <cards class="cpg-section"/>
    <!-- <card-content class="cpg-section"></card-content> -->
    <activity class="cpg-section"/>
    <checkboxes
      class="cpg-section"
      data-backstop="checkboxes"
    />
    <grid class="cpg-section"/>
    <texts class="cpg-section"/>
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
    <quote-example
      class="cpg-section"
      data-backstop="quote"
    />
    <ratings
      class="cpg-section"
      data-backstop="ratings"
    />
    <selects
      class="cpg-section"
      data-backstop="selects"
    />
    <utilities class="cpg-section"/>

    <caption-example
      class="cpg-section"
      data-backstop="caption"
    />

    <tables />
    <router-view />
  </div>
</template>

<script>
import examples from 'componentsdir/examples';
import compexamples from 'compositionsdir/examples';
import routes from './router';

const all = Object.assign({}, examples, compexamples);
export default {
  name: 'App',
  components: all,
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped>
  .cpg-section {
    margin: 16px 0;
  }
</style>
