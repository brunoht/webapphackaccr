<template>
  <div class="flex-height base-padding">
    <div v-if="!sent">
      <div>
        <Header />
        <div>
          <form v-on:submit.prevent="generateOTP">
            <div class="input-holder">
                <input class="input-phone" type="text" placeholder="Celular Whatsapp" v-model="form.mobile" />
                <Button><Icon /></Button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-else>
      <div>
        <Header />
        <div>
          <form v-on:submit.prevent="submit">
            <input type="hidden" placeholder="Celular" v-model="form.mobile" />
            <div class="input-holder">
                <input class="input-otp" type="number" placeholder="****" v-model="form.otp" maxlength="4" size="4" />
                <Button><Icon /></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "login",
  components: { Header, Button, Icon },
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
            name: "first-access"
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

<style lang="scss" scope>
    .input-holder{
        border: 2px solid #C8C8C8;
        display: flex;
        border-radius: 24px;

        .input-otp{
          flex: 1;
          border: none;
          color: var(--shadow-colors);
          padding: 16px 24px;
          line-height: 16px;
          border-radius: 24px;
          font-size: 14px;
          flex: 1;
          text-align: center;

          &:focus{
              border: none;
              outline: none;
          }
        }


        .input-phone{
            border: none;
            color: var(--shadow-colors);
            padding: 16px 24px;
            line-height: 16px;
            border-radius: 24px;
            font-size: 14px;
            flex: 1;

            &:focus{
                border: none;
                outline: none;
            }
        }

    }
</style>