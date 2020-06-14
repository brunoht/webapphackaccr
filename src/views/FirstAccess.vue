<template>
  <div class="flex-height base-padding">
    <h1>oi</h1>
    <p>Conta pra gente sobre você antes da gente começar.</p>
    <input type="text" placeholder="Como gostria de ser chamado?" v-model="form.name" />
    <p>Você é</p>
    <button v-on:click="form.gender = 1">Homem</button>
    <button v-on:click="form.gender = 2">Mulher</button>
    <br />
    <br />
    <button v-on:click="submit">Começar a usar</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        name: null,
        gender: null // 1 = homem | 2 = mulher | 3 = Outros
      }
    };
  },
  methods: {
    ...mapGetters({
      user: "auth/user"
    }),
    submit() {
      let obj = this.user();
      let that = this;
      axios
        .put("/user/" + obj.id, this.form)
        .then(function(response) {
          console.log(response.data);
          that.$router.replace({
            name: "dashboard"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  beforeMount() {
    let obj = this.user();
    console.log(obj);
    if (obj.name !== null && obj.gender !== null) {
      this.$router.replace({
        name: "dashboard"
      });
    }
  }
};
</script>

<style>
</style>