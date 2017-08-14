<template>
  <div class="cdr-rating">
    <span class="cdr-rating__icon cdr-rating__100" v-for="n in whole" :key="n" aria-hidden="true"></span>
    <span class="cdr-rating__icon cdr-rating__25" v-if="remainder === '25'" aria-hidden="true"></span>
    <span class="cdr-rating__icon cdr-rating__50" v-else-if="remainder === '50'" aria-hidden="true"></span>
    <span class="cdr-rating__icon cdr-rating__75" v-else-if="remainder === '75'" aria-hidden="true"></span>
    <span aria-hidden="true">({{count}})</span>
    <span class="u-sr-only">rated {{rating}} out of 5 with {{count}} reviews</span>
  </div>
</template>

<script>

export default {
  name: 'cdr-rating',
  props: {
    rating: {
      required: true,
      type: [String, Number],
    },
    count: {
      required: true,
      type: [String, Number],
    },
  },
  computed: {
    whole() {
      return Math.floor(this.rating);
    },
    remainder() {
      const full = (Math.round(this.rating * 4) / 4).toFixed(2);

      return full.split('.')[1];
    },
  },
};
</script>

<style theme="default">
  @import 'cdrRating.pcss';
</style>
