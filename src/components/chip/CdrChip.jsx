import style from './styles/CdrChip.scss';
// import propValidator from '../../utils/propValidator';
//
// Possible behaviors:
// link
// button
// radio
// checkbox
//
// states:
// unselected
// selected
// focus
// hover
// pass icon in (alignment?)
// delete-able
// fade in fade out animation
// color animation on state change

export default {
  name: 'CdrChip',
  props: {
    // tag: {
    //   type: String,
    //   validator: (value) => propValidator(
    //     value,
    //     ['a', 'button', 'input'],
    //   ),
    //   default: 'button',
    // },
  },
  data() {
    return {
      style,
      baseClass: 'cdr-chip',
    };
  },
  computed: {
    // baseClass() {
    //   return this.style['cdr-chip'];
    // }
  },
  render() {
    return (
      <button class={this.style[this.baseClass]}>
        { this.$slots.default }
      </button>
    );
  },
};
