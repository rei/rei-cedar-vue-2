<template>
  <article :class="modifierClass">
    <section>
      <cdr-img
        :src="cardImg"
        :alt="cardImgAlt"
      />
    </section>
    <section :class="$style['cdr-card__section-title']">
      <div
        v-if="cardLabel != null"
        :class="$style['cdr-card__label']">
        <slot name="cardLabelSlot">{{ cardLabel }}</slot>
      </div>
      <cdr-text
        v-if="cardTitle != null"
        :tag="'h'+cardTitleLevel"
        modifier="heading-small"
      >
        <a
          :class="[$style['cdr-card__title'], $style['cdr-card__title--action']]"
          :href="cardUrl"
        >
          <slot name="cardTitleSlot">{{ cardTitle }}</slot>
        </a>
      </cdr-text>
      <cdr-list
        v-if="snapshot"
        modifier="unordered inline compact"
        :class="$style['cdr-card__snapshot']"
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
  </article>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import { CdrImg } from '@rei/cdr-img';
import { CdrList } from '@rei/cdr-list';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrCard',
  components: {
    CdrText,
    CdrImg,
    CdrList,
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
      required: true,
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
</style>
