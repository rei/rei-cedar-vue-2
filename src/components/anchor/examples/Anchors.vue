<template>
  <div>
    <h2>Anchors</h2>

    <h3>Default Link, No props</h3>
    <!-- Default Link, no props -->
    <div class="anchor-example">
      <cdr-a/>
    </div>

    <!-- Too much content Link -->
    <h3>Content Resilience, too much content</h3>
    <div class="anchor-example">
      <cdr-a>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Possimus animi maxime laboriosam nobis veniam fugit obca
        nihil enim, magnam aliquid temporibus perspiciatis amet
      </cdr-a>
    </div>

    <!-- Too much content Link -->
    <h3>Content Resilience, too little content</h3>
    <div class="anchor-example">
      <cdr-a>K</cdr-a>
    </div>

    <default-anchor/>
    <contrast-anchor/>
    <standalone-anchor/>
    <button-anchor/>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import defaultAnchor from './demo/Default';
import contrastAnchor from './demo/Contrast';
import standaloneAnchor from './demo/Standalone';
import buttonAnchor from './demo/Button';

const components = Components;
components.defaultAnchor = defaultAnchor;
components.contrastAnchor = contrastAnchor;
components.standaloneAnchor = standaloneAnchor;
components.buttonAnchor = buttonAnchor;

export default {
  name: 'Anchors',
  components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }

  .overlay-example {
    background-color: black;
  }
</style>

