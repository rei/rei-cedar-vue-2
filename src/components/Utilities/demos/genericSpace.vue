<template>
  <div data-backstop="generic-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Generic space classes for padding or margin @ top, right, bottom, and left
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
  name: 'UtilitiesSpace',
  components: Components,
  data() {
    return {
      space: [
        'cdr-space-pr-eighth-x',
        'cdr-space-pr-quarter-x',
        'cdr-space-pr-half-x',
        'cdr-space-pr-three-quarter-x',
        'cdr-space-pr-one-x',
        'cdr-space-pr-one-and-a-half-x',
        'cdr-space-pr-two-x',
        'cdr-space-pr-four-x',
        'cdr-space-pl-eighth-x',
        'cdr-space-pl-quarter-x',
        'cdr-space-pl-half-x',
        'cdr-space-pl-three-quarter-x',
        'cdr-space-pl-one-x',
        'cdr-space-pl-one-and-a-half-x',
        'cdr-space-pl-two-x',
        'cdr-space-pl-four-x',
        'cdr-space-pt-eighth-x',
        'cdr-space-pt-quarter-x',
        'cdr-space-pt-half-x',
        'cdr-space-pt-three-quarter-x',
        'cdr-space-pt-one-x',
        'cdr-space-pt-one-and-a-half-x',
        'cdr-space-pt-two-x',
        'cdr-space-pt-four-x',
        'cdr-space-pb-eighth-x',
        'cdr-space-pb-quarter-x',
        'cdr-space-pb-half-x',
        'cdr-space-pb-three-quarter-x',
        'cdr-space-pb-one-x',
        'cdr-space-pb-one-and-a-half-x',
        'cdr-space-pb-two-x',
        'cdr-space-pb-four-x',
        'cdr-space-mr-eighth-x',
        'cdr-space-mr-quarter-x',
        'cdr-space-mr-half-x',
        'cdr-space-mr-three-quarter-x',
        'cdr-space-mr-one-x',
        'cdr-space-mr-one-and-a-half-x',
        'cdr-space-mr-two-x',
        'cdr-space-mr-four-x',
        'cdr-space-ml-eighth-x',
        'cdr-space-ml-quarter-x',
        'cdr-space-ml-half-x',
        'cdr-space-ml-three-quarter-x',
        'cdr-space-ml-one-x',
        'cdr-space-ml-one-and-a-half-x',
        'cdr-space-ml-two-x',
        'cdr-space-ml-four-x',
        'cdr-space-mt-eighth-x',
        'cdr-space-mt-quarter-x',
        'cdr-space-mt-half-x',
        'cdr-space-mt-three-quarter-x',
        'cdr-space-mt-one-x',
        'cdr-space-mt-one-and-a-half-x',
        'cdr-space-mt-two-x',
        'cdr-space-mt-four-x',
        'cdr-space-mb-eighth-x',
        'cdr-space-mb-quarter-x',
        'cdr-space-mb-half-x',
        'cdr-space-mb-three-quarter-x',
        'cdr-space-mb-one-x',
        'cdr-space-mb-one-and-a-half-x',
        'cdr-space-mb-two-x',
        'cdr-space-mb-four-x',
      ],
    };
  },
};

</script>

<style >
.example {
  background-color: rgba(27, 28, 28, 0.6);
  border: 1px solid;
}

.example > * {
  background-color: rgba(249, 229, 229, 0.8);
}

.space-example::before {
  background-color: black;
  display: block;
  height: auto;
}
</style>
