<template>
  <div>
    <h2>
      Address Form Example
    </h2>
    <br><br>

    <form
      class="form-example"
      novalidate
    >

      <cdr-select
        :required="true"
        v-model="country"
        :options="countryOpts"
        label="Country"
        :background="backgroundColor"
      />
      <cdr-input
        :required="true"
        v-model="fullName"
        label="Full name"
        :background="backgroundColor"
      />
      <cdr-input
        :required="true"
        v-model="address"
        label="Street address"
        :background="backgroundColor"
      />
      <cdr-input
        :optional="true"
        v-model="address2"
        label="Address line 2"
        :background="backgroundColor"
      />
      <cdr-input
        :required="true"
        v-model="postal"
        label="ZIP code"
        maxlength="5"
        class="half-width"
        :background="backgroundColor"
      />
      <cdr-input
        :required="true"
        v-model="city"
        label="City"
        :background="backgroundColor"
      />
      <cdr-select
        :required="true"
        v-model="state"
        :options="stateOpts"
        label="State"
        :background="backgroundColor"
      />
      <cdr-input
        :required="true"
        v-model="phone"
        label="Phone number"
        type="tel"
        maxlength="10"
        placeholder="(555)555-5555"
        :background="backgroundColor"
      >
        <template slot="helper-text-top">
          In case there's an issue with an order.
        </template>
      </cdr-input>

      <cdr-button @click="validate">
        Save
      </cdr-button>
    </form>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'AddressForm',
  components: {
    ...Components,
  },
  data() {
    return {
      countryOpts: ['Canada', 'Mexico', 'United States'],
      stateOpts: ['California', 'Florida', 'New York', 'Oregon', 'Texas', 'Washington'],
      country: '',
      countryErr: false,
      fullName: '',
      fullNameErr: false,
      address: '',
      addressErr: false,
      address2: '',
      city: '',
      cityErr: false,
      state: '',
      stateErr: false,
      postal: '',
      postalErr: false,
      phone: '',
      phoneErr: false,
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
.half-width {
  // ???
  width: calc(50% - #{$cdr-space-one-x});
}
</style>
