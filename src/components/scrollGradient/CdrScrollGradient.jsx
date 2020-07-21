import clsx from 'clsx';
import debounce from 'lodash-es/debounce';
import { CdrColorBackgroundPrimary } from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';
import style from './styles/CdrScrollGradient.scss';
import BuildClass from '../../mixins/buildClass';

export default {
  name: 'CdrScrollGradient',
  mixins: [BuildClass],
  props: {
    // TODO: use modifier?
    horizontal: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: CdrColorBackgroundPrimary,
    },
    // height: {
    //   type: String,
    // },
    // width: {
    //   type: String,
    // },
  },
  data() {
    return {
      style,
      overflowLeft: false,
      overflowRight: false,
      overflowTop: false,
      overflowBottom: false,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-scroll-gradient';
    },
    styleClass() {
      const styles = [];

      if (this.horizontal) {
        styles.push(this.modifyClassName(this.baseClass, 'horizontal'));
      }

      if (this.vertical) {
        styles.push(this.modifyClassName(this.baseClass, 'vertical'));
      }

      return styles.join(' ');
    },
    gradientLeftStyle() {
      return this.createGradientStyle('left');
    },
    gradientRightStyle() {
      return this.createGradientStyle('right');
    },
    gradientTopStyle() {
      return this.createGradientStyle('top');
    },
    gradientBottomStyle() {
      return this.createGradientStyle('bottom');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.calculateOverflow();
    });
    // Check for header overflow on window resize for gradient behavior.
    window.addEventListener('resize', debounce(() => {
      this.calculateOverflow();
    }, 500));
    // Check for header overflow on widow resize for gradient behavior.
    this.$refs.cdrScrollGradientContent.addEventListener('scroll', debounce(() => {
      this.calculateOverflow();
    }, 50));
  },
  methods: {
    calculateOverflow() {
      if (this.vertical) {
        const contentHeight = this.$refs.cdrScrollGradientContent.children[0].offsetHeight;
        const containerHeight = this.$refs.cdrScrollGradientContainer.offsetHeight;
        if (contentHeight > containerHeight) {
          const scrollY = this.$refs.cdrScrollGradientContent.scrollTop;
          this.overflowTop = scrollY > 1;
          this.overflowBottom = (scrollY + 1) < (contentHeight - containerHeight);
        } else {
          this.overflowTop = false;
          this.overflowBottom = false;
        }
      }

      if (this.horizontal) {
        const contentWidth = this.$refs.cdrScrollGradientContent.children[0].offsetWidth;
        const containerWidth = this.$refs.cdrScrollGradientContainer.offsetWidth;
        if (contentWidth > containerWidth) {
          const scrollX = this.$refs.cdrScrollGradientContent.scrollLeft;
          this.overflowLeft = scrollX > 1;
          this.overflowRight = (scrollX + 1) < (contentWidth - containerWidth);
        } else {
          this.overflowLeft = false;
          this.overflowRight = false;
        }
      }
    },
    createGradientStyle(dir) {
      const bg = `linear-gradient(to ${dir}, rgba(255, 255, 255, 0), ${this.backgroundColor})`;
      return {
        background: bg,
      };
    },
  },
  render() {
    return (
      <div class={this.style[this.baseClass]} ref="cdrScrollGradientContainer">
        <div class={clsx(
          this.style['cdr-scroll-gradient--overlay'],
          this.style['cdr-scroll-gradient--overlay-left'],
          this.overflowLeft ? this.style['cdr-scroll-gradient--overlay-active'] : '',
        )}
          style={this.gradientLeftStyle}
        ></div>

        <div class={clsx(
          this.style['cdr-scroll-gradient--overlay'],
          this.style['cdr-scroll-gradient--overlay-top'],
          this.overflowTop ? this.style['cdr-scroll-gradient--overlay-active'] : '',
        )}
          style={this.gradientTopStyle}
        ></div>


        <div class={clsx(this.style['cdr-scroll-gradient--content'], this.styleClass)}
          ref="cdrScrollGradientContent">
          { this.$slots.default }
        </div>


        <div class={clsx(
          this.style['cdr-scroll-gradient--overlay'],
          this.style['cdr-scroll-gradient--overlay-right'],
          this.overflowRight ? this.style['cdr-scroll-gradient--overlay-active'] : '',
        )}
          style={this.gradientRightStyle}
        ></div>


        <div class={clsx(
          this.style['cdr-scroll-gradient--overlay'],
          this.style['cdr-scroll-gradient--overlay-bottom'],
          this.overflowBottom ? this.style['cdr-scroll-gradient--overlay-active'] : '',
        )}
          style={this.gradientBottomStyle}
        ></div>
      </div>
    );
  },
};
