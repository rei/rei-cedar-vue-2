<template>
      <div
        v-if="ratio"
        :style="{ '--ratio': this.ratioPct }"
        :class="wrapperClass"
      >
        <img
          style={this.cropObject}
          :class="componentClass"
          :src="src"
          :alt="alt"
          {...{ attrs: this.$attrs, on: this.$listeners }}
        />
      </div>
      <img
        v-else
        :class="componentClass"
        :src="src"
        :alt="alt"
      />);
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrImg.scss';

export default {
  name: 'CdrImg',
  inheritAttrs: false,
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
     * Requires a `ratio`. Area to crop the image overflow to. {left, center, right} {top, center, bottom}
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

    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['responsive']),
    },
  },

  render() {


    // wrapperClass this.style['cdr-image-ratio']

//
//     <!-- class={clsx(
//       this.style[this.baseClass],
//       this.modifierClass,
//       this.radiusClass,
//       this.coverClass,
//     )} -->
// <!-- componentClass clsx(this.style[this.baseClass],
//   this.modifierClass,
//   this.radiusClass,
//   this.lazyClass) -->



// data() {
//   return {
//     style,
//   };
// },
// computed: {
//   baseClass() {
//     return 'cdr-image';
//   },
//   radiusClass() {
//     return this.radius ? this.style[`cdr-image--${this.radius}`] : '';
//   },
//   coverClass() {
//     const classObj = {};
//     classObj[this.style['cdr-image-ratio__cover']] = true;
//     classObj[this.style['cdr-image-ratio__cover--crop']] = this.crop;
//     classObj[this.style['cdr-image-ratio__cover--cover']] = this.cover;
//     return classObj;
//   },
//   cropObject() {
//     return {
//       objectPosition: this.crop,
//     };
//   },
//   ratioPct() {
//     if (this.ratio === 'square') {
//       return '100%';
//     }
//     if (this.ratio) {
//       const [x, y] = this.ratio.split('-');
//       return `${(y / x) * 100}%`;
//     }
//     return '0%';
//   },
// },
const modifierClass = computed(() => buildClass('cdr-img', props.modifier, style));





    return {

    }
  },
};
</script>
