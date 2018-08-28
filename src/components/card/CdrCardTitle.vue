<template>
  <section :class="$style['cdr-card__section-title']">
    <div
      v-if="activityLabel != null"
      :class="$style['cdr-card--activity__label']">
      {{ label }}
    </div>
    <cdr-text
      v-if="title != null"
      :tag="'h'+titleLevel"
      modifier="heading-small"
    >
      <a
        :class="
          [$style['cdr-card--activity__title'],
           $style['cdr-card--activity__title--action']]"
        :href="titleUrl"
      >{{ title }}</a>
    </cdr-text>
    <cdr-list
      v-if="snapshot"
      :class="$style['cdr-card--activity__snapshot']"
      modifier="unordered inline compact"
    >
      <li
        v-for="(item, i) in snapshot"
        :key="i"
      >
        {{ item }}
      </li>
    </cdr-list>
    <div
      v-if="location"
      :class="$style['cdr-card--activity__location']"
    >
      {{ location }}
    </div>
  </section>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import { CdrList } from '@rei/cdr-list';

export default {
  name: 'CdrCardTitle',
  components: {
    CdrText,
    CdrList,
  },
  props: {
    /**
    * Title text
    */
    title: String,
    /**
    * href to turn card into a link
    */
    titleUrl: {
      type: String,
      required: true,
    },
    /**
    * Heading level
    */
    titleLevel: {
      type: [String, Number],
      default: '2',
    },
    /**
    * Label text
    */
    activityLabel: String,
    /**
    * Location text
    */
    location: String,
    /**
    * Snapshot text
    */
    snapshot: {
      type: Array,
      required: false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-card_title';
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrCard.vars.pcss';
  @import './styles/CdrCard.pcss';
</style>
