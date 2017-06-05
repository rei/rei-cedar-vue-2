<script>
import debounce from '../../utils/debounce';

const checkIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-check.svg');//eslint-disable-line
const errorIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-error.svg');//eslint-disable-line
const warningIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-warning.svg');//eslint-disable-line

export default {
  name: 'cdr-input',
  render() {
    return this.genInputGroup(this.genInput(), { attrs: { tabindex: -1 } });
  },
  data() {
    return {
      errors: [],
      lazyValue: this.value,
      pristine: true,
      touched: false,
      valid: false,
      focused: false,
      state: '',
    };
  },
  props: {
    label: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    autofocus: Boolean,
    id: String,
    name: String,
    readonly: Boolean,
    multiLine: Boolean,
    rows: {
      default: 5,
    },
    feedback: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    debounce: {
      required: false,
      default: false,
    },
    tabindex: {
      default: 0,
    },
    value: {
      required: false,
    },
  },
  computed: {
    // Use given id or generate one
    inputId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    debounceVal() {
      if (this.debounce === false) {
        return 0;
      } else if (!isNaN(this.debounce) && this.debounce !== '') {
        return this.debounce;
      }
      return 500;
    },
    isErr() {
      return this.state === 'error';
    },
    isWarn() {
      return this.state === 'warn';
    },
    isValid() {
      return this.state === 'valid';
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
    inputValue: {
      get() {
        return this.value;
      },
      set(valArg) {
        let val = valArg;
        if (this.modifiers.trim) {
          val = val.trim();
        }

        if (this.modifiers.number) {
          val = Number(val);
        }

        if (!this.modifiers.lazy) {
          this.$emit('input', val);
        }

        this.lazyValue = val;
      },
    },
  },
  watch: {
    focused(val) {
      this.touched = true;

      if (val) {
        this.$emit('change', this.lazyValue);
      }
    },
    value() {
      this.lazyValue = this.value;
      this.validate();
    },
  },
  methods: {
    onInput(e) {
      this.pristine = false;
      this.inputValue = e.target.value;
    },
    blur(e) {
      this.validate();
      this.$nextTick(() => (this.focused = false));
      this.$emit('blur', e);
    },
    focus(e) {
      this.focused = true;
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    genInput() {
      const tag = this.multiLine ? 'textarea' : 'input';

      const data = {
        class: {
          'cdr-input': true,
          'cdr-input--error': this.isErr,
          'cdr-input--warn': this.isWarn,
        },
        domProps: {
          disabled: this.disabled,
          required: this.required,
          value: this.lazyValue,
          autofucus: this.autofocus,
        },
        attrs: {
          tabindex: this.tabindex,
          readonly: this.readonly,
        },
        on: {
          blur: this.blur,
          input: this.onInput,
          focus: this.focus,
        },
        ref: 'input',
      };

      data.domProps.id = this.inputId;
      if (this.placeholder) data.domProps.placeholder = this.placeholder;
      if (this.name) data.attrs.name = this.name;

      if (this.multiLine) {
        data.domProps.rows = this.rows;
      } else {
        data.domProps.type = this.type;
      }

      const children = [this.$createElement(tag, data)];

      return children;
    },
    genLabel() {
      const data = {};

      data.class = {
        'cdr-label': true,
        'cdr-label--error': this.isErr,
      };
      data.attrs = { for: this.inputId };

      return this.$createElement('label', data, this.label);
    },
    genFeedbackIcon() {
      let icon = '';

      if (this.isErr) {
        icon = errorIcon;
      } else if (this.isValid) {
        icon = checkIcon;
      } else if (this.isWarn) {
        icon = warningIcon;
      }

      return this.$createElement('span', {
        class: {
          'cdr-input-validation__icon': true,
          'cdr-input-validation__icon--error': this.isErr,
          'cdr-input-validation__icon--warn': this.isWarn,
          'cdr-input-validation__icon--valid': this.isValid,
        },
        domProps: {
          innerHTML: icon,
        },
      });
    },
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
        'div',
        {
          class: 'cdr-input-messages',
        },
        messages,
      );
    },
    genHint() {
      return this.$createElement('div',
        {
          class: 'cdr-input-messages__hint',
          domProps: {
            id: `hint${this._uid}`,//eslint-disable-line
          },
          key: this.hint,
        }, this.hint);
    },
    genError(error) {
      return this.$createElement('div',
        {
          class: {
            'cdr-input-messages__notification': true,
            'cdr-input-messages__notification--error': this.isErr,
            'cdr-input-messages__notification--warn': this.isWarn,
          },
          domProps: {
            id: `err${this._uid}`,//eslint-disable-line
          },
          key: error,
        },
        error,
      );
    },
    genInputGroup(input, dataArg = {}) {
      const children = [];
      const wrapperChildren = [];
      let data = dataArg;

      const inputGroupClasses = Object.assign({
        'cdr-input-group': true,
        'is-pristine': this.pristine,
        'is-touched': this.touched,
      });

      data = Object.assign({}, {
        class: inputGroupClasses,
      }, data);

      // Add label
      if (this.label) {
        children.push(this.genLabel());
      }

      // Add input/textarea
      if (this.hint || this.errors.length) {
        input[0].data.attrs['aria-describedby'] = `hint${this._uid} err${this._uid}`;//eslint-disable-line
      }

      wrapperChildren.push(input);

      // Add validation feedback icons
      if (this.feedback) {
        wrapperChildren.push(this.genFeedbackIcon());
      }

      children.push(
        this.$createElement('div', {
          class: {
            'cdr-input-validation': true,
          },
        }, wrapperChildren),
      );

      // Add error and hint messages
      children.push(this.genMessages());

      return this.$createElement('div', data, children);
    },
    validate() {
      (debounce(() => {
        this.errors = [];
        this.valid = false;

        this.rules.forEach((rule) => {
          const validObj = rule(this.value);

          if (validObj.state === 'valid') {
            this.state = validObj.state;
          } else if (validObj.state === 'warn') {
            this.state = validObj.state;
            this.errors.push(validObj.message);
          } else {
            this.state = validObj.state;
            this.errors.push(validObj.message);
          }
        });
      }, this.debounceVal))();
    },
  },
};
</script>
