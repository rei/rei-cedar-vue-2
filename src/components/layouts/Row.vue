<template>
  <div class="cdr-row" :class="[colsClass, justifyClass, alignClass, directionClass, wrapClass, nowrapClass, gutterClass]">
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
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0) || false,
    },
    {
      name: 'align',
      responsive: true,
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    {
      name: 'gutter',
      responsive: true,
      type: String,
      validator: value => (['none'].indexOf(value) >= 0) || false,
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
      name: 'nowrap',
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
        bpArr.forEach((bp) => {
          if (this[`cols${bp}`]) { colClass += `${blockName}_row${this[`cols${bp}`]}-${bp.toLowerCase()} `; }
        });
        return colClass;
      },
      justifyClass() {
        let justifyClass = '';
        if (this.justify) { justifyClass += `${blockName}--${this.justify} `; }
        bpArr.forEach((bp) => {
          if (this[`justify${bp}`]) {
            justifyClass += `${blockName}--${this[`justify${bp}`]}-${bp.toLowerCase()} `;
          }
        });
        return justifyClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.align) { alignClass += `${blockName}--${this.align}`; }
        bpArr.forEach((bp) => {
          if (this[`align${bp}`]) { alignClass += `${blockName}--${this[`align${bp}`]}-${bp.toLowerCase()} `; }
        });
        return alignClass;
      },
      directionClass() {
        let directionClass = '';
        if (this.vertical) { directionClass += `${blockName}--column `; }
        bpArr.forEach((bp) => {
          if (this[`vertical${bp}`]) { directionClass += `${blockName}--column-${bp.toLowerCase()} `; }
        });
        return directionClass;
      },
      gutterClass() {
        let gutterClass = '';
        if (this.gutter) { gutterClass += `${blockName}--gutter-${this.gutter} `; }
        bpArr.forEach((bp) => {
          if (this[`gutter${bp}`]) { gutterClass += `${blockName}--gutter-${this[`gutter${bp}`]}-${bp.toLowerCase()} `; }
        });
        return gutterClass;
      },
      wrapClass() {
        let wrapClass = '';
        bpArr.forEach((bp) => {
          if (this[`wrap${bp}`]) { wrapClass += `${blockName}--wrap-${bp.toLowerCase()} `; }
        });
        return wrapClass;
      },
      nowrapClass() {
        let wrapClass = '';
        if (this.nowrap) { wrapClass += `${blockName}--noWrap `; }
        bpArr.forEach((bp) => {
          if (this[`nowrap${bp}`]) { wrapClass += `${blockName}--noWrap-${bp.toLowerCase()} `; }
        });
        return wrapClass;
      },
    },
  };
</script>

<style>
</style>
