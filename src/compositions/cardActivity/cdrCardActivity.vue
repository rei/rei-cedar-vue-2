<template>
  <cdr-card modifier="activity">
    <section class="cdr-inset cdr-inset--remove-top cdr-card--content__body">
      <cdr-media-object
      :img-src="media"
      :img-alt="mediaAlt"
      img-modifier="responsive"
      modifier="top stretch"
      img-radius="top">
        <template v-if="this.label != null">
          <div class="cdr-card--activity__label">{{label}}</div>
        </template>
        <template v-if="this.title != null">
          <cdr-heading :level="titleLevel">
            <slot name="title" v-if="!titleUrl">
              <div class="cdr-card--activity__title cdr-card--activity__title__action">{{title}}</div>
            </slot>
            <slot name="title" v-else>
              <a class="cdr-card--activity__title cdr-card--activity__title__action" :href="titleUrl">{{title}}</a>
            </slot>
          </cdr-heading>
        </template>
        <template v-if="snapshot">
          <ul class="cdr-card--activity__snapshot cdr-list cdr-list--inline cdr-list--bulleted">
            <li v-for="item in snapshot">
              {{ item }}
            </li>
          </ul>
        </template>
        <template v-if="location">
          <div class="cdr-card--activity__location">
          {{location}}
          </div>
        </template>
        <template v-if="this.rating != null">
          <cdr-rating class="cdr-card--activity__rating" :rating="rating" :count="count" modifier="medium">
          </cdr-rating>
        </template>
      </cdr-media-object>
    </section>
  </cdr-card>
</template>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrCardActivity.pcss';
</style>

<script>
import cdrCard from '@/components/card/cdrCard';
import cdrHeading from '@/components/heading/cdrHeading';
import cdrImg from '@/components/image/cdrImg';
import cdrMediaObject from '@/components/mediaObject/cdrMediaObject';
import cdrRating from '@/components/rating/cdrRating';

export default {
  name: 'cdr-card-activity',
  components: {
    cdrCard,
    cdrHeading,
    cdrImg,
    cdrMediaObject,
    cdrRating,
  },
  extends: cdrCard,
  props: {
    /**
    * Path to primary image
    */
    media: String,
    /**
    * this is set to top when there is no attribution
    */
    mediaAlt: {
      type: String,
      default: ' ',
    },
    title: String,
    titleUrl: String,
    titleLevel: {
      default: '2',
    },
    label: String,
    location: String,
    snapshot: {
      required: false,
    },
    rating: String,
    count: String,
  },
};
</script>

