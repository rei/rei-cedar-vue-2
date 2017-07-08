<template>
  <cdr-card
  modifier="content"
  wrapper-a="cdr-card__block cdr-card__block--media"
  :content-a-gutter="contentAGutter"
  wrapper-b="cdr-card__block"
  :header="attribution"
  headerClass="cdr-card__block">
   <template v-if="header">
      <cdr-media-object
      slot="header"
      :media-figure="profile"
      media-img-shape="circle"
      :level="authorHeading"
      :media-title="author">
        <p>{{creationTime}}</p>
      </cdr-media-object>

      <cdr-media-object
      :media-figure="media"
      :media-figure-alt="mediaAlt"
      :media-has-radius="radius"
      media-img-shape="responsive"
      media-extend-style="cdr-card__media"
      modifier="top stretch"
      >
        <cdr-heading :level="level" class="cdr-sub-heading">
          <slot name="label"><p class="cdr-card__label">{{label}}</p></slot>
          <slot name="title" v-if="!headingUrl"><span class="cdr-card__title">{{heading}}</span></slot>
          <slot name="title" v-else><a class="cdr-card__title cdr-card__title__action" :href="headingUrl">{{heading}}</a></slot>
        </cdr-heading>

        <slot name="snapshot" class="cdr-card__snapshot">{{snapshot}}</slot>
        <slot name="summary" class="cdr-card__summary">{{summary}}</slot>
        <slot name="messaging">{{messaging}}</slot>
      </cdr-media-object>
    </template>

   <cdr-media-object
    v-else
    :media-figure="media"
    :media-figure-alt="mediaAlt"
    utiliy-radius="top"
    media-img-shape="responsive"
    modifier="top stretch"
    >
      <cdr-heading :level="level" class="cdr-sub-heading">
        <slot name="label"><p class="cdr-card__label">{{label}}</p></slot>
        <slot name="title" v-if="!headingUrl"><span class="cdr-card__title">{{heading}}</span></slot>
        <slot name="title" v-else><a class="cdr-card__title cdr-card__title__action" :href="headingUrl">{{heading}}</a></slot>
      </cdr-heading>

      <slot name="snapshot" class="cdr-card__snapshot">{{snapshot}}</slot>
      <slot name="summary" class="cdr-card__summary">{{summary}}</slot>
      <slot name="messaging">{{messaging}}</slot>
    </cdr-media-object>

    <span class="cdr-card__action" slot="bodyB">
      <slot name="actions">
        <div v-html="actions"></div>
      </slot>
    </span>

    <template v-if="footerActions">
      <section slot="footer">
        <slot name="footerActions"></slot>
      </section>
    </template>
  </cdr-card>
</template>

<script>
import cdrCard from './cdrCard';
import cdrCol from '../layouts/cdrCol';
import cdrHeading from '../headings/cdrHeading';
import cdrImg from '../media/cdrImg';
import cdrMediaObject from '../media/cdrMediaObject';
import cdrRow from '../layouts/cdrRow';

export default {
  name: 'cdr-card-content',
  components: {
    cdrCard,
    cdrCol,
    cdrHeading,
    cdrImg,
    cdrMediaObject,
    cdrRow,
  },
  extends: cdrCard,
  props: {
    actions: String,
    author: String,
    authorHeading: {
      type: String,
      required: false,
    },
    attribution: {
      type: Boolean,
      default: false,
    },
    utiliyRadius: String,
    contentAGutter: String,
    creationTime: {
      type: String,
      required: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    footerActions: {
      type: Boolean,
      default: false,
    },
    heading: String,
    headingUrl: String,
    label: String,
    level: {
      type: String,
      default: '2',
    },
    media: String,
    mediaAlt: {
      type: String,
      default: ' ',
    },
    messaging: String,
    profile: String,
    snapshot: String,
    summary: String,
  },
};
</script>

