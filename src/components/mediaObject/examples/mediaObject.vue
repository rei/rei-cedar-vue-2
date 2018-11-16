<template>
  <section>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Media Object
    </cdr-text>
    <div data-backstop="figure-placement">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Media Object Figure Placement
      </cdr-text>
      <figurePlacement/>
    </div>
    <div data-backstop="media-object-flux">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Media Object Flux
      </cdr-text>
      <mediaObjectFlux/>
    </div>
    <div data-backstop="media-shape-align">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Media Figure shapes and body alignment
      </cdr-text>
      <mediaShapeAlign/>
    </div>
    <div data-backstop="media-object-overlay">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Media Object Overlay
      </cdr-text>
      <mediaOverlay/>
    </div>
  </section>
</template>

<script>
import Components from 'componentsdir/_index';
import figurePlacement from './demos/figurePlacement';
import mediaObjectFlux from './demos/mediaObjectFlux';
import mediaOverlay from './demos/mediaOverlay';
import mediaShapeAlign from './demos/mediaShapeAlign';


export default {
  name: 'MediaObject',
  components: {
    ...Components,
    figurePlacement,
    mediaObjectFlux,
    mediaOverlay,
    mediaShapeAlign,
  },
};
</script>
