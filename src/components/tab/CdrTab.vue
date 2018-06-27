<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <transition
    name="fly"
    v-on="animationHooks">
    <div
      v-if="active"
      :aria-hidden="!active"
      :class="[modifierClass]"
      :key="name">
      <slot/>
    </div>
  </transition>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrTab',
  mixins: [modifier],
  props: {
    name: String,
    id: String,
  },
  data() {
    return {
      active: false,
      offsetX: 0,
      tabId: this.id || this.key,
      animationDirection: 'flyRight',
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tab';
    },
    animationHooks() {
      return {
        beforeEnter: this.setEnterStart,
        afterEnter: this.setEnterEnd,
        beforeLeave: this.setLeaveStart,
        afterLeave: this.setLeaveEnd,
        ...this.$listeners,
      };
    },
  },
  methods: {
    setActive(state) {
      this.active = state;
    },
    setAnimationDirection(direction) {
      this.animationDirection = direction;
    },
    setOffsetX(x) {
      this.offsetX = x;
    },
    setEnterStart(element) {
      const el = element;
      el.style.animationDirection = 'reverse';
      el.classList.add(this.animationDirection);
    },
    setEnterEnd(element) {
      const el = element;
      el.style.animationDirection = '';
      el.classList.remove(this.animationDirection);
    },
    setLeaveStart(element) {
      const el = element;
      el.classList.add(this.animationDirection);
    },
    setLeaveEnd(element) {
      const el = element;
      el.classList.remove(this.animationDirection);
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTab.pcss';
</style>
