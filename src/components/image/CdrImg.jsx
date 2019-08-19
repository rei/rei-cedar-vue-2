import modifier from 'mixinsdir/modifier';
import s from './styles/CdrImg.scss';
import cs from 'classnames';

export default {
  name: 'CdrImg',
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
     * Enable lazy loading.
     */
    lazy: {
      type: Boolean,
    },
    /**
     * Object of lazy options
     */
    lazyOpts: {
      type: Object,
      default: () => {},
    },
    /**
     * Aspect ratio of the media container. {auto, square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     */
    ratio: {
      type: String,
      validator: value => ([
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
     * sm breakpoint and above
     */
    ratioSm: {
      type: String,
      validator: /* istanbul ignore next */ value => ([
        'auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3',
        '16-9'].indexOf(value) >= 0) || false,
    },
    /**
     * md breakpoint and above
     */
    ratioMd: {
      type: String,
      validator: /* istanbul ignore next */ value => ([
        'auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3',
        '16-9'].indexOf(value) >= 0) || false,
    },
    /**
     * lg breakpoint and above
     */
    ratioLg: {
      type: String,
      validator: /* istanbul ignore next */ value => ([
        'auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3',
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
      validator: /* istanbul ignore next */ value => ([
        'circle',
        'rounded'].indexOf(value) >= 0) || false,
    },
  },
  data() {
    return {
      style: s,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-image';
    },
    lazyClass() {
      const classObj = {};
      classObj['lazy-image'] = this.lazy;
      return classObj;
    },
    radiusClass() {
      const classObj = {};
      classObj[s[`cdr-image--${this.radius}`]] = this.radius;
      return classObj;
    },
    ratioClass() {
      const classObj = {};
      classObj[s[`cdr-media-frame--${this.ratio}`]] = this.ratio;
      classObj[s[`cdr-media-frame--${this.ratioSm}@sm`]] = this.ratioSm;
      classObj[s[`cdr-media-frame--${this.ratioMd}@md`]] = this.ratioMd;
      classObj[s[`cdr-media-frame--${this.ratioLg}@lg`]] = this.ratioLg;
      return classObj;
    },
    coverClass() {
      const classObj = {};
      classObj[s['cdr-media-frame__cover']] = true;
      classObj[s['cdr-media-frame__cover--crop']] = this.crop;
      classObj[s['cdr-media-frame__cover--cover']] = this.cover;
      return classObj;
    },
    cropClass() {
      const base = 'cdr-media-frame';
      const cropArr = this.crop ? this.crop.split(' ') : [];
      let final = [];

      final = final.concat(cropArr.map(mod => this.modifyClassName(base, mod)));

      return final.join(' ');
    },
    styleObject() {
      return {
        backgroundImage: `url(${this.src})`,
      };
    },
    lazyAttrs() {
      const attrObj = {};
      if (this.lazy) {
        Object.keys(this.lazyOpts).forEach((opt) => {
          attrObj[`data-${opt}`] = this.lazyOpts[opt];
        });
      }
      return attrObj;
    },
  },
  render(h) {
    if (this.ratio) {
      return (
        <div
          class={cs(s['cdr-media-frame'], this.ratioClass, this.cropClass)}
        >
          <div
            class={cs(this.coverClass, this.lazyClass, this.radiusClass)}
            style={this.styleObject}
            aria-hidden="true"
            {...{attrs: this.lazyAttrs}}
          />
          <img
            class={cs(s['cdr-media-frame__image'], s['cdr-media-frame__image--hidden'], this.modifierClass, this.radiusClass)}
            src={this.src}
            alt={this.alt}
          />
        </div>
      )
    } else {
        return (<img
          class={cs(this.modifierClass, this.radiusClass, this.lazyClass)}
          src={this.src}
          alt={this.alt}
          {...{attrs: this.lazyAttrs}}
        />)
    }
  }
};
