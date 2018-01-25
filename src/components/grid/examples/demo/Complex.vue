<template>
  <div data-backstop="row-mosaic">
    <cdr-row
      cols="1"
      cols-sm="4"
    >
      <cdr-col>
        <div class="row-demo">One</div>
      </cdr-col>
      <cdr-col cols="7">
        <div class="row-demo">Two</div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">Three</div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">Four</div>
      </cdr-col>
      <cdr-col
        span="12"
        is-row
      >
        <cdr-col
          span="12"
          span-sm="9"
          is-row
        >
          <cdr-col
            span="12"
            span-sm="4"
          >
            <div class="row-demo">
              Five
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, labore.
              Quos dolor tempore accusamus eius, voluptas, ipsum nulla. At fugiat quas est modi
              autem quam dolores maxime, provident commodi alias.</p>
            </div>
          </cdr-col>
          <cdr-col
            span="12"
            span-sm="8"
            is-row
            cols="1"
            cols-sm="2"
          >
            <cdr-col>
              <div class="row-demo">Six</div>
            </cdr-col>
            <cdr-col>
              <div class="row-demo">Seven</div>
            </cdr-col>
            <cdr-col span="12">
              <div class="row-demo">Eight</div>
            </cdr-col>
          </cdr-col>
          <cdr-col
            span="12"
            span-sm="9"
          >
            <div class="row-demo">
              Nine
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minima
              aliquam reprehenderit iusto ratione nihil ipsum, perferendis quasi nulla ad quis.
              Consequuntur odio blanditiis aliquid voluptatem, veniam porro, ad assumenda!</p>
            </div>
          </cdr-col>
          <cdr-col
            span="12"
            span-sm="3"
          >
            <div class="row-demo">
              Ten
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.</p>
            </div>
          </cdr-col>
        </cdr-col>
        <cdr-col
          span="12"
          span-sm="3"
        >
          <div class="row-demo">
            Eleven
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, at, illum,
            earum quibusdam temporibus, molestiae doloremque iure ad est pariatur? Minima, fugit,
            accusantium. Aspernatur consectetur, labore enim ratione ducimus.</p>
          </div>
        </cdr-col>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">
          Twelve
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </cdr-col>
      <cdr-col
        span="12"
        span-sm="6"
      >
        <div class="row-demo">
          Thirteen
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque suscipit cum nemo
          aperiam esse, error ipsam, at aliquam similique optio est quaerat impedit id hic
          asperiores veritatis unde quod voluptatibus.</p>
        </div>
      </cdr-col>
      <cdr-col>
        <div class="row-demo">
          Fourteen
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'ComplexGrid',
  components: Components,
};
</script>
