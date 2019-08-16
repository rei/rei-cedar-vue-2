/**
 * @mixin
 */
export default {
  methods: {
    /**
     *
     * @param {Array} classes -- the classes to be mapped to module names
     * @param {Object} style -- the style object to map from
     */
    mapClasses(classes, style) {
      return classes.join(' ').split(' ').map(className => style[className]);
    },
  },
};
