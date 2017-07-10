<template>
  <div>
    <h2>Images</h2>
    <div data-backstop="image-aspect-ratio">
      <h3>Aspect Ratios (with landscape images)</h3>
      <ratios></ratios>
    </div>

    <div data-backstop="image-cropping">
      <cropping></cropping>
    </div>

    <div data-backstop="image-mods">
      <mods></mods>
    </div>

    <div data-backstop="image-standard">
      <h3>Standard image</h3>
      <cdr-img ratio="16-9" alt="ratio standard" src="http://placehold.it/200x200"></cdr-img>
      <cdr-img alt="standard landscape" src="http://placehold.it/350x150"></cdr-img>
      <cdr-img alt="standard portrait" src="http://placehold.it/150x350"></cdr-img>
    </div>
  </div>
</template>

<script>
  import Components from '../../_index';
  import ratios from './demos/Ratios';
  import cropping from './demos/Cropping';
  import mods from './demos/Mods';

  Components.ratios = ratios;
  Components.cropping = cropping;
  Components.mods = mods;

  export default {
    name: 'images',
    components: Components,
  };
</script>
