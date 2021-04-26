<template>
  <component
    :is="tag"
    :href="href"
    :class="mapClasses($style,
      baseClass,
      sizeClass,
      linkedClass,
    )"
  >
    <div :class="$style['cdr-rating__ratings']">

      <span
        v-for="star in Array(whole).keys()"
        :class="mapClasses($style, 'cdr-rating__icon', 'cdr-rating__100')"
        :key="`rating-whole-${star}`"
        aria-hidden="true"
      />
      <span
        v-if="remainder"
        :class="mapClasses($style, 'cdr-rating__icon', `cdr-rating__${remainder}`)"
        aria-hidden="true"
      />

      <span
        v-for="empty in Array(empties).keys()"
        :class="mapClasses($style,
          'cdr-rating__icon',
          emptyClass,
        )"
        :key="`rating-empty-${empty}`"
        aria-hidden="true"
      />
    </div>

    <span
      v-if="count !== null"
      aria-hidden="true"
      :class="$style['cdr-rating__count']"
    >
      <span
        v-if="href"
        :class="$style['cdr-rating__number']"
      >
        {{ displayRating }}
      </span>

      <span>
        {{ formattedCount }}
      </span>

      <span v-if="!compact">
        &nbsp;Reviews
      </span>
    </span>

    <span :class="$style['cdr-rating__caption-sr']">
      {{ srText }}
    </span>
  </component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import mapClasses from '../../utils/mapClasses';

export default defineComponent({
  name: 'CdrRating',
  props: {
    /**
     * Rating value (out of 5)
     */
    rating: {
      required: true,
      type: [String, Number],
      default: 0,
    },
    /**
     * Total number of ratings
     */
    count: {
      required: false,
      type: [String, Number],
      default: null,
    },
    /**
     * Hides the word 'reviews' if true
     */
    compact: {
      type: Boolean,
      default: false,
    },
    /**
     * Allows the ratings to act as a link
     */
    href: {
      type: String,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => propValidator(
        value,
        ['small', 'medium', 'large'],
      ),
    },
  },
  setup(props) {
    const baseClass = 'cdr-rating';
    const sizeClass = computed(() => props.size && buildClass(baseClass, props.size));
    const linkedClass = computed(() => props.href && buildClass(baseClass, 'linked'));
    const emptyClass = computed(() => ((props.rounded > 0 || props.count > 0)
      ? 'cdr-rating__placeholder'
      : 'cdr-rating__placeholder--no-reviews'));
    const tag = computed(() => (props.href ? 'a' : 'div'));

    const displayRating = computed(() => (Math.round(props.rating * 10) / 10).toFixed(1));

    const rounded = computed(() => Math.round(props.rating * 4) / 4);

    const whole = computed(() => Math.floor(rounded.value));

    const remainder = computed(() => rounded.value.toFixed(2).split('.')[1]);

    const empties = computed(() => 5 - whole.value - (remainder.value > 0 ? 1 : 0));

    const formattedCount = computed(() => (props.compact ? `(${props.count})` : `${props.count}`));

    const srText = computed(() => {
      // linked
      if (props.href) {
        // no reviews
        if (props.count === 0 || props.count === '0') {
          return 'No reviews yet; be the first!';
        }
        // no count
        if (props.count === null) {
          return `View the reviews with an average rating of ${displayRating.value} out of 5 stars`;
        }
        // default
        return `View the ${props.count} reviews with an average rating of ${displayRating.value} out of 5 stars`; // eslint-disable-line max-len
      }

      // non-linked
      // no reviews
      if (props.count === 0 || props.count === '0') {
        return '0 reviews';
      }
      // no count
      if (props.count === null) {
        return `Rated ${displayRating.value} out of 5 stars`;
      }
      // default
      // eslint-disable-next-line
      return `${props.count} reviews with an average rating of ${displayRating.value} out of 5 stars`;
    });

    return {
      tag,
      baseClass,
      sizeClass,
      linkedClass,
      emptyClass,
      displayRating,
      rounded,
      whole,
      remainder,
      empties,
      formattedCount,
      srText,
      mapClasses,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrRating.scss">
</style>
