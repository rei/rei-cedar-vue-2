<template>
  <section>
    <h2>Media Object</h2>
    <div data-backstop="figure-placement">
      <h3>Media Object Figure Placement</h3>
      <figurePlacement></figurePlacement>
    </div>
     <div data-backstop="media-shape-align">
      <h3>Media Object Flux</h3>
      <mediaObjectFlux></mediaObjectFlux>
    </div>
    <div data-backstop="media-shape-align">
      <h3>Media Figure shapes and body alignment</h3>
      <mediaShapeAlign></mediaShapeAlign>
    </div>
    <div data-backstop="media-object-overlay">
      <h3>Media Object Overlay</h3>
      <mediaOverlay></mediaOverlay>
    </div>

  </section>
</template>

<script>
  import Components from '../../components/_index';
  import figurePlacement from './demos/figurePlacement';
  import mediaObjectFlux from './demos/mediaObjectFlux';
  import mediaOverlay from './demos/mediaOverlay';
  import mediaShapeAlign from './demos/mediaShapeAlign';


  Components.figurePlacement = figurePlacement;
  Components.mediaObjectFlux = mediaObjectFlux;
  Components.mediaOverlay = mediaOverlay;
  Components.mediaShapeAlign = mediaShapeAlign;

  export default {
    name: 'mediaObject',
    components: Components,
  };
</script>
