<template>
  <article :class="modifierClass">
    <section>
      <cdr-img
        v-bind="cardImgProps"
        :class="$style['cdr-card__media']"
      />
      <slot name="cardMedia" />
    </section>
    <section
      :class="$style['cdr-card__container']"
      v-if="hasCardContentSlot"
    >
      <slot name="cardIntro" />
      <slot />
    </section>
  </article>
</template>

<script>
import { CdrImg } from '@rei/cdr-img';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrCard',
  components: {
    CdrImg,
  },
  mixins: [modifier],
  props: {
    cardImgProps: Object,
  },
  computed: {
    baseClass() {
      return 'cdr-card';
    },
    hasCardContentSlot() {
      return this.$slots.cardIntro || this.$slots.default;
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrCard.vars.pcss';
  @import './styles/CdrCard.pcss';
  @import '@rei/cdr-img/dist/cdr-img.css';
</style>
