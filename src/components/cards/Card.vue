<template>
  <section :class="[buildClass]">
    <!-- Card Image Slot-->
      <cdr-img class="cdr-card__media cdr-image--responsive" :alt="cardImgeAlt" :src="cardImg"></cdr-img>
    <!--Show custom block when no-block prop is set-->
    <template v-if="noBlock">
        <slot></slot>
    </template>
    <!-- Card Standard Blocks-->
    <div :class="blockClass" v-else>
        <cdr-heading :level="level">
          <slot name="title" v-if="!cardLink"><span class="cdr-card__title">{{cardTitle}}</span></slot>
          <slot name="title" v-else><a class="cdr-card__title cdr-card__title__link" :href="cardLink">{{cardTitle}}</a></slot>
        </cdr-heading>
        <div class="cdr-card__body">
          <slot name="body"></slot>
        </div>
    </div>
  </section>
</template>

<script>
import cdrHeading from '../headings/Heading';
import cdrImg from '../media/Image';

export default {
  name: 'cdr-card',
  components: {
    cdrHeading,
    cdrImg,
  },
  props: {
    theme: String,
    cardTitle: String,
    cardLink: String,
    modifier: {
      required: false,
      default: () => [],
    },
    noBlock: {
      type: Boolean,
      default: false,
    },
    // Image
    level: {
      type: Number,
      default: 2,
    },
    cardImg: {
      type: String,
    },
    cardImgAlt: {
      type: String,
      default: null,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buildClass() {
      const baseClass = 'cdr-card';
      let final = '';

      if (this.theme) {
        final += `${this[this.theme][baseClass]} `;

        this.modifier.forEach((mod) => {
          final += `${this[this.theme][`${baseClass}--${mod}`]} `;
        });
      } else {
        final += `${baseClass} `;

        this.modifier.forEach((mod) => {
          final += `${baseClass}--${mod} `;
        });
      }
      return final;
    },
    blockClass() {
      return [
        'cdr-card__block',
        this.overlay ? 'cdr-card__img--overlay' : null,
      ];
    },
  },
};
</script>

<style>
</style>
