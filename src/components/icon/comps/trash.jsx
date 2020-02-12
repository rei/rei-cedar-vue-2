import CdrIcon from '../CdrIcon';
export default {
  name: 'IconTrash',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M17.998 6.004c.557 0 1.01.448 1.01 1l-.003.062-.877 13.998a1.006 1.006 0 01-1.007.938H6.899c-.533 0-.974-.41-1.008-.937L5.002 7.067c-.032-.512.33-.958.827-1.047l.149-.015h12.02zM7.085 8.002l.761 12h8.325l.752-11.998-9.838-.002zm7.332-5.997a1 1 0 01.902.568l.206.429h3.48a1 1 0 01.116 1.994l-.117.006H5.008A1 1 0 014.89 3.01l.117-.007H8.51l.23-.45a1 1 0 01.89-.547h4.786z"></path>
    </cdr-icon>)
  },
};
