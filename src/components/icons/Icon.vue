
<script>
import iconComps from './iconComps';

export default {
  name: 'cdr-icon',
  functional: true,
  render(h, context) {
    const data = context.data;
    const children = context.children;
    const props = context.props;

    const staticClass = data.staticClass ? `cdr-icon ${data.staticClass}` : 'cdr-icon';

    data.staticClass = staticClass;
    return h(iconComps[props.name], data, children);
  },
};
</script>

