<template>
  <div class="flex-height base-padding">
    <template v-if="authenticated">
      <router-link :to="{ name: 'dashboard'}">Dashboard</router-link>|
      <router-link :to="{ name: 'logout'}">Sair</router-link>
    </template>    
    <template v-else>
      <router-link :to="{ name: 'login'}">Entrar</router-link>
    </template>
  </div>
</template>

<script>
  import Button from "@/components/Button";
  import Header from "@/components/Header";
  import Share from "@/components/Share";
  import { mapGetters } from "vuex";
  export default {
    name: "Home",
    components: {
      Header, Button, Share
    },
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated"
      })
    }
  };
</script>
