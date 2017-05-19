<template>
  <div>
    <h2>Images</h2>
    <h3>Aspect Ratios (with landscape images)</h3>
    <cdr-row :cols="4">
      <cdr-col>
        <div>
          <p>Square</p>
          <cdr-img ratio="square" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>1-2</p>
          <cdr-img ratio="1-2" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>2-3</p>
          <cdr-img ratio="2-3" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>3-4</p>
          <cdr-img ratio="3-4" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>9-16</p>
          <cdr-img ratio="9-16" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>2-1</p>
          <cdr-img ratio="2-1" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>3-2</p>
          <cdr-img ratio="3-2" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>4-3</p>
          <cdr-img ratio="4-3" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>16-9</p>
          <cdr-img ratio="16-9" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Aspect Ratios (with portrait images)</h3>
    <cdr-row :cols="4">
      <cdr-col>
        <div>
          <p>Square</p>
          <cdr-img ratio="square" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>1-2</p>
          <cdr-img ratio="1-2" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>2-3</p>
          <cdr-img ratio="2-3" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>3-4</p>
          <cdr-img ratio="3-4" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>9-16</p>
          <cdr-img ratio="9-16" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>2-1</p>
          <cdr-img ratio="2-1" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>3-2</p>
          <cdr-img ratio="3-2" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>4-3</p>
          <cdr-img ratio="4-3" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>16-9</p>
          <cdr-img ratio="16-9" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Cropping (with landscape images)</h3>
    <cdr-row :cols="3">
      <cdr-col>
        <div>
          <p>Left</p>
          <cdr-img ratio="square" crop="left" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Center</p>
          <cdr-img ratio="square" crop="x-center" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Right</p>
          <cdr-img ratio="square" crop="right" src="http://placehold.it/1920x1080"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Cropping (with portrait images)</h3>
    <cdr-row :cols="3">
      <cdr-col>
        <div>
          <p>Top</p>
          <cdr-img ratio="square" crop="top" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Center</p>
          <cdr-img ratio="square" crop="y-center" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Bottom</p>
          <cdr-img ratio="square" crop="bottom" src="http://placehold.it/1080x1920"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Standard image</h3>
    <cdr-img src="http://placehold.it/350x150"></cdr-img>
    <cdr-img src="http://placehold.it/150x350"></cdr-img>
  </div>
</template>

<script>
  import Components from '../../components/_index';

  export default {
    name: 'images',
    components: Components,
  };
</script>

<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>

