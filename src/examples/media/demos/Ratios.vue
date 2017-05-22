<template>
  <cdr-row :cols="2" :colsMd="4">
        <cdr-col>
          <div>
            <p>Square</p>
            <cdr-img ratio="square" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>1-2</p>
            <cdr-img ratio="1-2" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>2-3</p>
            <cdr-img ratio="2-3" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>3-4</p>
            <cdr-img ratio="3-4" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>9-16</p>
            <cdr-img ratio="9-16" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>2-1</p>
            <cdr-img ratio="2-1" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>3-2</p>
            <cdr-img ratio="3-2" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>4-3</p>
            <cdr-img ratio="4-3" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <p>16-9</p>
            <cdr-img ratio="16-9" alt="cdr-img example" src="http://placehold.it/300x100"></cdr-img>
          </div>
        </cdr-col>
      </cdr-row>
</template>

<script>
import Components from '../../../components/_index';

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
