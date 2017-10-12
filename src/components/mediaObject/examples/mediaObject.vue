<template>
  <section data-backstop="media-object">
    <h2>Media Object</h2>

    <h3>Media Object Figure Placement</h3>
    <figurePlacement></figurePlacement>

    <h3>Media Object Flux</h3>
    <mediaObjectFlux></mediaObjectFlux>

    <h3>Media Figure shapes and body alignment</h3>
    <mediaShapeAlign></mediaShapeAlign>
    
    <h3>Media Object Overlay</h3>
    <mediaOverlay></mediaOverlay>
  </section>
</template>

<script>
  import figurePlacement from './demos/figurePlacement';
  import mediaObjectFlux from './demos/mediaObjectFlux';
  import mediaOverlay from './demos/mediaOverlay';
  import mediaShapeAlign from './demos/mediaShapeAlign';


  export default {
    name: 'mediaObject',
    components: {
      figurePlacement,
      mediaObjectFlux,
      mediaOverlay,
      mediaShapeAlign,
    },
  };
</script>
