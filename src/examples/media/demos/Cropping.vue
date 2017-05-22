<template>
  <div>
    <h3>Cropping (with landscape images)</h3>
    <cdr-row :cols="1" :colsMd="3">
      <cdr-col>
        <div>
          <p>Left</p>
          <cdr-img ratio="square" :crop="['left']" alt="cdr-img example" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Center</p>
          <cdr-img ratio="square" :crop="['x-center']" alt="cdr-img example" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Right</p>
          <cdr-img ratio="square" :crop="['right']" alt="cdr-img example" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Cropping (with portrait images)</h3>
    <cdr-row :cols="1" :colsMd="3">
      <cdr-col>
        <div>
          <p>Top</p>
          <cdr-img ratio="square" :crop="['top']" alt="cdr-img example" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Center</p>
          <cdr-img ratio="square" :crop="['y-center']" alt="cdr-img example" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Bottom</p>
          <cdr-img ratio="square" :crop="['bottom']" alt="cdr-img example" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Cropping (combinations)</h3>
    <cdr-row :justify="'center'">
      <cdr-col :span="9">
        <div>
          <p>Reference Image</p>
          <cdr-img alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>
    <cdr-row :cols="1" :colsMd="3">
      <cdr-col>
        <div>
          <p>top, left</p>
          <cdr-img ratio="16-9" :crop="['top', 'left']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>top, x-center</p>
          <cdr-img ratio="16-9" :crop="['top', 'x-center']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>top, right</p>
          <cdr-img ratio="16-9" :crop="['top', 'right']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>y-center, left</p>
          <cdr-img ratio="16-9" :crop="['y-center', 'left']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>y-center, x-center</p>
          <cdr-img ratio="16-9" :crop="['y-center', 'x-center']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>y-center, right</p>
          <cdr-img ratio="16-9" :crop="['y-center', 'right']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>bottom, left</p>
          <cdr-img ratio="16-9" :crop="['bottom', 'left']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>bottom, x-center</p>
          <cdr-img ratio="16-9" :crop="['bottom', 'x-center']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>bottom, right</p>
          <cdr-img ratio="16-9" :crop="['bottom', 'right']" alt="cdr-img example" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'cropping',
  components: Components,
};
</script>
