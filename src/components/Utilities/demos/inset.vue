<template>
  <div data-backstop="inset-space-utilities">
    <h2>Inset classes</h2>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Align classes
    </cdr-text>

    <cdr-card class="example">
      <p class="cdr-inset--xxs">
        cdr-inset--xxs
      </p>
      <p class="cdr-inset--xxs cdr-inset--squish">
        cdr-inset--xxs + cdr-inset-squish
      </p>
      <p class="cdr-inset--xxs cdr-inset--stretch">
        cdr-inset--xxs + cdr-inline--stretch
      </p>
      <p class="cdr-inset--xs">
        cdr-inset--xs
      </p>
      <p class="cdr-inset--xs cdr-inset--squish">
        cdr-inset--xs + cdr-inset-squish
      </p>
      <p class="cdr-inset--xs cdr-inset--stretch">
        cdr-inset--xs + cdr-inline--stretch
      </p>
      <p class="cdr-inset--sm">
        cdr-inset--sm
      </p>
      <p class="cdr-inset--sm cdr-inset--squish">
        cdr-inset--sm + cdr-inset-squish
      </p>
      <p class="cdr-inset--sm cdr-inset--stretch">
        cdr-inset--sm + cdr-inline--stretch
      </p>
      <p class="cdr-inset">
        cdr-inset
      </p>
      <p class="cdr-inset--squish">
        cdr-inset-squish
      </p>
      <p class="cdr-inset--stretch">
        cdr-inline--stretch
      </p>
      <p class="cdr-inset--lg">
        cdr-inset--lg
      </p>
      <p class="cdr-inset--lg cdr-inset--squish">
        cdr-inset--lg + cdr-inset-squish
      </p>
      <p class="cdr-inset--lg cdr-inset--stretch">
        cdr-inset--lg + cdr-inline--stretch
      </p>
      <p class="cdr-inset--xl">
        cdr-inset--xl
      </p>
      <p class="cdr-inset--xl cdr-inset--squish">
        cdr-inset--xl + cdr-inset-squish
      </p>
      <p class="cdr-inset--xl cdr-inset--stretch">
        cdr-inset--xl + cdr-inline--stretch
      </p>
      <p class="cdr-inset--squish cdr-inset--remove-top">
        cdr-inset-squish + cdr-inset--remove-top
      </p>
      <p class="cdr-inset cdr-inset--remove-right">
        cdr-inset + cdr-inset--remove-right
      </p>
      <p class="cdr-inset cdr-inset--remove-bottom">
        cdr-inset + cdr-inset--remove-bottom
      </p>
      <p class="cdr-inset cdr-inset--remove-left">
        cdr-inset + cdr-inset--remove-left
      </p>
      <p class="cdr-inset cdr-inset--remove-all">
        cdr-inset + cdr-inset--remove-all
      </p>

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
