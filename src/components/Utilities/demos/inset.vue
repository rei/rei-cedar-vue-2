<template>
  <div data-backstop="inset-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Inset classes
    </cdr-text>

    <cdr-card class="example">
      <cdr-text class="cdr-inset--xxs">
        cdr-inset--xxs
      </cdr-text>
      <cdr-text class="cdr-inset--xxs cdr-inset--squish">
        cdr-inset--xxs + cdr-inset-squish
      </cdr-text>
      <cdr-text class="cdr-inset--xxs cdr-inset--stretch">
        cdr-inset--xxs + cdr-inline--stretch
      </cdr-text>
      <cdr-text class="cdr-inset--xs">
        cdr-inset--xs
      </cdr-text>
      <cdr-text class="cdr-inset--xs cdr-inset--squish">
        cdr-inset--xs + cdr-inset-squish
      </cdr-text>
      <cdr-text class="cdr-inset--xs cdr-inset--stretch">
        cdr-inset--xs + cdr-inline--stretch
      </cdr-text>
      <cdr-text class="cdr-inset--sm">
        cdr-inset--sm
      </cdr-text>
      <cdr-text class="cdr-inset--sm cdr-inset--squish">
        cdr-inset--sm + cdr-inset-squish
      </cdr-text>
      <cdr-text class="cdr-inset--sm cdr-inset--stretch">
        cdr-inset--sm + cdr-inline--stretch
      </cdr-text>
      <cdr-text class="cdr-inset">
        cdr-inset
      </cdr-text>
      <cdr-text class="cdr-inset--squish">
        cdr-inset-squish
      </cdr-text>
      <cdr-text class="cdr-inset--stretch">
        cdr-inline--stretch
      </cdr-text>
      <cdr-text class="cdr-inset--lg">
        cdr-inset--lg
      </cdr-text>
      <cdr-text class="cdr-inset--lg cdr-inset--squish">
        cdr-inset--lg + cdr-inset-squish
      </cdr-text>
      <cdr-text class="cdr-inset--lg cdr-inset--stretch">
        cdr-inset--lg + cdr-inline--stretch
      </cdr-text>
      <cdr-text class="cdr-inset--xl">
        cdr-inset--xl
      </cdr-text>
      <cdr-text class="cdr-inset--xl cdr-inset--squish">
        cdr-inset--xl + cdr-inset-squish
      </cdr-text>
      <cdr-text class="cdr-inset--xl cdr-inset--stretch">
        cdr-inset--xl + cdr-inline--stretch
      </cdr-text>
      <cdr-text class="cdr-inset--squish cdr-inset--remove-top">
        cdr-inset-squish + cdr-inset--remove-top
      </cdr-text>
      <cdr-text class="cdr-inset cdr-inset--remove-right">
        cdr-inset + cdr-inset--remove-right
      </cdr-text>
      <cdr-text class="cdr-inset cdr-inset--remove-bottom">
        cdr-inset + cdr-inset--remove-bottom
      </cdr-text>
      <cdr-text class="cdr-inset cdr-inset--remove-left">
        cdr-inset + cdr-inset--remove-left
      </cdr-text>
      <cdr-text class="cdr-inset cdr-inset--remove-all">
        cdr-inset + cdr-inset--remove-all
      </cdr-text>

    </cdr-card>
  </div>
</template>

<script>

import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesSpaceInset',
  components: Components,
};
</script>

<style>
  .example {
    background-color: rgba(27, 28, 28, 0.6);
  }

  .example > * {
    background-color: rgba(249, 229, 229, 0.8);
  }
</style>
