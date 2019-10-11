import clsx from 'clsx';
import contentPriority from '../../mixins/contentPriority';
import size from '../../mixins/size';
import space from '../../mixins/space';
import style from './styles/CdrRating.scss';

export default {
  name: 'CdrRating',
  mixins: [
    contentPriority,
    size,
    space,
  ],
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
      default: 0,
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
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-rating';
    },
    rounded() {
      return Math.round(this.rating * 4) / 4;
    },
    whole() {
      return Math.floor(this.rounded);
    },
    remainder() {
      return this.rounded.toFixed(2).split('.')[1];
    },
    formattedCount() {
      return this.compact ? `(${this.count})` : `${this.count}`;
    },
    remainderEl() {
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
  },
  render() {
    const Component = this.href ? 'a' : 'div';
    return (
      <Component
        href={this.href}
        class={clsx(
          this.contentPriorityClass,
          this.sizeClass,
          this.space,
          this.href ? this.style['cdr-rating--linked'] : '',
        )}
      >
        <div class={this.style['cdr-rating__background']}>
          {[...Array(5)].map(n => (
              <span
                class={clsx(
                  this.style['cdr-rating__icon'],
                  this.count > 0
                    ? this.style['cdr-rating__placeholder']
                    : this.style['cdr-rating__placeholder--no-reviews'],
                )}
                key={n}
                aria-hidden="true"
              />
          ))}
        </div>
        <div class={this.style['cdr-rating__ratings']}>

          {[...Array(this.whole)].map(n => (
              <span
                class={clsx(this.style['cdr-rating__icon'], this.style['cdr-rating__100'])}
                key={n}
                aria-hidden="true"
              />
          ))}
          {this.remainderEl }
        </div>
        <span
          aria-hidden="true"
          class={this.style['cdr-rating__count']}
        >
          {this.href
            && <span class={this.style['cdr-rating__number']}>
              { this.rounded }
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
        </span>

        <span class="cdr-display-sr-only">
          rated { this.rounded } out of 5 with { this.count } reviews
        </span>
      </Component>
    );
  },
};
