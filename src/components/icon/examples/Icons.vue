<template>
  <div class="icon-examples">
    <cdr-text
      tag="h2"
      modifier="heading-small">
      Icons
    </cdr-text>
    <icon-account-profile data-backstop="cdr-icon-add" />

    <cdr-text
      tag="h3"
      modifier="heading-small">
      Default icon size
    </cdr-text>
    <cdr-icon use="#account-profile" />
    <hr>

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
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
      modifier="heading-small">
      Small icon size
    </cdr-text>
    <hr>

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
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
      modifier="heading-small">
      Large icon size
    </cdr-text>
    <hr>

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
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

    <h3>Responsive icon size</h3>
    <hr>

    <h6>Grow with screen width</h6>
    <cdr-icon
      use="#account-profile"
      size="small@xs large@md large@lg"
    />
    <hr>
    <h6>Inverse Grow</h6>
    <cdr-icon
      use="#account-profile"
      size="large@xs small@md small@lg"
    />
    <hr>
    <h6>Container with pink fill color</h6>
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
    <hr>
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
  methods: {
    getSpriteId(name) {
      return name.replace('Icon', '').replace(/([a-zA-Z])([A-Z0-9])/g, '$1-$2').toLowerCase();
    },
  },
};
</script>

<style>
  .icon-examples {
    .cdr-icon {
      &:hover {
        fill: red;
      }
    }
  }

  .inherit-container {
    fill: pink;
    border: 2px solid pink;
  }

</style>
