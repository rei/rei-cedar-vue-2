<template>
  <div data-backstop="inline-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Inset space classes for all around padding
    </cdr-text>
    <ul>
      <li
        v-for="item in space"
        :key="item.id"
        class="example cdr-space-mb-one-x"
      >
        <div
          class="space-example"
          :class="[item]"
        >
          <span>{{ item }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesSpaceInline',
  components: Components,
  data() {
    return {
      space: [
        'cdr-space-inset-eighth-x',
        'cdr-space-inset-eighth-x-squish',
        'cdr-space-inset-eighth-x-stretch',
        'cdr-space-inset-quarter-x',
        'cdr-space-inset-quarter-x-squish',
        'cdr-space-inset-quarter-x-stretch',
        'cdr-space-inset-half-x',
        'cdr-space-inset-half-x-squish',
        'cdr-space-inset-half-x-stretch',
        'cdr-space-inset-three-quarter-x',
        'cdr-space-inset-three-quarter-x-squish',
        'cdr-space-inset-three-quarter-x-stretch',
        'cdr-space-inset-one-x',
        'cdr-space-inset-one-x-squish',
        'cdr-space-inset-one-x-stretch',
        'cdr-space-inset-one-and-a-half-x',
        'cdr-space-inset-one-and-a-half-x-squish',
        'cdr-space-inset-one-and-a-half-x-stretch',
        'cdr-space-inset-two-x',
        'cdr-space-inset-two-x-squish',
        'cdr-space-inset-two-x-stretch',
        'cdr-space-inset-four-x',
        'cdr-space-inset-four-x-squish',
        'cdr-space-inset-four-x-stretch',
      ],
    };
  },
};

</script>

<style >
.example {
  border: 1px solid;
}

.space-example::before {
  background-color: black;
  display: block;
  height: auto;
}
</style>
