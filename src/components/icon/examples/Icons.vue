<template>
  <div class="icon-examples">
    <h2>Icons</h2>
    <cdr-icon
      name="account-profile"
      data-backstop="cdr-icon-add"
    />

    <h3>Default icon size</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col
        v-for="(svg, name) in icons"
        :key="name"
      >
        <div>
          <div class="cdr-text-center">
            <cdr-icon
              :name="name"
            />
            <p>{{ name }}</p>
          </div>
          <div class="cdr-text-center">
            <cdr-icon
              :url="`${sprite}#${name}`"
            />
            <p>using sprite</p>
          </div>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Small icon size</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col
        v-for="(svg, name) in icons"
        :key="name"
      >
        <div class="cdr-text-center">
          <cdr-icon
            :name="name"
            modifier="sm"
          />
          <p>{{ name }}</p>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Large icon size</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col
        v-for="(svg, name) in icons"
        :key="name"
      >
        <div class="cdr-text-center">
          <cdr-icon
            :name="name"
            modifier="lg"
          />
          <p>{{ name }}</p>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>External Icons</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col>
        <div class="icon-example">
          <cdr-icon
            :raw="EAicon"
          />
          <p>EA Camping</p>
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

const icons = require('@rei/cdr-assets/dist/icons.json');
const EAicon = require('assetsdir/icons/ea/ea-camping.svg');
const sprite = require('@rei/cdr-assets/dist/cdr-icons.svg');

export default {
  name: 'Icons',
  components: Components,
  data() {
    return {
      icons,
      EAicon,
      sprite,
    };
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
</style>
