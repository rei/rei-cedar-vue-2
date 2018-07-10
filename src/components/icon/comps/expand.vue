<template>
  <!-- File generated during build -->
  <!-- eslint-disable -->
  <cdr-icon v-bind="$props">
    <slot />
    <path d="M19.002 6.42l-4.295 4.287a1 1 0 0 1-1.414-1.415L17.583 5h-2.58a1 1 0 1 1 0-2h5.006a.997.997 0 0 1 .992 1.029V9a1 1 0 0 1-2 .004l.001-2.584zM5 17.58l4.296-4.287a1 1 0 0 1 1.414 1.414L6.419 19H9a1 1 0 1 1 0 2H3.993A.997.997 0 0 1 3 19.97V15a1 1 0 0 1 2-.004v2.584z"></path>
  </cdr-icon>
</template>

<script>
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconExpand',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
};
</script>
