<template>
  <div class="icon-examples">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Icons
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Default icon size
    </cdr-text>
    <icon-account-profile
      data-backstop="cdr-icon-hover"
      class="icon-hover"
    />
    <cdr-icon
      use="#account-profile"
      class="icon-hover"
    />

    <hr class="icon-hr">

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in filteredIcons"
        :key="key"
      >
        <div>
          <div class="cdr-text-center">
            <svg :is="key" />
            <cdr-text>{{ key }}</cdr-text>
          </div>
          <div class="cdr-text-center">
            <cdr-icon :use="`#${getSpriteId(key)}`" />
            <cdr-text>using sprite</cdr-text>
          </div>
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Small icon size
    </cdr-text>
    <hr class="icon-hr">

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in filteredIcons"
        :key="key"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="small"
          />
          <cdr-text>{{ key }}</cdr-text>
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Large icon size
    </cdr-text>
    <hr class="icon-hr">

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in filteredIcons"
        :key="key"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="large"
          />
          <cdr-text>{{ key }}</cdr-text>
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text tag="h3">
      Responsive icon size
    </cdr-text>
    <hr class="icon-hr">

    <cdr-text tag="h4">
      Grow with screen width
    </cdr-text>
    <cdr-icon
      use="#account-profile"
      size="small@xs large@md large@lg"
    />
    <hr class="icon-hr">
    <cdr-text tag="h4">
      Inverse Grow
    </cdr-text>
    <cdr-icon
      use="#account-profile"
      size="large@xs small@md small@lg"
    />
    <hr class="icon-hr">
    <cdr-text tag="h4">
      Container with pink fill color
    </cdr-text>
    <div class="inherit-container">
      <cdr-row cols="2">
        <cdr-col>
          <span>Icon with inherit-color</span>
          <cdr-icon
            use="#account-profile"
            inherit-color
          />
        </cdr-col>
        <cdr-col>
          <span>Icon WITHOUT inherit-color</span>
          <cdr-icon
            use="#account-profile"
          />
        </cdr-col>
      </cdr-row>
    </div>
    <hr class="icon-hr">
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

import * as Icons from 'componentsdir/icon/dist/cdr-icon';

export default {
  name: 'Icons',
  components: {
    ...Icons,
    ...Components,
  },
  data() {
    return {
      Icons,
    };
  },
  computed: {
    filteredIcons() {
      const notAllowed = ['CdrIcon', 'CdrIconSprite'];
      return Object.keys(this.Icons)
        .filter(key => !notAllowed.includes(key))
        .reduce((obj, key) => ({
          ...obj,
          [key]: this.Icons[key],
        }), {});
    },
  },
  methods: {
    getSpriteId(name) {
      return name.replace('Icon', '').replace(/([a-zA-Z])([A-Z0-9])/g, '$1-$2').toLowerCase();
    },
  },
};
</script>

<style>
  .icon-examples {
    line-height: 1;

    .icon-hover:hover {
      fill: red;
    }
  }

  .inherit-container {
    fill: pink;
    border: 2px solid pink;
  }

  .icon-hr {
    margin: 0.5em 0;
    border-style: inset;
    border-width: 1px;
    border-color: black;
  }
</style>
