<template>
  <div id="app" class="container-fluid">
    <test data-backstop="test"></test>
    <cdr-card>
      <cdr-button data-backstop="button">A default button</cdr-button>
      <cdr-button theme="red" data-backstop="button-red">A red button</cdr-button>
      <cdr-button theme="blue" data-backstop="button-blue">A blue button</cdr-button>
    </cdr-card>
    
    <h2>Complex grid example</h2>
    
    <cdr-row :cols="1" :cols-md="4" :gutter="0">
      <cdr-col>
        <cdr-card>One</cdr-card>
      </cdr-col>
      <cdr-col :cols="7">
        <cdr-card>Two</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>Three</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>Four</cdr-card>
      </cdr-col>
      <cdr-col :span="12" :isRow="true">
        <cdr-col :span="12" :span-md="9" :isRow="true">
          <cdr-col :span="12" :span-md="4">
            <cdr-card>
              Five
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, labore. Quos dolor tempore accusamus eius, voluptas, ipsum nulla. At fugiat quas est modi autem quam dolores maxime, provident commodi alias.</p>
            </cdr-card>
          </cdr-col>
          <cdr-col :span="12" :span-md="8" :isRow="true" :cols="1" :cols-md="2">
            <cdr-col>
              <cdr-card>Six</cdr-card>
            </cdr-col>
            <cdr-col>
              <cdr-card>Seven</cdr-card>
            </cdr-col>
            <cdr-col :span="12">
              <cdr-card>Eight</cdr-card>
            </cdr-col>
          </cdr-col>
          <cdr-col :span="12" :span-md="9">
            <cdr-card>
              Nine
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minima aliquam reprehenderit iusto ratione nihil ipsum, perferendis quasi nulla ad quis. Consequuntur odio blanditiis aliquid voluptatem, veniam porro, ad assumenda!</p>
            </cdr-card>
          </cdr-col>
          <cdr-col :span="12" :span-md="3">
            <cdr-card>
              Ten
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </cdr-card>
          </cdr-col>
        </cdr-col>
        <cdr-col :span="12" :span-md="3">
          <cdr-card>
            Eleven
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, at, illum, earum quibusdam temporibus, molestiae doloremque iure ad est pariatur? Minima, fugit, accusantium. Aspernatur consectetur, labore enim ratione ducimus.</p>
          </cdr-card>
        </cdr-col>
      </cdr-col>
      <cdr-col>
        <cdr-card>
          Twelve
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </cdr-card>
      </cdr-col>
      <cdr-col :span="12" :span-md="6">
        <cdr-card>
          Thirteen
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque suscipit cum nemo aperiam esse, error ipsam, at aliquam similique optio est quaerat impedit id hic asperiores veritatis unde quod voluptatibus.</p>
        </cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>
          Fourteen
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </cdr-card>
      </cdr-col>
    </cdr-row>

    <h2>Grid Playground</h2>

    <cdr-row :cols="3" :cols-md="4" :gutter="0">
      <cdr-col>
        <cdr-card>demo</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>demo</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>demo</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>demo</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>demo</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>demo</cdr-card>
      </cdr-col>
    </cdr-row>

  </div>
</template>

<script>
  import Components from './components/_index';
  import test from './examples/testing/Test';

  // import grid from './examples/grid/Grid';

  const prefix = 'cdr';
  Object.keys(Components).forEach((key) => {
    Components[key].name = `${prefix}-${Components[key].name}`;
    Components[`${prefix}${key}`] = Components[key];
    delete Components[key];
  });

  Components.test = test;
  // Components.grid = grid;

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
