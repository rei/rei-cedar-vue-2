<template>
  <cdr-row
    cols="2 4@md"
  >
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">Square</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="square"
          alt="ratio square"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">1-2</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="1-2"
          alt="ratio 1-2"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">2-3</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="2-3"
          alt="ratio 2-3"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">3-4</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="3-4"
          alt="ratio 3-4"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">9-16</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="9-16"
          alt="ratio 9-16"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">2-1</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="2-1"
          alt="ratio 2-1"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">3-2</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="3-2"
          alt="ratio 3-2"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">4-3</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="4-3"
          alt="ratio 4-3"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <cdr-text modifier="subheading">16-9</cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="16-9"
          alt="ratio 16-9"
          src="http://placehold.it/300x100"
        />
      </div>
    </cdr-col>
  </cdr-row>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Ratio',
  components: Components,
};
</script>

<style>
  .cdr-img-test {
    background-color: lightblue;
  }
</style>
