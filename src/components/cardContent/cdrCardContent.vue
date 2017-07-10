<template>
  <cdr-card
  modifier="content"
  wrapper-a="cdr-card__block"
  :content-a-gutter="mediaGutter"
  :header="attribution"
  :footer="footer"
  :extendContent="extendContent"
  footerClass="cdr-card__block"
  headerClass="cdr-card__block">

    <template v-if="attribution">
        <cdr-media-object
        slot="header"
        :media-figure="profile"
        media-img-shape="circle"
        :level="authorTitle"
        :media-title="author">
          <p>{{creationTime}}</p>
        </cdr-media-object>

        <cdr-media-object
        :media-figure="media"
        :media-figure-alt="mediaAlt"
        :media-figure-radius="radius"
        media-img-shape="responsive"
        media-extend-style="cdr-card--content__media"
        modifier="top stretch"
        :level="level"
        :mediaSuperTitle="label"
        :mediaUrl="titleUrl"
        :media-title="title"
        :mediaSubTitle="subTitle"
        media-title-class="cdr-card--content__title cdr-card--content__title__action"
        >
          <template v-if="snapshot">
            <cdr-list class="cdr-card--content__snapshot" modifier="bulleted">
              <li v-if="snapshotLocation">{{snapshotLocation}}</li>
              <li v-if="snapshotDistance">{{snapshotDistance}}</li>
              <li v-if="snapshotDifficulty">{{snapshotDifficulty}}</li>
              <li v-if="snapshotActivityLvl">{{snapshotActivityLvl}}</li>
              <li v-if="snapshotDuration">{{snapshotDuration}}</li>
            </cdr-list>
          </template>
          <div>rating slot</div>
        </cdr-media-object>
    </template>
    <cdr-media-object
      v-else
      :media-figure="media"
      :media-figure-alt="mediaAlt"
      media-figure-radius="top"
      media-img-shape="responsive"
      modifier="top stretch"
      :level="level"
      :mediaSuperTitle="label"
      :mediaUrl="titleUrl"
      :media-title="title"
      :mediaSubTitle="subTitle"
      media-title-class="cdr-card--content__title cdr-card--content__title__action"
    >
      <template v-if="snapshot">
        <cdr-list class="cdr-card--content__snapshot" modifier="bulleted">
          <li v-if="snapshotLocation">{{snapshotLocation}}</li>
          <li v-if="snapshotDistance">{{snapshotDistance}}</li>
          <li v-if="snapshotDifficulty">{{snapshotDifficulty}}</li>
          <li v-if="snapshotActivtyLvl">{{snapshotActivtyLvl}}</li>
          <li v-if="snapshotDuration">{{snapshotDuration}}</li>
        </cdr-list>
      </template>
      <div>rating slot</div>
    </cdr-media-object>

    <template slot="bodyB">
      <template v-if="summary">
        <div class="cdr-card__block cdr-card--content__summary">
          <slot name="summary">{{summaryContent}}</slot>
        </div>
      </template>
      <template v-if="price">
        <div class="cdr-card__block cdr-card--content__price">
          <slot name="price">{{priceContent}}</slot>
        </div>
      </template>
      <template v-if="messaging">
        <div class="cdr-card__block cdr-card--content__messaging">
          <slot name="messaging">{{messagingContent}}</slot>
        </div>
      </template>
      <template v-if="actions">
        <cdr-button-group
          slot="actions"
          class="cdr-card__block cdr-card--content__action">
          <cdr-button
          v-if="actionOneCopy"
          :modifier="actionOneModifier">
            {{actionOneCopy}}
          </cdr-button>
          <cdr-button
          v-if="actionTwoCopy"
          :modifier="actionTwoModifier">
            {{actionTwoCopy}}
          </cdr-button>
        </cdr-button-group>
      </template>
    </template>
     <template v-if="footer">
       <cdr-button-group
          slot="footer"
          class="cdr-card--content__action">
          <cdr-button
          v-if="footerActionOneCopy"
          :modifier="footerActionOneModifier">
            {{footerActionOneCopy}}
          </cdr-button>
          <cdr-button
          v-if="footerActionTwoCopy"
          :modifier="footerActionTwoModifier">
            {{footerActionTwoCopy}}
          </cdr-button>
        </cdr-button-group>
    </template>
  </cdr-card>
</template>

<script>
import cdrCard from '../card/cdrCard';
import cdrCol from '../grid/cdrCol';
import cdrRow from '../grid/cdrRow';
import cdrHeading from '../heading/cdrHeading';
import cdrImg from '../image/cdrImg';
import cdrMediaObject from '../mediaObject/cdrMediaObject';

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
    radius: String,
    attribution: {
      type: Boolean,
      default: false,
    },
    author: String,
    authorTitle: String,
    profile: String,
    creationTime: String,
    media: String,
    mediaGutter: String,
    mediaRadius: String,
    mediaAlt: {
      type: String,
      default: ' ',
    },
    label: String,
    title: String,
    titleUrl: String,
    level: String,
    subTitle: String,
    /**
    * Snapshot (location, distance, difficulty, activty level, duration)
    **/
    snapshot: {
      type: Boolean,
      default: false,
    },
    /**
    * use this to pass snapshot markup as a property rather than inline
    **/
    snapshotLocation: String,
    snapshotDistance: String,
    snapshotDifficulty: String,
    snapshotActivityLvl: String,
    snapshotDuration: String,
    price: {
      type: Boolean,
      default: false,
    },
    /**
    * use this to pass price markup as a property rather than inline
    **/
    priceContent: String,
    summary: {
      type: Boolean,
      default: false,
    },
    /**
    * use this to pass summary markup as a property rather than inline
    **/
    summaryContent: String,
    messaging: {
      type: Boolean,
      defalt: false,
    },
    /**
    * use this to pass messaging markup as a property rather than inline
    **/
    messagingContent: String,
    actions: {
      type: Boolean,
      default: false,
    },
    actionOneModifier: {
      type: String,
      required: false,
    },
    actionOneCopy: String,
    actionTwoModifier: {
      type: String,
      required: false,
    },
    actionTwoCopy: String,
    footer: {
      type: Boolean,
      default: false,
    },
    footerClass: String,
    footerActionOneModifier: {
      type: String,
      required: false,
    },
    footerActionOneCopy: String,
    footerActionTwoModifier: {
      type: String,
      required: false,
    },
    footerActionTwoCopy: String,
  },
};
</script>

