<template>
  <section
    :class="[modifierClass]"
  >
    <div
      v-if="$slots.category || category"
      :class="$style['cdr-lead__category']"
    >
      <slot name="category">{{ category }}</slot>
    </div>
    <cdr-text
      v-if="$slots.heading || heading"
      :tag="'h'+headingLevel"
      modifier="heading-small"
    >
      <a
        :class="[$style['cdr-lead__heading'], $style['cdr-lead__heading--action']]"
        :href="url"
      >
        <slot name="heading">{{ heading }}</slot>
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
    <div
      v-if="$slots.rating || ratingProps"
      :class="$style['cdr-lead__rating']"
    >
      <cdr-rating
        v-if="ratingProps"
        v-bind="ratingProps"
        modifier="medium"/>
      <slot name="rating" />
    </div>
  </section>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import { CdrList } from '@rei/cdr-list';
import { CdrRating } from '@rei/cdr-rating';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrLead',
  components: {
    CdrText,
    CdrList,
    CdrRating,
  },
  mixins: [modifier],
  props: {
    category: {
      type: String,
      required: false,
    },
    ratingProps: Object,
    snapshot: {
      type: Array,
      default: () => [],
    },
    heading: String,
    headingLevel: {
      type: [String, Number],
      default: '3',
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-lead';
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrLead.pcss';
</style>

