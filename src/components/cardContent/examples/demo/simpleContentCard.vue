<template>
  <cdr-row cols="1" align="top" justify="center">
    <cdr-col>
      <cdr-card-content
        level="2"
        title="Tiger Mountain Loop"
        media="http://placehold.it/350x150"
        content-a-gutter="top"
        >
        <p> A block of content </p>
      </cdr-card-content>
    </cdr-col>
    <cdr-col>
      <cdr-card-content
        media="http://placehold.it/350x150">
        <div slot="summary">
          <span>MTB Project</span>
          <cdr-heading level="2"><a href="http://rei.com">Tiger Mountain Loop</a></cdr-heading>
          <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p>
           <cdr-list modifier="bulleted">
            <li>2,913’ ascent</li>
            <li>2,992’ high</li>
            <li>1,451 low</li>
          </cdr-list>
        </div>
        <cdr-button-group slot="actions">
          <cdr-button>B1</cdr-button>
        <cdr-button modifier="secondary">B2</cdr-button>
        </cdr-button-group>
      </cdr-card-content>
    </cdr-col>
  </cdr-row>
</template>

<script>
  import * as Components from '../../../_index';


  export default {
    name: 'simpleContentCard',
    components: Components,
  };
</script>

