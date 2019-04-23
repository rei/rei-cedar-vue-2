<template>
  <div :class="[$style['cdr-caption'], 'cdr-inset--squish']">
    <p
      v-if="summary"
      :class="$style['cdr-caption__summary']"
    >
      {{ summary }}
    </p>
    <cite
      v-if="credit"
      :class="$style['cdr-caption__cite']"
      class="cdr-text cdr-text--citation"
    >
      {{ credit }}
    </cite>
  </div>
</template>

<script>

/**
 * Cedar 2 component for captions
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCaption',
  props: {
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    credit: String,
  },
};
</script>

<style lang="scss" module>
  @import './styles/CdrCaption.scss';
</style>
