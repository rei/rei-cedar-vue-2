<template>
  <!-- eslint-disable max-len -->
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

    <h3>Standalone Link (No underline)</h3>
    <div class="anchor-example">
      <cdr-link
        modifier="standalone"
        data-backstop="cdr-link--standalone"/>
    </div>

    <h3>Links, with icon</h3>
    <div class="anchor-example">
      <cdr-icon-sprite/>


      <cdr-link>
        <cdr-icon
          use="#mail"
          modifier="inherit-color"
          class="cdr-inline-left--sm"/>
        Icon on the left
      </cdr-link>
      <br>
      <br>
      <cdr-link>
        Icon on the right
        <cdr-icon
          use="#download"
          modifier="inherit-color"
          class="cdr-inline-right--sm"/>
      </cdr-link>
      <br>
      <br>
      <cdr-link>
        <cdr-icon
          use="#twitter"
          modifier="inherit-color"
          class="cdr-inline-left--sm"/>
        Icons on both sides
        <cdr-icon
          use="#external-link"
          modifier="inherit-color"
          class="cdr-inline-right--sm"/>
      </cdr-link>
    </div>

    <h3>Content Resilience, too much content</h3>
    <div class="anchor-example">
      <cdr-link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
      </cdr-link>
    </div>

    <h3>Content Resilience, too little content</h3>
    <div class="anchor-example">
      <cdr-link>K</cdr-link>
    </div>

    <h3>Link using a &lt;button&gt; element</h3>
    <div class="anchor-example">
      <cdr-link
        tag="button"
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
</style>
