<template>
  <section
    :class="[$style['cdr-card-intro'], contentSpaceClass]"
  >
    <div
      v-if="$slots.category || category"
      :class="$style['cdr-card-intro__category']"
    >
      <slot name="category">{{ category }}</slot>
    </div>
    <cdr-text
      v-if="$slots.heading || heading"
      :tag="'h'+headingLevel"
      modifier="heading-small"
    >
      <a
        :class="[$style['cdr-card-intro__heading'], $style['cdr-card-intro__heading--action']]"
        :href="url"
      >
        <slot name="heading">{{ heading }}</slot>
      </a>
    </cdr-text>
    <cdr-list
      v-if="snapshot"
      modifier="unordered inline compact"
      :class="$style['cdr-card-intro__snapshot']"
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
      :class="$style['cdr-card-intro__rating']"
    >
      <cdr-rating
        v-if="ratingProps"
        v-bind="ratingProps"
        modifier="medium" />
      <slot name="rating" />
    </div>
  </section>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import { CdrList } from '@rei/cdr-list';
import { CdrRating } from '@rei/cdr-rating';

export default {
  name: 'CdrCardIntro',
  components: {
    CdrText,
    CdrList,
    CdrRating,
  },
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
    contentSpaceClass: {
      type: String,
      default: 'cdr-inset-1-x',
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrCard.vars.pcss';
  @import './styles/CdrCard.pcss';
</style>

