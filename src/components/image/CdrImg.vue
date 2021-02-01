<template>
  <div
    v-if="ratio"
    :style="{ '--ratio': ratioPct }"
    :class="$style[ratioClass]"
  >
    <img
      :style="cropObject"
      :class="clsx(
        $style[baseClass],
        $style[modifierClass],
        $style[radiusClass],
        $style[coverWrapperClass],
        $style[cropClass],
        $style[coverClass],
      )"
      :src="src"
      :alt="alt"
      v-bind="$attrs"
    />
  </div>
  <img
    v-else
    :class="clsx(
      $style[baseClass],
      $style[modifierClass],
      $style[radiusClass],
    )"
    :src="src"
    :alt="alt"
  />
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

export default defineComponent({
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

  setup(props, ctx) {
    const baseClass = 'cdr-img';
    const ratioClass = 'cdr-image-ratio';
    const coverWrapperClass = 'cdr-image-ratio__cover';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    const radiusClass = computed(() => buildClass(baseClass, props.radius));


    const cropObject = computed(() => { objectPosition: props.crop });
    const ratioPct = computed(() => {
      if (props.ratio === 'square') {
        return '100%';
      }
      if (props.ratio) {
        const [x, y] = props.ratio.split('-');
        return `${(y / x) * 100}%`;
      }
      return '0%';
    })

    const cropClass = computed(() => props.crop && buildClass(coverWrapperClass, 'crop'));
    const coverClass = computed(() => props.cover && buildClass(coverWrapperClass, 'cover'));

    return {
      baseClass,
      ratioClass,
      coverWrapperClass,
      modifierClass,
      radiusClass,
      cropObject,
      ratioPct,
      cropClass,
      coverClass,
      clsx,
    }
  },
});
</script>

<style lang="scss" module src="./styles/CdrImg.scss">
</style>
