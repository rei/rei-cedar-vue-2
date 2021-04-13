<template>
  <div
    :ref="rootEl"
    :class="mapClasses(
      $style,
      baseClass,
      openClass,
      exitingClass,
      positionClass,
      cornerClass,
      closedClass,
    )"
  >
    <div
      v-bind="$attrs"
      :class="mapClasses($style, 'cdr-popup__content', contentClass)"
      :ref="popupEl"
    >
      <slot />
    </div>
    <div :class="$style['cdr-popup__arrow']"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect, nextTick, onMounted, onUnmounted } from 'vue';
import debounce from 'lodash-es/debounce';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';

export default defineComponent({
  name: 'CdrPopup',
  inheritAttrs: false,
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      required: false,
      default: 'top',
      validator: (value) => propValidator(
        value,
        ['top', 'bottom', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      default: true,
    },
    contentClass: {
      type: String,
    },
  },
  setup(props, ctx) {
    const baseClass = 'cdr-popup';

    const keyHandler = ref(undefined);
    const clickHandler = ref(undefined);
    const resizeHandler = ref(undefined); // NOT NEEDED?
    const pos = ref(props.position);
    const corner = ref(undefined);
    const exiting = ref(false);
    const popupRect = ref(undefined);
    const closed = ref(!props.opened);

    const popupEl = ref(null);
    const rootEl = ref(null);

    const positionClass = computed(() => props.opened || exiting ? `cdr-popup--${pos}` : undefined);
    const cornerClass = computed(() => corner ? `cdr-popup--corner-${corner}` : undefined);
    const openClass = computed(() => props.opened ? 'cdr-popup--open' : undefined);
    const closedClass = computed(() => closed && !exiting ? 'cdr-popup--closed' : undefined);
    const exitingClass = computed(() => exiting ? 'cdr-popup--exit' : undefined);

    const closePopup = (e) => {
      ctx.emit('closed', e);
    }

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
        case 'Esc':
          closePopup(e);
          break;
        default: break;
      }
    }

    const handleClick = (e) => {
      nextTick(() => {
        if (e.target !== popup && !popup.contains(e.target)) {
          closePopup(e);
        }
      });
    }

    const handleResize = () => {
      debounce(() => {
        measurePopup();
      }, 300);
    }

    const addHandlers = () => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClick);
    }

    const measurePopup = () => {
      closed = false;
      nextTick(() => {
        popupRect = popup.getBoundingClientRect();
        closed = true;
      });
    }

    const calculatePlacement = (triggerRect, popupRect, screenWidth, screenHeight) => {
      const offset = 14; // 10px for arrow 4px for spacing
      const borderSize = 2; // need to include border for corner calculations
      const triggerCenterY = triggerRect.top + (triggerRect.height / 2);
      const triggerCenterX = triggerRect.left + (triggerRect.width / 2);

      const dirs = {
        top: triggerRect.top - popupRect.height - offset,
        bottom: screenHeight - triggerRect.bottom - popupRect.height - offset,
        left: triggerRect.left - popupRect.width - offset,
        right: screenWidth - triggerRect.right - popupRect.width - offset,
      };

      const corners = {
        left: triggerCenterX - (popupRect.width / 2) - borderSize <= 0,
        right: triggerCenterX + (popupRect.width / 2) + borderSize >= screenWidth,
        top: triggerCenterY - (popupRect.height / 2) - borderSize <= 0,
        bottom: triggerCenterY + (popupRect.height / 2) + borderSize >= screenHeight,
      };

      const invert = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left',
      };

      const inverse = invert[props.position];
      const validDirs = Object.keys(dirs).filter((dir) => dirs[dir] > 0);
      const sortedDirs = Object.keys(dirs).sort((a, b) => {
        if (dirs[a] > dirs[b]) {
          return -1;
        } if (dirs[a] < dirs[b]) {
          return 1;
        }
        return 0;
      });

      if (dirs[props.position] > 0) {
        // selected position is valid, or no positions are valid
        pos = props.position;
      } else if (dirs[inverse] > 0) {
        // inverted position is valid
        pos = inverse;
      } else if (validDirs.length) {
        // try the angles
        [pos] = validDirs;
      } else {
        // use whichever direction has the most space
        [pos] = sortedDirs;
      }

      if (pos === 'bottom' || pos === 'top') {
        if (corners.left) {
          corner = 'left';
        } else if (corners.right) {
          corner = 'right';
        }
      } else if (corners.top) {
        corner = 'top';
      } else if (corners.bottom) {
        corner = 'bottom';
      }
    }

    const handleOpened = () => {
      closed = false;
      pos = props.position;
      corner = undefined;

      if (props.autoPosition) {
        nextTick(() => {
          // TODO: how to get $el?????
          const triggerRect = rootEl.parentElement.getBoundingClientRect();
          const { innerHeight, innerWidth } = window;
          calculatePlacement(triggerRect, popupRect, innerWidth, innerHeight);
        });
      }

      setTimeout(() => {
        addHandlers();
      }, 1);
    }

    const handleClosed = () => {
      closed = true;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
      exiting = true;
      setTimeout(() => {
        exiting = false;
      }, 200); // $cdr-duration-2;
    }

    watchEffect((props.position) => pos = props.position);
    watchEffect((props.opened) => {
      // if (!!newValue === !!oldValue) return;
      // TODO: watchEffect doesnt run unless it changes???? might need to use `watch`
      if (props.opened) {
        handleOpened();
      } else {
        handleClosed();
      }
    });

    onMounted(() => {
      measurePopup();
      // resizeHandler = handleResize.bind(this); TODO: bind this?
      window.addEventListener('resize', handleResize);
    });
    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    });

    return {
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrPopup.scss">
</style>
