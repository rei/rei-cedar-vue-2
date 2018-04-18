<template>
  <div class="icon-examples">
    <h2>Icons</h2>
    <cdr-icon-sprite/>
    <icon-account-profile data-backstop="cdr-icon-add" />

    <h3>Default icon size</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="10"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div>
          <div class="cdr-text-center">
            <svg :is="key" />
            <p>{{ key }}</p>
          </div>
          <div class="cdr-text-center">
            <cdr-icon>
              <use :href="`#${getSpriteId(key)}`" />
            </cdr-icon>
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
      cols-lg="10"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            modifier="sm"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Large icon size</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="10"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            modifier="lg"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>

  </div>
</template>

<script>
import Components from 'componentsdir/_index';

import * as Icons from 'componentsdir/icon/dist/cdr-icon';

export default {
  name: 'Icons',
  components: {
    ...Components,
    ...Icons,
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
</style>
