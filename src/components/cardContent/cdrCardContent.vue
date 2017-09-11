<template>
  <cdr-card modifier="content">
    <template v-if="this.author != null">
      <header class="cdr-inset">
        <cdr-media-object
        :img-src="profile"
        img-modifier="circle">
          <span class="h3">{{author}}</span>
          <p>{{creationTime}}</p>
        </cdr-media-object>
      </header>
    </template>
    <section class="cdr-inset cdr-inset--remove-top cdr-card--content__body">
      <cdr-media-object
      :img-src="media"
      :img-alt="mediaAlt"
      img-modifier="responsive"
      modifier="top stretch"
      :img-radius="imgSrcRadiusClass">
        <template v-if="this.label != null">
          <div class="cdr-card--content__label">{{label}}</div>
        </template>
        <template v-if="this.title != null">
          <cdr-heading :level="titleLevel">
            <slot name="title" v-if="!titleUrl">
              <span class="cdr-card--content__title cdr-card--content__title__action">{{title}}</span>
            </slot>
            <slot name="title" v-else>
              <a class="cdr-card--content__title cdr-card--content__title__action" :href="titleUrl">{{title}}</a>
            </slot>
          </cdr-heading>
        </template>
        <template v-if="snapshot">
          <ul class="cdr-card--content__snapshot cdr-list cdr-list--inline cdr-list--bulleted">
            <li v-for="item in snapshot">
              {{ item }}
            </li>
          </ul>
        </template>
        <template v-if="summary">
          <div
            v-html="summary"
            class="cdr-card--content__summary">
          </div>
        </template>
        <template v-if="this.rating != null">
          <cdr-rating :rating="rating" :count="count" modifier="medium">
          </cdr-rating>
        </template>
      </cdr-media-object>
    </section>
  </cdr-card>
</template>

<script>
import cdrCard from '@/components/card/cdrCard';
import cdrHeading from '@/components/heading/cdrHeading';
import cdrImg from '@/components/image/cdrImg';
import cdrMediaObject from '@/components/mediaObject/cdrMediaObject';
import cdrRating from '@/components/rating/cdrRating';

export default {
  name: 'cdr-card-content',
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
    * authors name
    */
    author: String,
    /**
    * authors profile image
    */
    profile: String,
    /**
    * author location and time data
    */
    creationTime: String,
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
    summary: String,
    snapshot: {
      required: false,
    },
    rating: String,
    count: String,
  },
  computed: {
    imgSrcRadiusClass() {
      if (this.author == null) {
        return 'top';
      }
      return 'none';
    },
  },
};
</script>

