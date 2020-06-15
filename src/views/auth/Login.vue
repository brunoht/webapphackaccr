<template>
  <div class="flex-height base-padding">
    <div v-if="!sent">
      <div>
        <Header title="Acesse nossa rede usando só seu WhatsApp" text="é bem rápido!" />
        <div>
          <form v-on:submit.prevent="generateOTP">
            <div class="input-holder">
                <input class="input-phone" type="text" placeholder="Celular Whatsapp" v-model="form.mobile" />
                <Button><Icon icon="foward" class="light" /></Button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-else>
      <div>
        <Header title="Código verificador" text="o código que enviamos pra você pro seu Whatsapp">
          <a><Icon icon="back"/></a>
        </Header>
        <div>
          <form v-on:submit.prevent="submit">
            <input type="hidden" placeholder="Celular" v-model="form.mobile" />
            <div class="input-holder">
                <input class="input-otp" type="number" placeholder="****" v-model="form.otp" maxlength="4" size="4" />
                <Button><Icon icon="foward" class="light" /></Button>
            </div>
          </form>

          <span>{{this.code}}</span>
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
      sent: false,
      code: ''
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
          that.code = response.data;
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
        background-color: var(--background-color);

        .input-otp{
          flex: 1;
          border: none;
          padding: 16px 24px;
          line-height: 16px;
          border-radius: 24px;
          font-size: 14px;
          flex: 1;
          text-align: center;
          background-color: var(--background-color);
          color: var(--neutral-color);

          &:focus{
              border: none;
              outline: none;
          }
        }


        .input-phone{
            border: none;
            padding: 16px 24px;
            line-height: 16px;
            border-radius: 24px;
            font-size: 14px;
            flex: 1;
            background-color: var(--background-color);
            color: var(--neutral-color);

            &:focus{
                border: none;
                outline: none;
            }
        }

    }
</style>