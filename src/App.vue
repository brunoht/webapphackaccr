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
  --fore-color: #F6F7FB;
  --main-color: #177ce8;
  --main-color-s: #177ce833;
  --main-color-d: #1856E8;
  --good-color: #17E3B3;
  --bad-color: #F75D34;
  --neutral-color: #293340;
  --neutral-color-s: #293340;
  --shadow-color: #474D60;
  --shadow-color-s: #474D6033;
}

.base-padding{
  padding: 32px;
  background: #ffffff;
}

.flex-height{
  flex: 1;
}

.shadow{
  -webkit-box-shadow: 0 3px 6px 0 rgba(71,77,96,0.10);
  box-shadow: 0 3px 6px 0 rgba(71,77,96,0.10);
}

html{
  background: var(--fore-color);
  margin: 0px;
  min-height: 100vh;

  body{
    margin: 0px;
    min-height: 100vh;
    display: block;
  }
}

#app {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--neutral-color);
  min-height: 100vh;
  display: flex;
}
</style>
