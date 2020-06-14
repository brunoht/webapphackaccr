<template>
  <div class="flex-height base-padding">
    <Header />
    <div>
      <template v-if="authenticated">
        <router-link :to="{ name: 'dashboard'}">Dashboard</router-link>|
        <router-link :to="{ name: 'logout'}">Sair</router-link>
      </template>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import { mapGetters } from "vuex";
  export default {
    name: "Home",
    components: {
      Header
    },
    methods: {
      loadUsers() {
        axios.get("/users").then(function(response) {
          console.log(response.data);
        });
      }
    },
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated"
      })
    }
  };
</script>

<style>
</style>
