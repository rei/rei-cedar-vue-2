const checkIcon = require('!raw-loader!../assets/icons/rei/icon-rei-check.svg');//eslint-disable-line
const errorIcon = require('!raw-loader!../assets/icons/rei/icon-rei-error.svg');//eslint-disable-line
const warningIcon = require('!raw-loader!../assets/icons/rei/icon-rei-warning.svg');//eslint-disable-line
const successIcon = require('!raw-loader!../assets/icons/rei/icon-rei-success.svg');//eslint-disable-line

export default {

  data() {
    return {
      errors: [],
      focused: false,
      tabFocused: false,
      lazyValue: this.value,
    };
  },

  props: {
    appendIcon: String,
    appendIconCb: Function,
    disabled: Boolean,
    hint: String,
    hideDetails: Boolean,
    persistentHint: Boolean,
    label: String,
    prependIcon: String,
    prependIconCb: Function,
    required: Boolean,
    feedback: Boolean,
    rules: {
      type: Array,
      default: () => [],
    },
    tabindex: {
      default: 0,
    },
    value: {
      required: false,
    },
    placeholder: String,
  },

  computed: {
    hasError() {
      return this.errors.length !== 0;
    },
    inputGroupClasses() {
      return Object.assign({
        'cdr-input-group': true,
        'input-group--dirty': this.isDirty,
        'input-group--tab-focused': this.tabFocused,
        'input-group--disabled': this.disabled,
        'input-group--append-icon': this.appendIcon,
        'input-group--prepend-icon': this.prependIcon,
        'input-group--required': this.required,
        'input-group--hide-details': this.hideDetails,
        'input-group--placeholder': !!this.placeholder,
      }, this.classes);
    },
    isDirty() {
      return this.inputValue;
    },
    modifiers() {
      const modifiers = {
        lazy: false,
        number: false,
        trim: false,
      };

      if (!this.$vnode.data.directives) {
        return modifiers;
      }

      const model = this.$vnode.data.directives.find(i => i.name === 'model');

      if (!model) {
        return modifiers;
      }

      return Object.assign(modifiers, model.modifiers);
    },
  },

  watch: {
    rules() {
      this.validate();
    },
  },

  mounted() {
    console.log('mount js');
    this.validate();
  },

  methods: {
    genLabel() {
      const data = {};

      data.class = 'cdr-label';
      if (this.id) data.attrs = { for: this.id };

      return this.$createElement('label', data, this.label);
    },
    toggle() {},
    genMessages() {
      let messages = [];

      if (((this.hint && this.focused) || (this.hint && this.persistentHint)) &&
          this.errors.length === 0
      ) {
        messages = [this.genHint()];
      } else if (this.errors.length) {
        messages = this.errors.map(i => this.genError(i));
      }

      return this.$createElement(
        'transition-group',
        {
          class: 'input-group__messages',
          props: {
            tag: 'div',
            name: 'slide-y-transition',
          },
        },
        messages,
      );
    },
    genHint() {
      return this.$createElement('div',
        {
          class: 'input-group__hint',
          key: this.hint,
        }, this.hint);
    },
    genError(error) {
      return this.$createElement('div',
        {
          class: 'input-group__error',
          key: error,
        },
        error,
      );
    },
    genIcon(type) {
      const icon = this[`${type}Icon`];
      const cb = this[`${type}IconCb`];
      const hasCallback = typeof cb === 'function';

      return this.$createElement(
        'v-icon',
        {
          class: {
            [`input-group__${type}-icon`]: true,
            'input-group__icon-cb': hasCallback,
          },
          on: {
            click: (e) => {
              hasCallback && cb(e);// eslint-disable-line
            },
          },
        },
        icon,
      );
    },
    genFeedbackIcon() {
      let icon;

      if (this.hasError) {
        icon = errorIcon;
      } else if (this.isDirty && !this.hasError) {
        icon = successIcon;
      }

      return this.$createElement('span', {
        class: 'cdr-input-validation__icon',
        domProps: {
          innerHTML: icon,
        },
      });
    },
    genInputGroup(input, dataArg = {}) {
      const children = [];
      const wrapperChildren = [];
      const detailsChildren = [];
      let data = dataArg;

      data = Object.assign({}, {
        class: this.inputGroupClasses,
        attrs: {
          tabindex: this.tabindex,
        },
        on: {
          blur: () => (this.tabFocused = false),
          click: () => (this.tabFocused = false),
          keyup: (e) => {
            if ([9, 16].includes(e.keyCode)) {
              this.tabFocused = true;
            }

            if (e.keyCode === 13) {
              this.toggle();
            }
          },
        },
      }, data);

      if (this.label) {
        children.push(this.genLabel());
      }

      wrapperChildren.push(input);

      if (this.prependIcon) {
        wrapperChildren.unshift(this.genIcon('prepend'));
      }

      if (this.appendIcon) {
        wrapperChildren.push(this.genIcon('append'));
      }

      if (this.feedback) {
        wrapperChildren.push(this.genFeedbackIcon());
      }

      const validationClasses = Object.assign({
        'cdr-input-validation': true,
        'cdr-input-validation--error': this.isDirty && (this.hasError || this.errors.length > 0),
        'cdr-input-validation--valid': this.isDirty && !this.hasError,
      });

      children.push(
        this.$createElement('div', {
          class: validationClasses,
        }, wrapperChildren),
      );

      detailsChildren.push(this.genMessages());
      this.counter && detailsChildren.push(this.genCounter());// eslint-disable-line

      children.push(
        this.$createElement('div', {
          class: 'input-group__details',
        }, detailsChildren),
      );

      return this.$createElement('div', data, children);
    },
    validate() {
      console.log('validated');
      this.errors = [];

      this.rules.forEach((rule) => {
        const valid = typeof rule === 'function'
          ? rule(this.value)
          : rule;

        if (valid !== true) {
          this.errors.push(valid);
        }
      });
    },
  },
};
