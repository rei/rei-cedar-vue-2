/**
 * @mixin
 */
export default {
  methods: {
    /*
      Requires blockClass computed prop to exist on your component
      @ignore
    */
    modifierClass(modifier, blockOverride = false) {
      const block = !blockOverride ? this.blockClass : blockOverride;
      return `${block}--${modifier}`;
    },
  },
};
