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
    :gutter="gutter"
    :gutterMd="gutterMd"
    :gutterLg="gutterLg"
    :gutterXl="gutterXl"
    :gutterXxl="gutterXxl"
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
    :nowrap="nowrap"
    :nowrapMd="nowrapMd"
    :nowrapLg="nowrapLg"
    :nowrapXl="nowrapXl"
    :nowrapXxl="nowrapXxl"
    >
    <slot></slot>
  </row>
</template>

<script>
  import Row from './Row';

  const blockName = 'cdr-col';
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
      name: 'gutter',
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
      name: 'nowrap',
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
    name: 'cdr-col',
    props: finalProps,
    components: { Row },
    computed: {
      spanClass() {
        let spanClass = '';
        if (this.span) { spanClass += `${blockName}_col${this.span} `; }
        bpArr.forEach((bp) => {
          if (this[`span${bp}`]) { spanClass += `${blockName}_col${this[`span${bp}`]}-${bp.toLowerCase()} `; }
        });
        return spanClass;
      },
      hideClass() {
        let hideClass = '';
        if (this.hide) { hideClass += `${blockName}--hide-${this.hide} `; }
        bpArr.forEach((bp) => {
          if (this[`hide${bp}`]) { hideClass += `${blockName}--hide-${bp.toLowerCase()}-${this[`hide${bp}`]} `; }
        });
        return hideClass;
      },
      offsetClass() {
        let offClass = '';
        if (this.offsetLeft) { offClass += `${blockName}--offsetLeft${this.offsetLeft} `; }
        bpArr.forEach((bp) => {
          if (this[`offsetLeft${bp}`]) { offClass += `${blockName}--offsetLeft${this[`offsetLeft${bp}`]}-${bp.toLowerCase()} `; }
        });
        if (this.offsetRight) { offClass += `${blockName}--offsetRight${this.offsetRight} `; }
        bpArr.forEach((bp) => {
          if (this[`offsetRight${bp}`]) { offClass += `${blockName}--offsetRight${this[`offsetRight${bp}`]}-${bp.toLowerCase()} `; }
        });
        return offClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.alignSelf) { alignClass += `${blockName}--${this.alignSelf}`; }
        bpArr.forEach((bp) => {
          if (this[`alignSelf${bp}`]) { alignClass += `${blockName}--${this[`alignSelf${bp}`]}-${bp.toLowerCase()} `; }
        });
        return alignClass;
      },
    },
  };
</script>

<style>
</style>
