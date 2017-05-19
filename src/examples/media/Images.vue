<template>
  <div>
    <cdr-row :cols="4">
      <cdr-col>
        <cdr-img src="http://placehold.it/350x150"></cdr-img>
      </cdr-col>
      <cdr-col>
        <cdr-img src="http://placehold.it/350x150"></cdr-img>
      </cdr-col>
      <cdr-col>
        <cdr-img src="http://placehold.it/350x150"></cdr-img>
      </cdr-col>
      <cdr-col>
        <cdr-img src="http://placehold.it/350x150"></cdr-img>
      </cdr-col>
    </cdr-row>
    <cdr-img src="http://placehold.it/350x150"></cdr-img>
  </div>
</template>

<script>
  import Components from '../../components/_index';

  export default {
    name: 'images',
    components: Components,
  };
</script>
