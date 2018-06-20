<template>
  <cdr-row
    cols="2 4@md"
  >
    <cdr-col>
      <div>
        <p>Square</p>
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
        <p>1-2</p>
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
        <p>2-3</p>
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
        <p>3-4</p>
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
        <p>9-16</p>
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
        <p>2-1</p>
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
        <p>3-2</p>
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
        <p>4-3</p>
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
        <p>16-9</p>
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
