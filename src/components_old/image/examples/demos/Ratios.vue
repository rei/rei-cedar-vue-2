<template>
  <cdr-row cols="2" cols-md="4">
        <cdr-col>
          <div>
            <p>Square</p>
            <cdr-img ratio="square" alt="ratio square" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>1-2</p>
            <cdr-img ratio="1-2" alt="ratio 1-2" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>2-3</p>
            <cdr-img ratio="2-3" alt="ratio 2-3" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>3-4</p>
            <cdr-img ratio="3-4" alt="ratio 3-4" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>9-16</p>
            <cdr-img ratio="9-16" alt="ratio 9-16" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>2-1</p>
            <cdr-img ratio="2-1" alt="ratio 2-1" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>3-2</p>
            <cdr-img ratio="3-2" alt="ratio 3-2" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>4-3</p>
            <cdr-img ratio="4-3" alt="ratio 4-3" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>16-9</p>
            <cdr-img ratio="16-9" alt="ratio 16-9" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
      </cdr-row>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'ratio',
  components: Components,
};
</script>

<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
