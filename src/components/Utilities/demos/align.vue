<template>
  <div data-backstop="align-utilities">
    <cdr-text
      tag="h2"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      Text alignment classes
    </cdr-text>

    <cdr-text class="cdr-align-text-left">
      .cdr-text-left
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      left
    </cdr-text>

    <cdr-text class="cdr-align-text-left@xs">
      .cdr-align-text-left@xs
    </cdr-text>
    <cdr-text class="cdr-align-text-left@sm">
      .cdr-align-text-left@sm
    </cdr-text>
    <cdr-text class="cdr-align-text-left@md">
      .cdr-align-text-left@md
    </cdr-text>
    <cdr-text class="cdr-align-text-left@lg">
      .cdr-align-text-left@lg
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      center
    </cdr-text>

    <cdr-text class="cdr-align-text-center">
      .cdr-align-text-center
    </cdr-text>

    <cdr-text class="cdr-align-text-center@xs">
      .cdr-align-text-center@xs
    </cdr-text>
    <cdr-text class="cdr-align-text-center@sm">
      .cdr-align-text-center@sm
    </cdr-text>
    <cdr-text class="cdr-align-text-center@md">
      .cdr-align-text-center@md
    </cdr-text>
    <cdr-text class="cdr-align-text-center@lg">
      .cdr-align-text-center@lg
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      right
    </cdr-text>
    <cdr-text class="cdr-align-text-right">
      .cdr-align-text-right
    </cdr-text>

    <cdr-text class="cdr-align-text-right@xs">
      .cdr-align-text-right@xs
    </cdr-text>
    <cdr-text class="cdr-align-text-right@sm">
      .cdr-align-text-right@sm
    </cdr-text>
    <cdr-text class="cdr-align-text-right@md">
      .cdr-align-text-right@md
    </cdr-text>
    <cdr-text class="cdr-align-text-right@lg">
      .cdr-align-text-right@lg
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      justify
    </cdr-text>
    <cdr-text class="cdr-align-text-justify">
      .cdr-align-text-justify
    </cdr-text>

    <cdr-text class="cdr-align-text-justify@xs">
      .cdr-align-text-justify@xs
    </cdr-text>
    <cdr-text class="cdr-align-text-justify@sm">
      .cdr-align-text-justify@sm
    </cdr-text>
    <cdr-text class="cdr-align-text-justify@md">
      .cdr-align-text-justify@md
    </cdr-text>
    <cdr-text class="cdr-align-text-justify@lg">
      .cdr-align-text-justify@lg
    </cdr-text>

    <cdr-text
      tag="h2"
      modifier="heading--serif-600 heading--serif-700@md heading--serif-700@lg"
    >
      center-block
    </cdr-text>

    <div class="cdr-align-center-block demo-container cdr-space-inset-one-x">
      <cdr-text>
        .cdr-align-center-block
      </cdr-text>
    </div>

    <div class="cdr-align-center-block@xs demo-container cdr-space-inset-one-x">
      <cdr-text>
        .cdr-align-center-block@xs
      </cdr-text>
    </div>
    <div class="cdr-align-center-block@sm demo-container cdr-space-inset-one-x">
      <cdr-text>
        .cdr-align-center-block@sm
      </cdr-text>
    </div>
    <div class="cdr-align-center-block@md demo-container cdr-space-inset-one-x">
      <cdr-text>
        .cdr-align-center-block@md
      </cdr-text>
    </div>
    <div class="cdr-align-center-block@lg demo-container cdr-space-inset-one-x">
      <cdr-text>
        .cdr-align-center-block@lg
      </cdr-text>
    </div>
  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';

export default {
  name: 'UtilitiesAlign',
  components: {
    CdrText,
  },
};
</script>

<style>
.demo-container {
  width: 300px;
}
</style>
