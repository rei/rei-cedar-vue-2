<template>
  <!-- eslint-disable max-len -->
  <div data-backstop="row-mosaic">
    <cdr-row
      cols="1 4@sm"
    >
      <cdr-col>
        <div class="row-demo">
          One
        </div>
      </cdr-col>
      <cdr-col cols="7">
        <div class="row-demo">
          Two
        </div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">
          Three
        </div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">
          Four
        </div>
      </cdr-col>
      <cdr-col
        span="12"
        is-row
      >
        <cdr-col
          span="12 9@sm"
          is-row
        >
          <cdr-col
            span="12 4@sm"
          >
            <div class="row-demo">
              Five
              <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, labore. Quos dolor tempore accusamus eius, voluptas, ipsum nulla. At fugiat quas est modi autem quam dolores maxime, provident commodi alias.</cdr-text>
            </div>
          </cdr-col>
          <cdr-col
            span="12 8@sm"
            is-row
            cols="1 2@sm"
          >
            <cdr-col>
              <div class="row-demo">
                Six
              </div>
            </cdr-col>
            <cdr-col>
              <div class="row-demo">
                Seven
              </div>
            </cdr-col>
            <cdr-col span="12">
              <div class="row-demo">
                Eight
              </div>
            </cdr-col>
          </cdr-col>
          <cdr-col
            span="12 9@sm"
          >
            <div class="row-demo">
              Nine
              <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minima aliquam reprehenderit iusto ratione nihil ipsum, perferendis quasi nulla ad quis. Consequuntur odio blanditiis aliquid voluptatem, veniam porro, ad assumenda!</cdr-text>
            </div>
          </cdr-col>
          <cdr-col
            span="12 3@sm"
          >
            <div class="row-demo">
              Ten
              <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</cdr-text>
            </div>
          </cdr-col>
        </cdr-col>
        <cdr-col
          span="12 3@sm"
        >
          <div class="row-demo">
            Eleven
            <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, at, illum, earum quibusdam temporibus, molestiae doloremque iure ad est pariatur? Minima, fugit, accusantium. Aspernatur consectetur, labore enim ratione ducimus.</cdr-text>
          </div>
        </cdr-col>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">
          Twelve
          <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</cdr-text>
        </div>
      </cdr-col>
      <cdr-col
        span="12 6@sm"
      >
        <div class="row-demo">
          Thirteen
          <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque suscipit cum nemo aperiam esse, error ipsam, at aliquam similique optio est quaerat impedit id hic asperiores veritatis unde quod voluptatibus.</cdr-text>
        </div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">
          Fourteen
          <cdr-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</cdr-text>
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'ComplexGrid',
  components: Components,
};
</script>
