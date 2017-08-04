<template>
  <cdr-input label="Search" hide-label placeholder="Search">
    <cdr-button slot="post" modifier="input-post">
      <cdr-icon url="/static/rei-icons.svg#icon-rei-search"></cdr-icon>
    </cdr-button>
  </cdr-input>
</template>

<script>
// import { cdrButton, cdrInput, cdrIcon } from '../../components/_index';
import { CdrButton, CdrInput, CdrIcon } from '../../components/_index';

export default {
  name: 'cdr-search',
  components: {
    CdrButton,
    CdrInput,
    CdrIcon,
  },
};
</script>

<style>
  
</style>
