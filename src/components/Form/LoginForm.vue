<template>
  <div>
    <h2>
      Login Form Example
    </h2>
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
        autocomplete="email"
      />
      <cdr-input
        :required="true"
        v-model="password"
        :error="passwordErr"
        label="Password"
        :type="passwordVisible ? 'text' : 'password'"
        :background="backgroundColor"
        autocomplete="current-password"
      >
        <cdr-tooltip
          slot="post-icon"
          class="cdr-input__button"
          id="password-tooltip"
        >
          <cdr-button
            slot="trigger"
            :icon-only="true"
            @click="passwordVisible = !passwordVisible"
            :aria-label="passwordVisible ? 'Hide password' : 'Show password'"
          >
            <!-- TODO: aria-describedby vs. aria-labelledby in tooltip? -->
            <icon-eye-hide v-if="passwordVisible" />
            <icon-eye-show v-else />
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
  name: 'LoginForm',
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
      this.emailErr = false;
      this.passwordErr = false;
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
