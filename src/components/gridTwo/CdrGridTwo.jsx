import style from './styles/CdrGridTwo.scss';

export default {
  name: 'CdrGridTwo',
  data() {
    return {
      style,
    };
  },
  render() {
    return (
      <div class={this.style['cdr-grid-two']}>
        {this.$slots.default}
      </div>
    );
  },
};
