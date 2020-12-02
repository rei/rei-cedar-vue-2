import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCanoe',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M14.01 11.975l.976 2H16.5h-.033.033a2.5 2.5 0 001.463-4.527A3 3 0 0115 11.975h-.99zm-2.219 0H9a3 3 0 01-2.963-2.527A2.5 2.5 0 007.5 13.975h5.265l-.974-2zm-.973-2L8.166 4.527a1 1 0 011.687-1.074l.004.007c.03.05.056.103.077.157l3.101 6.358H15a1 1 0 001-1v-1a1 1 0 011.13-.992c2.332.143 3.87 2.1 3.87 4.492a4.5 4.5 0 01-4.5 4.5h-.449l.86 1.024a.98.98 0 01.227.302l.877 1.798a1 1 0 01-.46 1.337l-.9.438a1 1 0 01-1.336-.46l-.877-1.798a.998.998 0 01-.098-.349l-.375-1.778a.997.997 0 01-.03-.1l-.201-.414H7.5a4.5 4.5 0 01-4.5-4.5c0-2.392 1.538-4.349 3.87-4.492A1 1 0 018 7.975v1a1 1 0 001 1h1.818z"></path>
    </cdr-icon>)
  },
};
