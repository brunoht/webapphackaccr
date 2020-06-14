<template>
  <div id="app">
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

<style lang="scss">

:root{
  --main-color: #187DE8;
  --good-color: #17E3B3;
  --bad-color: #F75D34;
  --neutral-color: #293340;
}

.base-padding{
  padding: 32px;
}

#app {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--neutral-color);
}
</style>
