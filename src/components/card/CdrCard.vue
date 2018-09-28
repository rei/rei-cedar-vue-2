<template>
  <article :class="modifierClass">
    <cdr-layout
      direction="stack"
      spacing="1-x"
    >
      <section
      >
        <cdr-img
          :src="cardImg"
          :alt="cardImgAlt"
          :ratio="cardImgRatio"
          :cover="cardImgCover"
          :crop="cardImgCrop"
          :class="$style['cdr-card__media']"
        />
        <slot name="cardMedia" />
      </section>
      <section
        :class="$style['cdr-lead']"
      >
        <div
          v-if="cardLabel != null"
          :class="$style['cdr-lead__label']">
          <slot name="cardLabelSlot">{{ cardLabel }}</slot>
        </div>
        <cdr-text
          v-if="cardTitle != null"
          :tag="'h'+cardTitleLevel"
          modifier="heading-small"
        >
          <a
            :class="[$style['cdr-lead__title'], $style['cdr-lead__title--action']]"
            :href="cardUrl"
          >
            <slot name="cardTitleSlot">{{ cardTitle }}</slot>
          </a>
        </cdr-text>
        <cdr-list
          v-if="snapshot"
          modifier="unordered inline compact"
          :class="$style['cdr-lead__snapshot']"
        >
          <li
            v-for="item in snapshot"
            :key="item.id">
            <!-- We have a slot for each item, passing it the -->
            <!-- `item` object as a slot prop.                 -->
            <slot :item="item">
              <!-- Fallback content -->
              {{ item }}
            </slot>
          </li>
        </cdr-list>
      </section>
      <slot/>
    </cdr-layout>
  </article>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import { CdrImg } from '@rei/cdr-img';
import { CdrList } from '@rei/cdr-list';
import CdrLayout from 'componentsdir/layout/CdrLayout';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrCard',
  components: {
    CdrText,
    CdrImg,
    CdrList,
    CdrLayout,
  },
  mixins: [modifier],
  props: {
    cardImg: String,
    /**
    * this is set to top when there is no attribution
    */
    cardImgAlt: {
      type: String,
      default: ' ',
    },
    cardImgRatio: String,
    /**
     * Requires `Ratio`. Scale the image to be as large as possible to fill the area (background-position: cover;) See cdr-img
     */
    cardImgCover: Boolean,
    /**
     * Requires `Ratio`. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right} See cdr-img
     */
    cardImgCrop: String,
    cardTitle: String,
    /**
    * href to turn card into a link
    */
    cardUrl: {
      type: String,
      required: true,
    },
    /**
    * Heading level
    */
    cardTitleLevel: {
      type: [String, Number],
      default: '3',
    },
    /**
    * Label text
    */
    cardLabel: {
      type: String,
      required: false,
    },
    /**
    * Snapshot text
    */
    snapshot: {
      type: Array,
      default: () => [],
    },
    /**
    * Rating value
    */
    rating: {
      type: [String, Number],
    },
    /**
    * Number of ratings
    */
    count: {
      type: [String, Number],
    },
  },
  computed: {
    baseClass() {
      return 'cdr-card';
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
