<template>
  <section
    :class="[$style['cdr-card__media'], mediaSpaceClass]"
  >
    <slot>
      <cdr-img
        v-bind="cardImgProps"
        :class="$style['cdr-card__media']"
      />
    </slot>
  </section>
</template>

<script>
import { CdrImg } from '@rei/cdr-img';

export default {
  name: 'CdrCardMedia',
  components: {
    CdrImg,
  },
  props: {
    cardImgProps: Object,
    mediaSpaceClass: {
      type: String,
      default: '',
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
