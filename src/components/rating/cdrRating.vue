<template>
  <div
    class="cdr-rating"
    :class="[modifierClass]"
  >
    <div class="cdr-rating__background">
      <span
        class="cdr-rating__icon cdr-rating__placeholder"
        v-for="n in 5"
        :key="n"
        aria-hidden="true"
      />
    </div>
    <div class="cdr-rating__ratings">
      <span
        class="cdr-rating__icon cdr-rating__100"
        v-for="n in whole"
        :key="n"
        aria-hidden="true"
      />
      <span
        v-if="remainder === '25'"
        class="cdr-rating__icon cdr-rating__25"
        aria-hidden="true"
      />
      <span
        v-else-if="remainder === '50'"
        class="cdr-rating__icon cdr-rating__50"
        aria-hidden="true"
      />
      <span
        v-else-if="remainder === '75'"
        class="cdr-rating__icon cdr-rating__75"
        aria-hidden="true"
      />
    </div>
    <span
      v-if="count"
      aria-hidden="true"
      class="cdr-rating__count"
    >({{ count }})<span v-if="!compact"> Reviews</span></span>
    <span
      class="cdr-sr-only"
    >rated {{ rounded }} out of 5 with {{ count }} reviews</span>
  </div>
</template>

<script>
import modifier from 'Mixins/modifier';

/**
 * Cedar 2 component for rating
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrRating',
  mixins: [modifier],
  props: {
    /**
     * Rating out of 5
     */
    rating: {
      required: true,
      type: [String, Number],
    },
    /**
     * Number of ratings
     */
    count: {
      required: false,
      type: [String, Number],
    },
    /**
     * Hides the word 'reviews' if true
     */
    compact: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-rating';
    },
    rounded() {
      return Math.round(this.rating * 4) / 4;
    },
    whole() {
      return Math.floor(this.rating);
    },
    remainder() {
      return this.rounded.toFixed(2).split('.')[1];
    },
  },
};
</script>

<style>
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrRating.vars.pcss';
  @import './styles/cdrRating.pcss';
</style>
