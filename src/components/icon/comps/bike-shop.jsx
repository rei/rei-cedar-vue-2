
import { CdrIcon } from '../CdrIcon';

export default {
  name: 'IconBikeShop',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M13.517 12.18l7.206 7.207a.945.945 0 0 1-1.336 1.336l-7.206-7.206a1.26 1.26 0 1 1 1.336-1.336zm5.37 2.753a7.5 7.5 0 1 0-3.977 3.977l1.585 1.585-.064-.023a1.253 1.253 0 0 0-1.574.65l-.122.266a1.052 1.052 0 0 1-1.67.332l-.213-.197a1.255 1.255 0 0 0-1.704 0l-.213.197a1.052 1.052 0 0 1-1.67-.332l-.122-.266a1.253 1.253 0 0 0-1.574-.65l-.272.1a1.052 1.052 0 0 1-1.416-.943l-.011-.297a1.251 1.251 0 0 0-1.204-1.201l-.291-.011a1.051 1.051 0 0 1-.947-1.414l.103-.28a1.248 1.248 0 0 0-.65-1.568l-.267-.122a1.051 1.051 0 0 1-.334-1.67l.202-.218a1.247 1.247 0 0 0 0-1.696l-.202-.218a1.05 1.05 0 0 1 .334-1.67l.266-.122c.594-.273.878-.956.651-1.568l-.103-.28a1.05 1.05 0 0 1 .947-1.414l.29-.01A1.251 1.251 0 0 0 5.87 4.667l.01-.297a1.05 1.05 0 0 1 1.417-.943l.272.1a1.253 1.253 0 0 0 1.574-.65l.122-.266a1.052 1.052 0 0 1 1.67-.332l.213.197c.48.446 1.224.446 1.704 0l.213-.197a1.052 1.052 0 0 1 1.67.332l.122.266c.273.594.96.878 1.574.65l.272-.1a1.052 1.052 0 0 1 1.416.943l.011.297c.025.653.55 1.176 1.204 1.201l.291.011a1.051 1.051 0 0 1 .947 1.414l-.103.28a1.248 1.248 0 0 0 .65 1.568l.267.122a1.051 1.051 0 0 1 .334 1.67l-.202.218a1.247 1.247 0 0 0 0 1.696l.202.218a1.05 1.05 0 0 1-.334 1.67l-.266.122a1.248 1.248 0 0 0-.651 1.568l.052.14-1.634-1.633z"></path>
    </cdr-icon>)
  },
};
