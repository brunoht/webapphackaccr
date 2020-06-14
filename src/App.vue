<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <template v-if="!authenticated">
        <router-link :to="{ name: 'login'}">Entrar</router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'dashboard'}">Dashboard</router-link>|
        <router-link :to="{ name: 'logout'}">Sair</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated"
    })
  }
};
</script>

<style lang:"scss">

:root{
  --main-color: #187DE8;
  --good-color: #17E3B3;
  --bad-color: #F75D34;
  --neutral-color: #293340;
}


#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
