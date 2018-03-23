<template>
  <div>
    <h2>Images</h2>
    <div data-backstop="image-aspect-ratio">
      <h3>Aspect Ratios (with landscape images)</h3>
      <ratios/>
    </div>

    <div data-backstop="image-cropping">
      <cropping/>
    </div>

    <div data-backstop="image-mods">
      <mods/>
    </div>

    <div data-backstop="image-standard">
      <h3>Standard image</h3>
      <cdr-img
        alt="ratio standard"
        src="http://placehold.it/200x200"
      />
      <cdr-img
        alt="standard landscape"
        src="http://placehold.it/350x150"
      />
      <cdr-img
        alt="standard portrait"
        src="http://placehold.it/150x350"
      />
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import ratios from './demos/Ratios';
import cropping from './demos/Cropping';
import mods from './demos/Mods';

Components.ratios = ratios;
Components.cropping = cropping;
Components.mods = mods;

export default {
  name: 'Images',
  components: Components,
};
</script>
