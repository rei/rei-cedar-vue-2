import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import style from './styles/CdrImg.scss';

export default {
  name: 'CdrImg',
  inheritAttrs: false,
  mixins: [modifier],
  props: {
    /**
     * Required. Image source url.
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Required. Image alt text.
     */
    alt: {
      type: String,
      default: '',
    },
    /**
     * Aspect ratio of the media container. {auto, square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     */
    ratio: {
      type: String,
      validator: (value) => ([
        'auto',
        'square',
        '1-2',
        '2-3',
        '3-4',
        '9-16',
        '2-1',
        '3-2',
        '4-3',
        '16-9'].indexOf(value) >= 0) || false,
    },
    /**
     * Requires a `ratio`. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right}
     */
    crop: {
      type: String,
    },
    /**
     * Requires a `ratio`. Scale the image to be as large as possible to fill the area (background-position: cover;)
     */
    cover: {
      type: Boolean,
    },
    /**
     * Sets a border radius to an element {square, top, right, bottom, left}
     */
    radius: {
      type: String,
      validator: (value) => ([
        'circle',
        'rounded'].indexOf(value) >= 0) || false,
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-image';
    },
    radiusClass() {
      return this.radius ? this.style[`cdr-image--${this.radius}`] : '';
    },
    ratioClass() {
      return this.ratio ? this.style[`cdr-image-ratio--${this.ratio}`] : '';
    },
    coverClass() {
      const classObj = {};
      classObj[this.style['cdr-image-ratio__cover']] = true;
      classObj[this.style['cdr-image-ratio__cover--crop']] = this.crop;
      classObj[this.style['cdr-image-ratio__cover--cover']] = this.cover;
      return classObj;
    },
    cropObject() {
      return {
        objectPosition: this.crop,
      };
    },
  },
  render() {
    if (this.ratio) {
      return (
        <div
          class={clsx(this.style['cdr-image-ratio'], this.ratioClass)}
        >
          <img
            style={this.cropObject}
            class={clsx(
              this.style[this.baseClass],
              this.modifierClass,
              this.radiusClass,
              this.coverClass,
            )}
            src={this.src}
            alt={this.alt}
            {...{ attrs: this.$attrs, on: this.$listeners }}
          />
        </div>
      );
    }
    return (<img
          class={clsx(this.style[this.baseClass],
            this.modifierClass,
            this.radiusClass,
            this.lazyClass)}
          src={this.src}
          alt={this.alt}
          {...{ attrs: this.$attrs, on: this.$listeners }}
        />);
  },
};
