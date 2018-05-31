<template>
  <div
    id="app"
    class="cdr-container-fluid"
  >
    <h1>Cedar Proving grounds</h1>
    <router-link to="buttons">Buttons</router-link>
    <router-link to="grids">Grids</router-link>
    <router-link to="cards">Cards</router-link>
    <router-link to="checkboxes">Checkboxes</router-link>
    <router-link to="icons">Icons</router-link>
    <router-link to="images">Images</router-link>
    <router-link to="links">Links</router-link>
    <router-link to="lists">Lists</router-link>
    <router-link to="mediaobjects">Media Objects</router-link>
    <router-link to="quotes">Quotes</router-link>
    <router-link to="ratings">Ratings</router-link>
    <router-link to="radios">Radios</router-link>
    <router-link to="selects">Selects</router-link>
    <router-link to="texts">Texts</router-link>
    <router-link to="activitycards">Activity Cards</router-link>
    <router-link to="captions">Captions</router-link>
    <router-link to="searches">Searches</router-link>
    <links
      class="cpg-section"
      data-backstop="links"
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
      data-backstop="cta-buttons"
    />
    <icon-only-buttons
      class="cpg-section"
      data-backstop="icon-only-buttons"
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
    <router-view />
  </div>
</template>

<script>
import examples from 'componentsdir/examples';
import compexamples from 'compositionsdir/examples';

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
</style>
