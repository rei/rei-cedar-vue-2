<template>
  <section :class="[buildClass]">
    <!-- Card Image Slot-->
    <slot name="img" ref="img">
        <img v-if="img" :src="img" :alt="imgAlt" class="cdr-card__img">
    </slot>



    <!--Show custom block when no-block prop is set-->
    <template v-if="noBlock">
        <slot></slot>
    </template>
    <!-- Card Standard Blocks-->
    <div :class="blockClass" v-else>
        <cdr-heading :level="level" :modifier="['section-title']">
          <slot name="title"  class="cdr-card__title" v-if="!cardLink">{{cardTitle}}</slot>
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

export default {
  name: 'cdr-card',
  components: {
    cdrHeading,
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
    img: {
      type: String,
      default: null,
    },
    imgAlt: {
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
