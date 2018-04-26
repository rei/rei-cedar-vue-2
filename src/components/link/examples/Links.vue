<template>
  <div>
    <h2>Links</h2>

    <h3>Default Link, No props</h3>
    <div class="anchor-example">
      <cdr-link data-backstop="cdr-link"/>
    </div>

    <h3>Link, href set</h3>
    <div class="anchor-example">
      <cdr-link href="https://www.rei.com/">REI.com</cdr-link>
    </div>

    <h3>Link, with icon</h3>
    <div class="anchor-example">
      <cdr-link icon-left="account-profile">Icon on the left</cdr-link>
    </div>

    <h3>Standalone Link (No underline)</h3>
    <div class="anchor-example">
      <cdr-link
        modifier="standalone"
        data-backstop="cdr-link--standalone"/>
    </div>

    <h3>Contrast Link (for use on dark backgrounds)</h3>
    <div class="anchor-example anchor-example--dark-background">
      <cdr-link modifier="contrast"/>
    </div>

    <h3>Content Resilience, too much content</h3>
    <div class="anchor-example">
      <cdr-link>
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
      </cdr-link>
    </div>

    <h3>Content Resilience, too little content</h3>
    <div class="anchor-example">
      <cdr-link>K</cdr-link>
    </div>

    <h3>Link using a &lt;button&gt; element</h3>
    <div class="anchor-example">
      <cdr-link
        el="button"
        data-backstop="cdr-link--button">I'm a button!</cdr-link>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Links',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }

  .anchor-example--dark-background {
    background-color: black;
  }
</style>

