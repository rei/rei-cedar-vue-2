<template>
  <div>
    <cdr-button disabled data-backstop="cdr-button-disabled">Disabled</cdr-button>
    <cdr-button-group class="button-example">
      <cdr-button data-backstop="cdr-button" type="submit">Primary large</cdr-button>
      <cdr-button data-backstop="cdr-button-small" :type="'submit'" :modifier="['small']">Primary small</cdr-button>
      <cdr-button data-backstop="cdr-button-extra-small" :modifier="['extra-small']">Primary extra small</cdr-button>
    </cdr-button-group>
    <cdr-button-group class="button-example">
      <cdr-button data-backstop="cdr-button--secondary" :modifier="['secondary']">Secondary large</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary-small" :modifier="['secondary', 'small']">Secondary small</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary-extra-small" :modifier="['secondary', 'extra-small']">Secondary extra small</cdr-button>
    </cdr-button-group>
    <cdr-button-group class="button-example">
      <cdr-button data-backstop="cdr-button--alternate" :modifier="['alternate']">Black alternate large</cdr-button>
      <cdr-button data-backstop="cdr-button--alternate-small" :modifier="['alternate', 'small']">Black alternate small</cdr-button>
      <cdr-button data-backstop="cdr-button--alternate-extra-small" :modifier="['alternate', 'extra-small']">Black alternate extra small</cdr-button>
    </cdr-button-group>
    <cdr-button-group class="button-example cdr-button-group cdr-bg--dark-20">
      <cdr-button data-backstop="cdr-button--secondary-alternate" :modifier="['secondary-alternate']">White alternate large</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary-alternate-small" :modifier="['secondary-alternate', 'small']">White alternate small</cdr-button>
      <cdr-button data-backstop="cdr-button--secondary-alternate-extra-small" :modifier="['secondary-alternate', 'extra-small']">White alternate extra small</cdr-button>
    </cdr-button-group>
    <div>
      <p>Buttons with hrefs (turned into anchor)</p>
      <cdr-button data-backstop="cdr-button--link-href" href="https://www.google.com/" target="_blank">Link Button component - link option</cdr-button>
      <cdr-button data-backstop="cdr-button--link-standalone-href" href="https://www.google.com/" target="_blank" :modifier="['standalone']" >Button component - standalone link option</cdr-button>
      <p>Buttons without hrefs (link styling)</p>
      <cdr-button data-backstop="cdr-button--link" :modifier="['link']">Link Button component - link option</cdr-button>
      <cdr-button data-backstop="cdr-button--link-standalone" :modifier="['standalone']" >Button component - standalone link option</cdr-button>
    </div>
  </div>
</template>

<script>
import cdrButton from '../../components/buttons/Button';
import cdrButtonGroup from '../../components/buttons/ButtonGroup';

export default {
  name: 'buttons',
  components: { cdrButton, cdrButtonGroup },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

