<template>
  <div v-if="!isRow" class="cdr-col" :class="[spanClass, alignClass, offsetClass, hideClass]">
    <div class="cdr-col__content">
      <slot></slot>
    </div>
  </div>
  <row v-else 
    class="cdr-col" 
    :class="[spanClass, alignClass, offsetClass, hideClass]" 
    :cols="cols"
    :colsMd="colsMd"
    :colsLg="colsLg"
    :colsXl="colsXl"
    :colsXxl="colsXxl"
    :justify="justify"
    :justifyMd="justifyMd"
    :justifyLg="justifyLg"
    :justifyXl="justifyXl"
    :justifyXxl="justifyXxl"
    :align="align"
    :alignMd="alignMd"
    :alignLg="alignLg"
    :alignXl="alignXl"
    :alignXxl="alignXxl"
    :vertical="vertical"
    :verticalMd="verticalMd"
    :verticalLg="verticalLg"
    :verticalXl="verticalXl"
    :verticalXxl="verticalXxl"
    :wrap="wrap"
    :wrapMd="wrapMd"
    :wrapLg="wrapLg"
    :wrapXl="wrapXl"
    :wrapXxl="wrapXxl"
    :gutter="gutter"
    :gutterMd="gutterMd"
    :gutterLg="gutterLg"
    :gutterXl="gutterXl"
    :gutterXxl="gutterXxl"
    >
    <slot></slot>
  </row>
</template>

<script>
  import Row from './Row';

  const bpArr = ['Md', 'Lg', 'Xl', 'Xxl'];
  const finalProps = {};
  const propDefs = [
    {
      name: 'span',
      responsive: true,
      type: Number,
      validator: value => (value > 0 && value <= 12) || false,
    },
    {
      name: 'offsetLeft',
      responsive: true,
      type: Number,
      validator: value => (value >= 0 && value <= 12) || false,
    },
    {
      name: 'offsetRight',
      responsive: true,
      type: Number,
      validator: value => (value >= 0 && value <= 12) || false,
    },
    {
      name: 'alignSelf',
      responsive: true,
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value >= 0)) || false,
    },
    {
      name: 'hide',
      responsive: true,
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value >= 0)) || false,
    },
    {
      name: 'isRow',
      type: Boolean,
      default: false,
    },
    {
      name: 'cols',
      responsive: true,
    },
    {
      name: 'justify',
      responsive: true,
    },
    {
      name: 'align',
      responsive: true,
    },
    {
      name: 'vertical',
      responsive: true,
    },
    {
      name: 'wrap',
      responsive: true,
    },
    {
      name: 'gutter',
      responsive: true,
    },
  ];

  function createPropObj(obj) {
    const propObj = {};

    if (obj.type) { propObj.type = obj.type; }
    if (obj.validator) { propObj.validator = obj.validator; }
    if (obj.default) { propObj.default = obj.default; }

    return propObj;
  }

  // Make a valid props object
  propDefs.forEach((p) => {
    finalProps[`${p.name}`] = createPropObj(p);

    if (p.responsive) {
      bpArr.forEach((bp) => {
        finalProps[`${p.name}${bp}`] = createPropObj(p);
      });
    }
  });

  export default {
    name: 'col',
    props: finalProps,
    components: { Row },
    computed: {
      spanClass() {
        let spanClass = '';
        if (this.span) { spanClass += `_col${this.span} `; }
        if (this.spanMd) { spanClass += `_col${this.spanMd}-md `; }
        if (this.spanLg) { spanClass += `_col${this.spanLg}-lg `; }
        if (this.spanXl) { spanClass += `_col${this.spanXl}-xl `; }
        if (this.spanXxl) { spanClass += `_col${this.spanXxl}-xxl `; }
        return spanClass;
      },
      hideClass() {
        let hideClass = '';
        if (this.hide) { hideClass += `-colHide-${this.hide} `; }
        if (this.hideMd) { hideClass += `-colHide-md-${this.hideMd} `; }
        if (this.hideLg) { hideClass += `-colHide-lg-${this.hideLg} `; }
        if (this.hideXl) { hideClass += `-colHide-xl-${this.hideXl} `; }
        if (this.hideXxl) { hideClass += `-colHide-xxl-${this.hideXxl} `; }
        return hideClass;
      },
      offsetClass() {
        let spanClass = '';
        if (this.offsetLeft) { spanClass += `-colLeft${this.offsetLeft} `; }
        if (this.offsetRight) { spanClass += `-colRight${this.offsetRight} `; }
        if (this.offsetLeftMd) { spanClass += `-colLeft${this.offsetLeftMd}-md `; }
        if (this.offsetRightMd) { spanClass += `-colRight${this.offsetRightMd}-md `; }
        if (this.offsetLeftLg) { spanClass += `-colLeft${this.offsetLeftLg}-lg `; }
        if (this.offsetRightLg) { spanClass += `-colRight${this.offsetRightLg}-lg `; }
        if (this.offsetLeftXl) { spanClass += `-colLeft${this.offsetLeftXl}-xl `; }
        if (this.offsetRightXl) { spanClass += `-colRight${this.offsetRightXl}-xl `; }
        if (this.offsetLeftXxl) { spanClass += `-colLeft${this.offsetLeftXxl}-xxl `; }
        if (this.offsetRightXxl) { spanClass += `-colRight${this.offsetRightXxl}-xxl `; }
        return spanClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.alignSelf) { alignClass += `${this.getAlign(`${this.alignSelf}`)} `; }
        if (this.alignSelfMd) { alignClass += `${this.getAlign(`${this.alignSelfMd}`)}-md `; }
        if (this.alignSelfLg) { alignClass += `${this.getAlign(`${this.alignSelfLg}`)}-lg `; }
        if (this.alignSelfXl) { alignClass += `${this.getAlign(`${this.alignSelfXl}`)}-xl `; }
        if (this.alignSelfXxl) { alignClass += `${this.getAlign(`${this.alignSelfXxl}`)}-xxl `; }
        return alignClass;
      },
    },
    methods: {
      getAlign(test) {
        switch (test) {
          case 'top': return '-colTop';
          case 'middle': return '-colMiddle';
          case 'bottom': return '-colBottom';
          case 'stretch': return '-colStretch';
          default: return '';
        }
      },
    },
  };
</script>

<style>
</style>
