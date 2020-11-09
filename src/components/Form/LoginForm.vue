<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Login Form Example
    </cdr-text>
    <br><br>

    <form
      class="form-example"
      novalidate
    >

      <cdr-input
        :required="true"
        v-model="email"
        :error="emailErr"
        label="Email"
        type="email"
        :background="backgroundColor"
      />
      <cdr-input
        :required="true"
        v-model="password"
        :error="passwordErr"
        label="Password"
        :type="passwordVisible ? 'text' : 'password'"
        :background="backgroundColor"
      >
        <cdr-tooltip
          slot="post-icon"
          class="cdr-input__button"
        >
          <cdr-button
            slot="trigger"
            :icon-only="true"
            @click="passwordVisible = !passwordVisible"
          >
            <icon-eye-hide v-if="passwordVisible"/>
            <icon-eye-show v-else/>
          </cdr-button>
          {{ passwordVisible ? 'Hide' : 'Show' }} Password
        </cdr-tooltip>
      </cdr-input>
      <cdr-button
        @click="validate"
        type="submit"
      >
        Save
      </cdr-button>

    </form>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Form',
  components: {
    ...Components,
  },
  data() {
    return {
      email: '',
      emailErr: false,
      password: '',
      passwordErr: false,
      passwordVisible: false,
      backgroundColor: 'primary',
    };
  },
  watch: {
    $route(to) {
      this.setBackground(to.query.background);
    },
  },
  mounted() {
    this.setBackground(this.$router.currentRoute.query.background);
  },
  methods: {
    validate() {
      // check if all the models have good content
      // vue forms patterns?
      if (!this.email.length) {
        this.emailErr = 'Must enter an email';
      }
      // extremely naive email validation probably don't use this
      if (!this.email.match(/\w+@\w+\.\w+/)) {
        this.emailErr = 'Email must match the form "username@example.com"';
      }

      if (!this.password.length) {
        this.passwordErr = 'Must enter a password';
      }
    },
    setBackground(background) {
      switch (background) {
        case 'primary':
          this.backgroundColor = 'primary';
          break;
        case 'secondary':
          this.backgroundColor = 'secondary';
          break;
        default:
          this.backgroundColor = 'primary';
      }
    },
  },
};
</script>
<style lang="scss">
.form-example {
  width: 640px;
}
</style>
