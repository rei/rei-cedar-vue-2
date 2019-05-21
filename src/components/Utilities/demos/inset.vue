<template>
  <div data-backstop="inset-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Inset space classes for all around padding
    </cdr-text>

    <template
      v-for="(v,k,i) in insetTokens"
    >
      <div
        :key="`normal-${k}-${i}`"
        :class="[kebab(k), 'inset-example']"
        :style="{boxShadow: inset(v)}"
      >{{ k }}</div>
      <div
        :key="`normal-${k}-${i}-xs`"
        :class="[`${kebab(k)}@xs`, 'inset-example']"
      >{{ k }}@xs</div>
      <div
        :key="`normal-${k}-${i}-sm`"
        :class="[`${kebab(k)}@sm`, 'inset-example']"
      >{{ k }}@sm</div>
      <div
        :key="`normal-${k}-${i}-md`"
        :class="[`${kebab(k)}@md`, 'inset-example']"
      >{{ k }}@md</div>
      <div
        :key="`normal-${k}-${i}-lg`"
        :class="[`${kebab(k)}@lg`, 'inset-example']"
      >{{ k }}@lg</div>
    </template>

  </div>
</template>

<script>

import { CdrText } from 'componentsdir/_index';
import tokens from '@rei/cdr-tokens';
import pickBy from 'lodash/pickBy';
import kebabCase from 'lodash/kebabCase';

export default {
  name: 'UtilitiesSpaceInset',
  components: {
    CdrText,
  },
  data() {
    return {
      tokens,
    };
  },
  computed: {
    insetTokens() {
      return pickBy(this.tokens, (v, k) => {
        if (k.includes('SpaceInset')) {
          if (!k.includes('Top') && !k.includes('Left')) {
            return true;
          }
        }
        return false;
      });
    },
  },
  methods: {
    kebab(name) {
      return kebabCase(name);
    },
    inset(val) {
      if (val.indexOf(' ') <= 0) {
        return this.getInset(val, val, `-${val}`, `-${val}`);
      } if (val.indexOf('*') > 0) {
        let [x, y] = val.split(') '); // eslint-disable-line
        const negx = `${x.slice(0, 5)}-${x.slice(5)})`;
        return this.getInset(`${x})`, y, negx, `-${y}`);
      }
      const [x, y] = val.split(' ');
      return this.getInset(x, y, `-${x}`, `-${y}`);
    },
    getInset(posy, posx, negy, negx) {
      // console.log(posx, posy, negx, negy);
      return `inset ${negx} ${negy} 0 rgb(199, 220, 191), inset ${posx} ${posy} 0 rgb(199, 220, 191)`;// eslint-disable-line
    },
  },
};

</script>

<style lang="scss">
  .inset-example + .inset-example {
    margin-top: 10px;
  }
</style>
