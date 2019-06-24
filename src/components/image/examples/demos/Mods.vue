<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Image modifiers
    </cdr-text>
    <cdr-row
      cols="2 4@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Responsive
          </cdr-text>
          <cdr-img
            class="cdr-img-test"
            ratio="4-3"
            modifier="responsive"
            alt="ratio responsive"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            class="cdr-img-test"
            modifier="responsive"
            alt="standard responsive"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Rounded
          </cdr-text>
          <cdr-img
            class="cdr-img-test"
            ratio="4-3"
            radius="rounded"
            alt="ratio rounded"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            class="cdr-img-test"
            radius="rounded"
            alt="landscape rounded"
            src="http://placehold.it/350x150"
          />
          <cdr-img
            class="cdr-img-test"
            radius="rounded"
            alt="square rounded"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            circle
          </cdr-text>
          <cdr-img
            class="cdr-img-test"
            ratio="4-3"
            radius="circle"
            alt="ratio circle"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            class="cdr-img-test"
            radius="circle"
            alt="landscape circle"
            src="http://placehold.it/350x150"
          />
          <cdr-img
            class="cdr-img-test"
            radius-="circle"
            alt="square circle"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'Mods',
  components: Components,
};
</script>
