<template>
  <div>
    <address-form />
    <br><br>
    <login-form />
    <br><br>
    <payment-form />
    <br><br>
    <survey-form />
  </div>
</template>

<script>
import AddressForm from 'componentsdir/Form/AddressForm';
import LoginForm from 'componentsdir/Form/LoginForm';
import PaymentForm from 'componentsdir/Form/PaymentForm';
import SurveyForm from 'componentsdir/Form/SurveyForm';

export default {
  name: 'FormGroup',
  components: {
    AddressForm,
    LoginForm,
    PaymentForm,
    SurveyForm,
  },
};
</script>

<style>
</style>
