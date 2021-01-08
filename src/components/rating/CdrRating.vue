<template>
  <Component
    href={this.href}
    class={clsx(
      this.style[this.baseClass],
      this.sizeClass,
      this.href ? this.style['cdr-rating--linked'] : '',
    )}
  >
    <div class={this.style['cdr-rating__ratings']}>

      {[...Array(this.whole).keys()].map((n) => (
          <span
            class={clsx(this.style['cdr-rating__icon'], this.style['cdr-rating__100'])}
            key={`rating-whole-${n}-${this._uid}`} // eslint-disable-line no-underscore-dangle
            aria-hidden="true"
          />
      ))}



      remainderEl() {
        <!-- TODO: MAKE THIS LESS VERBOSE!  IS THIS ALWAYS QUARTERS?-->
        let remainder;
        if (this.remainder === '25') {
          remainder = (<span
            class={clsx(this.style['cdr-rating__icon'], this.style['cdr-rating__25'])}
            aria-hidden="true"
          />);
        } else if (this.remainder === '50') {
          remainder = (<span
            class={clsx(this.style['cdr-rating__icon'], this.style['cdr-rating__50'])}
            aria-hidden="true"
          />);
        } else if (this.remainder === '75') {
          remainder = (<span
            class={clsx(this.style['cdr-rating__icon'], this.style['cdr-rating__75'])}
            aria-hidden="true"
          />);
        }
        return remainder;
      },





      {this.remainderEl }
      {[...Array(this.empties).keys()].map((n) => (
        <span
          class={clsx(
            this.style['cdr-rating__icon'],
            (this.rounded > 0 || this.count > 0)
              ? this.style['cdr-rating__placeholder']
              : this.style['cdr-rating__placeholder--no-reviews'],
          )}
          key={`rating-empty-${n}-${this._uid}`} // eslint-disable-line no-underscore-dangle
          aria-hidden="true"
        />
      ))}
    </div>
    {this.count !== null
      ? <span
        aria-hidden="true"
        class={this.style['cdr-rating__count']}
      >
        {this.href
          && <span class={this.style['cdr-rating__number']}>
            { this.displayRating }
          </span>
        }

        <span>
          { this.formattedCount }
        </span>

        {!this.compact
          && <span>
            &nbsp;Reviews
          </span>
        }
      </span> : ''
    }

    <span class={this.style['cdr-rating__caption-sr']}>
      { this.srText }
    </span>
  </Component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrRating.scss';

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
    const baseClass = style['cdr-rating'];
    const sizeClass = computed(() => props.size && buildClass('cdr-rating', props.size, style));


    // Computed?
    const tag = computed(() => props.href ? 'a' : 'div');

    const displayRating = computed(() => {
      return (Math.round(props.rating * 10) / 10).toFixed(1);
    });

    const rounded = computed(() => {
      return Math.round(props.rating * 4) / 4;
    });

    const whole = computed(() => {
      return Math.floor(rounded.value);
    });

    const remainder = computed(() => {
      return rounded.value.toFixed(2).split('.')[1];
    });

    const empties = computed(() => {
      return 5 - whole.value - (remainer.value > 0 ? 1 : 0);
    });

    const formattedCount = computed(() => {
      return props.compact ? `(${props.count})` : `${props.count}`;
    });

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
      return `${props.count} reviews with an average rating of ${displayRating.value} out of 5 stars`;
    })

  },
});
</script>
