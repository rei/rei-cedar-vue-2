<template>
  <div class="cdr-row" :class="[colsClass, justifyClass, alignClass, directionClass, wrapClass, noWrapClass, gutterClass]">
    <slot></slot>
  </div>
</template>

<script>
  const bpArr = ['Md', 'Lg', 'Xl', 'Xxl'];
  const finalProps = {};
  const blockName = 'cdr-row';
  const propDefs = [
    {
      name: 'cols',
      responsive: true,
      type: Number,
      validator: value => (value > 0 && value <= 12) || false,
    },
    {
      name: 'justify',
      responsive: true,
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value >= 0)) || false,
    },
    {
      name: 'align',
      responsive: true,
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value >= 0)) || false,
    },
    {
      name: 'gutter',
      responsive: true,
      type: Number,
      validator: value => ([0].indexOf(value >= 0)) || false,
    },
    {
      name: 'vertical',
      responsive: true,
      type: Boolean,
      default: false,
    },
    {
      name: 'wrap',
      responsive: true,
      type: Boolean,
      default: false,
    },
    {
      name: 'noWrap',
      responsive: true,
      type: Boolean,
      default: false,
    },
  ];

  function createPropObj(obj) {
    const propObj = {};

    if (obj.type) { propObj.type = obj.type; }
    if (obj.default) { propObj.default = obj.default; }
    if (obj.validator) { propObj.validator = obj.validator; }

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
    name: 'cdr-row',
    props: finalProps,
    computed: {
      colsClass() {
        let colClass = '';
        if (this.cols) { colClass += `${blockName}_row${this.cols} `; }
        if (this.colsMd) { colClass += `${blockName}_row${this.colsMd}-md `; }
        if (this.colsLg) { colClass += `${blockName}_row${this.colsLg}-lg `; }
        if (this.colsXl) { colClass += `${blockName}_row${this.colsXl}-xl `; }
        if (this.colsXxl) { colClass += `${blockName}_row${this.colsXxl}-xxl `; }
        return colClass;
      },
      justifyClass() {
        let justifyClass = '';
        if (this.justify) { justifyClass += `${blockName}${this.getJustify(`${this.justify}`)} `; }
        if (this.justifyMd) { justifyClass += `${blockName}${this.getJustify(`${this.justifyMd}`)}-md `; }
        if (this.justifyLg) { justifyClass += `${blockName}${this.getJustify(`${this.justifyLg}`)}-lg `; }
        if (this.justifyXl) { justifyClass += `${blockName}${this.getJustify(`${this.justifyXl}`)}-xl `; }
        if (this.justifyXxl) { justifyClass += `${blockName}${this.getJustify(`${this.justifyXxl}`)}-xxl `; }
        return justifyClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.align) { alignClass += `${blockName}${this.getAlign(`${this.align}`)} `; }
        if (this.alignMd) { alignClass += `${blockName}${this.getAlign(`${this.alignMd}`)}-md `; }
        if (this.alignLg) { alignClass += `${blockName}${this.getAlign(`${this.alignLg}`)}-lg `; }
        if (this.alignXl) { alignClass += `${blockName}${this.getAlign(`${this.alignXl}`)}-xl `; }
        if (this.alignXxl) { alignClass += `${blockName}${this.getAlign(`${this.alignXxl}`)}-xxl `; }
        return alignClass;
      },
      directionClass() {
        let directionClass = '';
        if (this.vertical) { directionClass += `${blockName}--column `; }
        if (this.verticalMd) { directionClass += `${blockName}--column-md `; }
        if (this.verticalLg) { directionClass += `${blockName}--column-lg `; }
        if (this.verticalXl) { directionClass += `${blockName}--column-xl `; }
        if (this.verticalXxl) { directionClass += `${blockName}--column-xxl `; }
        return directionClass;
      },
      gutterClass() {
        let gutterClass = '';
        if (this.gutter >= 0) { gutterClass += `${blockName}${this.getGutter(`${this.gutter}`)} `; }
        if (this.gutterMd >= 0) { gutterClass += `${blockName}${this.getGutter(`${this.gutterMd}`)}-md `; }
        if (this.gutterLg >= 0) { gutterClass += `${blockName}${this.getGutter(`${this.gutterLg}`)}-lg `; }
        if (this.gutterXl >= 0) { gutterClass += `${blockName}${this.getGutter(`${this.gutterXl}`)}-xl `; }
        if (this.gutterXxl >= 0) { gutterClass += `${blockName}${this.getGutter(`${this.gutterXxl}`)}-xxl `; }
        return gutterClass;
      },
      wrapClass() {
        let wrapClass = '';
        if (this.wrapXxl) { wrapClass += `${blockName}--wrap-xxl `; }
        if (this.wrapXl) { wrapClass += `${blockName}--wrap-xl `; }
        if (this.wrapLg) { wrapClass += `${blockName}--wrap-lg `; }
        if (this.wrapMd) { wrapClass += `${blockName}--wrap-md `; }
        return wrapClass;
      },
      noWrapClass() {
        let wrapClass = '';
        if (this.noWrap) { wrapClass += `${blockName}--noWrap `; }
        if (this.noWrapMd) { wrapClass += `${blockName}--noWrap-md `; }
        if (this.noWrapLg) { wrapClass += `${blockName}--noWrap-lg `; }
        if (this.noWrapXl) { wrapClass += `${blockName}--noWrap-xl `; }
        if (this.noWrapXxl) { wrapClass += `${blockName}--noWrap-xxl `; }
        return wrapClass;
      },
    },
    methods: {
      getJustify(test) {
        switch (test) {
          case 'left': return '--left';
          case 'center': return '--center';
          case 'right': return '--right';
          case 'around': return '--spaceAround';
          case 'between': return '--spaceBetween';
          default: return '';
        }
      },
      getAlign(test) {
        switch (test) {
          case 'top': return '--top';
          case 'middle': return '--middle';
          case 'bottom': return '--bottom';
          case 'stretch': return '--stretch';
          default: return '';
        }
      },
      getGutter(test) {
        switch (test) {
          case '0': return '--gutter0';
          default: return '';
        }
      },
    },
  };
</script>

<style>
</style>
