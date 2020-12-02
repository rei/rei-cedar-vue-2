import CdrIcon from '../CdrIcon';
export default {
  name: 'IconServiceShop',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M12.458 10.19l-1.985-1.988A3.857 3.857 0 006.857 3a.553.553 0 00-.39.944l1.69 1.688-.5 1.863-1.864.5-1.622-1.623A.686.686 0 003 6.857a3.857 3.857 0 005.202 3.616l1.988 1.985-.787.788-.33-.01a1.286 1.286 0 00-.948.377l-4.75 4.756c-.5.503-.5 1.317.002 1.818l.433.434a1.286 1.286 0 001.817.001l4.758-4.751c.25-.25.387-.593.376-.947l-.008-.3.803-.803 6.813 6.801a1.286 1.286 0 001.817 0l.433-.435a1.287 1.287 0 00.002-1.818l-6.8-6.813 3.688-3.689 1.492-.248c.443-.074.815-.374.982-.79l.895-2.237a.5.5 0 00-.111-.54l-.82-.819a.5.5 0 00-.539-.11l-2.236.894c-.417.167-.717.54-.79.982l-.255 1.522-3.669 3.67z"></path>
    </cdr-icon>)
  },
};
