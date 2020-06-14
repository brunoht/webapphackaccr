<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="!sent">
      <form v-on:submit.prevent="generateOTP">
        <input type="text" placeholder="Celular" v-model="form.mobile" />
      </form>
    </div>

    <div v-else>
      <form v-on:submit.prevent="submit">
        <input type="hidden" placeholder="Celular" v-model="form.mobile" />
        <input type="text" placeholder="OTP" v-model="form.otp" />
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "login",
  mixins: [validationMixin],
  data() {
    return {
      title: "Login",
      form: {
        mobile: null,
        otp: null
      },
      loading: null,
      sent: false
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login"
    }),
    generateOTP() {
      console.log("sending...");
      let that = this;
      axios
        .post("/auth/otp", this.form)
        .then(function(response) {
          console.log("OTP Generated");
          console.log(response.data);
          that.sent = true;
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    submit() {
      // this.$v.$touch();
      // if (!this.$v.$invalid) {
      this.loading = true;
      this.login(this.form)
        .then(() => {
          console.log("worked");
          this.$router.replace({
            name: "dashboard"
          });
        })
        .catch(() => {
          this.loading = null;
        });
      // }
    }
  }
};
</script>

<style>
</style>