<script>

import size from 'mixinsdir/size';
import space from 'mixinsdir/space';

export default {
  name: 'CdrIcon',
  mixins: [size, space],
  props: {
    /**
    * The href attribute passed to the use element. Will be prefixed with # automatically
    */
    use: String,
    /**
    * Sets icon fill to "inherit" so as to use parent/ancestor fill color.
    */
    inheritColor: Boolean,
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
    inheritColorClass() {
      return this.inheritColor ? this.$style['cdr-icon--inherit-color'] : '';
    },

  },
  render(h) {
    const getChildrenTextContent = children => children.map(node => (node.children
      ? getChildrenTextContent(node.children)
      : node.text)).join('');

    // default svg wrapper options
    const defaultOpts = {
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        role: 'presentation',
      },
      class: [this.sizeClass, this.inheritColorClass, this.space],
    };

    // 'use' with sprite
    if (this.use) {
      return h('svg', defaultOpts, [h('use', {
        attrs: {
          href: this.use,
          'xlink:href': this.use,
        },
      }, [])]);
    }

    // slot content is full svg string TODO: preserve svg attrs, etc.?
    const slotText = getChildrenTextContent(this.$slots.default);
    if (slotText.startsWith('<svg')) {
      console.log('here');
      const startRx = new RegExp('(<svg[^>]*>)', 'i');
      const endRx = new RegExp('(</svg>)', 'i');
      const stripped = slotText.replace(startRx, '').replace(endRx, '');

      return h('svg', Object.assign(defaultOpts, {
        domProps: {
          innerHTML: stripped,
        },
      }), []);
    }

    // else partial svg string (assumed)
    return h('svg', defaultOpts, this.$slots.default);
  },
};
</script>

<style lang="scss" module>
  @import './styles/CdrIcon.scss';
</style>
