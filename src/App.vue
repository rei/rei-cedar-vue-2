<template>
  <div id="app" class="container-fluid">
    <cdr-heading :level="1" class="test">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="2">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="3">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="4">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="5">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="6">Heading</cdr-heading>
    <cdr-heading :level="2" :appearance="1">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="2">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="3">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="4">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="5">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="6">Heading 2</cdr-heading>
    <test data-backstop="test"></test>

    <cdr-card className="cdr-card">
      <cdr-a data-backstop="cdr-link" href="https://www.google.com/">An example link</cdr-a>
    </cdr-card>
    <cdr-card className="cdr-card cdr-bg--dark-20">
      <cdr-a data-backstop="cdr-link--contrast" href="https://www.google.com/" :modifier="['contrast']">An example contrast link</cdr-a>
    </cdr-card>
    <cdr-card className="cdr-card cdr-bg--dark-20">
      <cdr-a data-backstop="cdr-link--overlay" href="https://www.google.com/" :modifier="['overlay']">An example overlay link</cdr-a>
    </cdr-card>
    <cdr-card className="cdr-card">
      <cdr-a data-backstop="cdr-link--standalone" href="https://www.google.com/" :modifier="['standalone']">An example standalone link</cdr-a>
    </cdr-card>

    <cdr-card className="cdr-card">
       <cdr-button disabled data-backstop="cdr-button disabled">Disabled</cdr-button>
    </cdr-card>
    <cdr-button theme="red">Red Theme</cdr-button>
    <cdr-button theme="red" :modifier="['small']">Red Theme (small)</cdr-button>
    <cdr-card className="cdr-button-group">
      <cdr-button data-backstop="cdr-button" type="submit">Primary large</cdr-button>
      <cdr-button data-backstop="cdr-button--small" :type="'submit'" :modifier="['small']">Primary small</cdr-button>
      <cdr-button  data-backstop="cdr-button--extra-small" :modifier="['extra-small']">Primary extra small</cdr-button>
    </cdr-card>
    <cdr-card className="cdr-button-group">
      <cdr-button data-backstop="cdr-button--secondary" :modifier="['secondary']">Secondary large</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary--small" :modifier="['secondary', 'small']">Secondary small</cdr-button>
      <cdr-button  data-backstop="cdr-button--secondary--extra-small" :modifier="['secondary', 'extra-small']">Secondary extra small</cdr-button>
    </cdr-card>
    <cdr-card className="cdr-button-group">
      <cdr-button data-backstop="cdr-button--alternate" :modifier="['alternate']">Black alternate large</cdr-button>
      <cdr-button data-backstop="cdr-button--alternate--small" :modifier="['alternate', 'small']">Black alternate small</cdr-button>
      <cdr-button data-backstop="cdr-button--alternate--extra-small" :modifier="['alternate', 'extra-small']">Black alternate extra small</cdr-button>
    </cdr-card>
    <cdr-card className="cdr-card cdr-button-group cdr-bg--dark-20">
      <cdr-button data-backstop="cdr-button--secondary-alternate" :modifier="['secondary-alternate']">White alternate large</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary-alternate--small" :modifier="['secondary-alternate', 'small']">White alternate small</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary-alternate--extra-small" :modifier="['secondary-alternate', 'extra-small']">White alternate extra small</cdr-button>
    </cdr-card>
    <cdr-card className="cdr-card">
    <p> Buttons with hrefs </p>
      <cdr-button data-backstop="cdr-button--link" href="https://www.google.com/" target="_blank">Link Button component - link option</cdr-button>
      <cdr-button data-backstop="cdr-button--link-standalone" href="https://www.google.com/" target="_blank" :modifier="['standalone']" >Button component - standalone link option</cdr-button>
      <p> Buttons without hrefs</p>
      <cdr-button data-backstop="cdr-button--link-none-link" :modifier="['link']">Link Button component - link option</cdr-button>
      <cdr-button data-backstop="cdr-button--link-standalone-none-link" :modifier="['standalone']" >Button component - standalone link option</cdr-button>
    </cdr-card>

    <grid></grid>
  </div>
</template>

<script>
  import Components from './components/_index';
  // extra stuff for testing
  import test from './examples/testing/Test';
  import grid from './examples/grid/Grid';

  Components.test = test;
  Components.grid = grid;
  // end extra

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
