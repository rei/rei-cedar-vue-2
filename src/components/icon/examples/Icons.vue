<template>
  <div
    class="icon-examples"
    data-backstop="icons"
  >
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

    <hr class="icon-hr">
    <cdr-text tag="h4">
      Container with pink fill color
    </cdr-text>
    <div class="inherit-container">
      <cdr-row cols="2">
        <cdr-col>
          <div>
            <span>Icon with inherit-color</span>
            <cdr-icon
              use="#account-profile"
              inherit-color
            />
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <span>Icon WITHOUT inherit-color</span>
            <cdr-icon
              use="#account-profile"
            />
          </div>
        </cdr-col>
      </cdr-row>
    </div>
    <hr class="icon-hr">
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import * as Icons from 'componentsdir/icon/build/main';


export default {
  name: 'Icons',
  components: {
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

<style lang="scss">
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
