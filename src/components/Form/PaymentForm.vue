<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Payment Form Example
    </cdr-text>
    <br><br>
    <form
      class="form-example"
      novalidate
    >
      <cdr-input
        :required="true"
        v-model="creditCard"
        type="number"
        label="Credit card"
        maxlength="16"
        :error="creditCardErr"
        :background="backgroundColor"
      />
      <div class="form-grid">
        <cdr-select
          :required="true"
          v-model="month"
          :options="monthOpts"
          prompt="Month"
          label="Expiration Month"
          :background="backgroundColor"
        />
        <cdr-select
          :required="true"
          v-model="year"
          :options="yearOpts"
          prompt="Year"
          label="Expiration year"
          :background="backgroundColor"
        />
        <cdr-input
          :required="true"
          v-model="securityCode"
          label="Security Code"
          type="number"
          :background="backgroundColor"
        >
          <template slot="info">
            <cdr-popover id="security-code-popover">
              <cdr-link
                slot="trigger"
                tag="button"
                modifier="standalone"
              >
                Where?
              </cdr-link>
              Where to find the magic numbers
            </cdr-popover>
          </template>
        </cdr-input>
      </div>

      <cdr-button @click="validate">
        Save
      </cdr-button>
    </form>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'PaymentForm',
  components: {
    ...Components,
  },
  data() {
    return {
      monthOpts: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      yearOpts: [
        '2020', '2021', '2022', '2023', '2024', '2025',
        '2026', '2027', '2028', '2029', '2030',
      ],
      creditCard: '',
      creditCardErr: false,
      month: '',
      monthErr: false,
      year: '',
      yearErr: false,
      securityCode: '',
      securityCodeErr: false,
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
      this.creditCardErr = this.creditCard.length !== 16 && 'Please input your credit card number';
      this.monthErr = !this.month && 'Please input the expiration month';
      this.yearErr = !this.year && 'Please input the expiration year';
      this.securityCodeErr = !this.securityCode && 'Please input the security code';
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

.form-grid {
  display: grid;
  column-gap: $cdr-space-one-x;
  grid-template-columns: 1fr 1fr;
}

</style>
