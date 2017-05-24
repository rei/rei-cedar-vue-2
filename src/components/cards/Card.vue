<template>
  <section :class="[buildClass]" v-if="!href">
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
        <slot></slot>
    </div>
  </section>

  <a :class="[buildClass]" :href="href" :target="target" :rel="newRel" v-else>
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
        <slot></slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'cdr-card',
    props: {
      href: String,
      target: String,
      rel: String,
      theme: String,
      modifier: {
        required: false,
        default: () => [],
      },
      noBlock: {
        type: Boolean,
        default: false,
      },
      // Image
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
