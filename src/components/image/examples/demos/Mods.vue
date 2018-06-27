<template>
  <div>
    <h3>Image modifiers</h3>
    <cdr-row
      cols="2 4@md"
    >
      <cdr-col>
        <div>
          <p>Responsive</p>
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
          <p>Rounded</p>
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
          <p>circle</p>
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
import Components from 'componentsdir/_index';

export default {
  name: 'Mods',
  components: Components,
};
</script>
