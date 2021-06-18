import style from './styles/CdrLabelStandalone.scss';

export default {
  name: 'CdrLabelStandalone',
  props: {
    forId: {
      type: String,
      required: true,
    },
    label: String,
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    hideLabel: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    labelClass() {
      return {
        [this.style['cdr-label-standalone__label']]: true,
        [this.style['cdr-label-standalone__label--disabled']]: this.disabled,
        [this.style['cdr-label-standalone__label--sr-only']]: this.hideLabel,
      };
    },
    inputClass() {
      const hasLabelContent = !this.hideLabel || this.$slots.helper || this.$slots.info;
      return {
        [this.style['cdr-label-standalone__input-wrap']]: true,
        [this.style['cdr-label-standalone__input-spacing']]: hasLabelContent,
      };
    },
    labelEl() {
      const requiredEl = this.required ? (
        <span aria-label="required">
          *
        </span>
      ) : '';

      const optionalEl = this.optional ? (
        <span
          class={this.style['cdr-label-standalone__optional']}
        >
          (optional)
        </span>
      ) : '';

      return (
        <label
          class={this.labelClass}
          for={this.forId}
          ref="label"
        >
          { this.label }{ requiredEl || optionalEl ? ' ' : ''}{ requiredEl || optionalEl }
        </label>
      );
    },
  },
  render() {
    return (
      <div class={this.style['cdr-label-standalone']}>
        <div class={this.style['cdr-label-standalone__label-wrapper']}>
          { this.labelEl }
          { !this.hideLabel && this.$slots.helper && (<br/>) }
          { this.$slots.helper && (
            <span
              class={this.style['cdr-label-standalone__helper']}
              id={`${this.forId}-helper-text-top`}
            >
              { this.$slots.helper }
            </span>
          )}
        </div>

        <div class={this.inputClass}>
          {this.$slots.default}
          {this.$slots['info-action'] && (
            <div
              class={this.style['cdr-label-standalone__info-action']}
            >
              {this.$slots['info-action']}
            </div>
          )}
        </div>

        {this.$slots.info && (
          <span
            class={this.style['cdr-label-standalone__info']}
          >
            { this.$slots.info }
          </span>
        )}

        <div class={this.style['cdr-label-standalone__post-content']}>
          {this.$slots['helper-text-bottom']}
          {this.$slots.error}
        </div>
      </div>
    );
  },
};
