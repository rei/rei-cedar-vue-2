<template>
  <cdr-card
  modifier="content"
  :content-a-gutter="mediaGutter"
  :footer="userSettings"
  :extendContent="extendContent"
  footerClass="cdr-inset"
  headerClass="cdr-inset"
  :wrapper-a= "mediaGutterClass" >

    <template v-if="this.authorTitle != null">
        <cdr-media-object
        slot="header"
        :media-figure="profile"
        media-img-shape="circle"
        :level="authorTitle"
        :media-title="author">
          <p>{{creationTime}}</p>
        </cdr-media-object>
    </template>

    <cdr-media-object
      :media-figure="media"
      :media-figure-alt="mediaAlt"
      media-img-shape="responsive"
      modifier="top stretch"
      :level="level"
      :mediaSuperTitle="label"
      :mediaUrl="titleUrl"
      :media-title="title"
      :mediaSubTitle="subTitle"
      media-title-class="cdr-card--content__title cdr-card--content__title__action"
      :media-figure-radius= "mediaFigureRadiusClass" >



    </cdr-media-object>

    <template slot="bodyB">
      <div v-if="$slots.summary" class="cdr-inset cdr-inset--squish cdr-card--content__summary">
      <ul class="cdr-card--content__snapshot">
           <li v-for="item in snapshot">
            {{ item }}
          </li>
        </ul>
        <slot name="summary">{{summary}}</slot>
      </div>
      <div v-if="$slots.price" class="cdr-inset cdr-inset--squish cdr-card--content__price">
        <slot name="price">{{price}}</slot>
      </div>
      <div v-if="$slots.messaging" class="cdr-inset cdr-inset--squish cdr-card--content__messaging">
        <slot name="messaging">{{messaging}}</slot>
      </div>
      <template v-if="$slots.actions">
        <cdr-button-group
          slot="actions"
          class="cdr-inset cdr-inset--squish cdr-card--content__action">
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
     <template v-if="$slots.footer">
       <cdr-button-group
          slot="footer"
          class="cdr-card--content__action">
          <cdr-button
          v-if="userSettingsActionOneCopy"
          :modifier="userSettingsActionOneModifier">
            {{userSettingsActionOneCopy}}
          </cdr-button>
          <cdr-button
          v-if="userSettingsActionTwoCopy"
          :modifier="userSettingsActionTwoModifier">
            {{userSettingsActionTwoCopy}}
          </cdr-button>
        </cdr-button-group>
    </template>
  </cdr-card>
</template>

<script>
import cdrCard from '../card/cdrCard';
import cdrButton from '../button/cdrButton';
import cdrButtonGroup from '../buttonGroup/cdrButtonGroup';
import cdrCol from '../grid/cdrCol';
import cdrRow from '../grid/cdrRow';
import cdrHeading from '../heading/cdrHeading';
import cdrImg from '../image/cdrImg';
import cdrMediaObject from '../mediaObject/cdrMediaObject';

export default {
  name: 'cdr-card-content',
  components: {
    cdrCard,
    cdrButton,
    cdrButtonGroup,
    cdrCol,
    cdrHeading,
    cdrImg,
    cdrMediaObject,
    cdrRow,
  },
  extends: cdrCard,
  props: {
    author: String,
    authorTitle: String,
    profile: String,
    creationTime: String,
    /**
    * Path to primary image
    **/
    media: String,
    /**
    * set this to top when there is no attribution
    **/
    mediaGutter: String,
    /**
    * this is set to top when there is no attribution
    **/
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
    snapshotLocation: String,
    snapshotDistance: String,
    snapshotDifficulty: String,
    snapshotActivityLvl: String,
    snapshotDuration: String,
    price: String,
    summary: String,
    /**
    * use this to pass messaging markup as a property rather than inline
    **/
    messaging: String,
    /**
    * action button modifiers (primary, secondary, ...)
    **/
    actionOneModifier: {
      type: String,
      required: false,
    },
    actionOneCopy: String,
    /**
    * action button modifiers (primary, secondary, ...)
    **/
    actionTwoModifier: {
      type: String,
      required: false,
    },
    actionTwoCopy: String,
    /**
    * User settings button modifiers (temp to be replaced with icon selections)
    **/
    userSettingsActionOneModifier: {
      type: String,
      required: false,
    },
    /**
    * any needed copy
    **/
    userSettingsActionOneCopy: String,
    /**
    * User settings button modifiers (temp to be replaced with icon selections)
    **/
    userSettingsActionTwoModifier: {
      type: String,
      required: false,
    },
    /**
    * any needed copy
    **/
    userSettingsActionTwoCopy: String,
    snapshot: {
      required: false,
    },
  },
  computed: {
    mediaGutterClass() {
      if (this.authorTitle == null) {
        return 'cdr-inset cdr-inset--squish cdr-inset--remove-top';
      }
      return 'cdr-inset cdr-inset--squish';
    },
    mediaFigureRadiusClass() {
      if (this.authorTitle == null) {
        return 'top';
      }
      return 'none';
    },
  },
};
</script>

