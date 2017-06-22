<template>
  <cdr-card
  modifier="content"
  content-wrapper-class-a="cdr-card__block cdr-card__block--media"
  content-wrapper-class-b="cdr-card__block"
  :header="attribution"
  headerClass="cdr-card__block">

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
    media-img-shape="responsive"
    media-extend-style="cdr-card__media"
    modifier="top stretch">

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
  name: 'cdr-card-component',
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

<style lang='postcss' scoped>
.cdr-card {
  display: flex;
  flex-direction: column;
  position: relative;

  &--media {
    flex-grow: 1;

    &:first-child {
      border-radius: var(--radius-emphasis) var(--radius-emphasis) 0 0;
      padding-top: 0;
    }
  }

  &__action {
    position: relative;
    z-index: 1;
  }

  &__title {
    &__action {
      position: static;

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        z-index: 0;
        height: 100%;
        left: 0;
        top: 0;
        transition: trasparent 0.1s ease-out;
        background-color: trasparent;
      }
    }
  }

  &__summary {
    font-size: var(--sys-font-spruce-bdy-15-font-size);
    line-height: var(--sys-font-spruce-bdy-15-line-height);
    font-style: var(--sys-font-spruce-bdy-15-font-style);
    font-weight: var(--sys-font-spruce-bdy-15-font-weight);
    font-family: var(--sys-font-spruce-bdy-15-font-family);
    padding: 0;

    @media (--large) {
      font-size: var(--sys-font-spruce-bdy-25-font-size);
      line-height: var(--sys-font-spruce-bdy-25-line-height);
      font-style: var(--sys-font-spruce-bdy-25-font-style);
      font-weight: var(--sys-font-spruce-bdy-25-font-weight);
      font-family: var(--sys-font-spruce-bdy-25-font-family);
    }
  }
}
</style>
