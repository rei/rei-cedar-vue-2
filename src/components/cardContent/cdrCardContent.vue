<template>
  <cdr-card
  modifier="content"
  >
    <template v-if="this.authorTitle != null">
      <header class="cdr-inset">
          <cdr-media-object
          :img-src="profile"
          img-modifier="circle">
            <cdr-heading :level="authorTitle">{{author}}</cdr-heading>
            <p>{{creationTime}}</p>
          </cdr-media-object>
      </header>
    </template>

   <section class="cdr-inset cdr-inset--remove-top cdr-card--content__body">
      <cdr-media-object
        :img-src="media"
        :img-src-alt="mediaAlt"
        img-modifier="responsive"
        modifier="top stretch"
        :mediaUrl="titleUrl"
        :media-title="title"
        :mediaSubTitle="subTitle"
        media-title-class="cdr-card--content__title cdr-card--content__title__action"
        :img-src-radius= "imgSrcRadiusClass" >
        <cdr-heading :level="level">{{title}}</cdr-heading>
        <template v-if="snapshot">
          <ul class="cdr-card--content__snapshot cdr-list cdr-list--inline cdr-list--bulleted">
             <li v-for="item in snapshot">
              {{ item }}
            </li>
          </ul>
        </template>
        <div v-if="$slots.summary"
        class="cdr-card--content__summary">
          <slot name="summary">{{summary}}</slot>
        </div>
        <div v-if="$slots.price"
        class="cdr-card--content__price">
          <slot name="price">{{price}}</slot>
        </div>
        <div v-if="$slots.messaging"
        class="cdr-card--content__messaging">
          <slot name="messaging">{{messaging}}</slot>
        </div>
      </cdr-media-object>
    </section>

      <template v-if="actions">
        <cdr-button-group
          class="cdr-inset cdr-inset--remove-top cdr-card--content__action">
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

     <template v-if="userSettings">
     <footer class="cdr-inset cdr-inset--remove-top">
       <cdr-button-group
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
      </footer>
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
    */
    media: String,
    /**
    * set this to top when there is no attribution
    */
    mediaGutter: String,
    /**
    * this is set to top when there is no attribution
    */
    mediaRadius: String,
    mediaAlt: {
      type: String,
      default: ' ',
    },
    title: String,
    titleUrl: String,
    level: {
      default: '2',
    },
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
    */
    messaging: String,
    actions: {
      type: Boolean,
      default: false,
    },
    /**
    * action button modifiers (primary, secondary, ...)
    */
    actionOneModifier: {
      type: String,
      required: false,
    },
    actionOneCopy: String,
    /**
    * action button modifiers (primary, secondary, ...)
    */
    actionTwoModifier: {
      type: String,
      required: false,
    },
    actionTwoCopy: String,
    userSettings: {
      type: Boolean,
      default: false,
    },
    /**
    * User settings button modifiers (temp to be replaced with icon selections)
    */
    userSettingsActionOneModifier: {
      type: String,
      required: false,
    },
    /**
    * any needed copy
    */
    userSettingsActionOneCopy: String,
    /**
    * User settings button modifiers (temp to be replaced with icon selections)
    */
    userSettingsActionTwoModifier: {
      type: String,
      required: false,
    },
    /**
    * any needed copy
    */
    userSettingsActionTwoCopy: String,
    snapshot: {
      required: false,
    },
  },
  computed: {
    imgSrcRadiusClass() {
      if (this.authorTitle == null) {
        return 'top';
      }
      return 'none';
    },
  },
};
</script>

