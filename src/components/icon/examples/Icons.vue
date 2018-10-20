<template>
  <div class="icon-examples">
    <cdr-text
      tag="h2"
      modifier="heading-small">
      Icons
    </cdr-text>
    <cdr-icon-sprite/>
    <icon-account-profile data-backstop="cdr-icon-add" />

    <cdr-text
      tag="h2"
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
            modifier="sm"
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
            modifier="lg"
          />
          <cdr-text>{{ key }}</cdr-text>
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
</style>
