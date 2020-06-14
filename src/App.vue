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
  --background-color: #ffffff;
  --fore-color: #F6F7FB;
  --main-color: #177ce8;
  --main-color-s: #177ce833;
  --main-color-d: #1856E8;
  --good-color: #17E3B3;
  --bad-color: #f73666;
  --neutral-color: #293340;
  --neutral-color-s: #29334033;
  --neutral-color-ss: #2933401c;
  --shadow-color: #474D60;
  --shadow-color-s: #474D6033;
}

@media (prefers-color-scheme: dark) {
  :root{
    --main-color: #177ce8;
    --background-color: #161830;
    --fore-color: #232945;
    --bad-color: #F73666;
    --neutral-color: #F6F7FB;
    --neutral-color-s: #F6F7FB33;
    --neutral-color-ss: #F6F7FB1c;
    --shadow-color: rgba(255, 255, 255, 0.58);
    --shadow-color-s: rgba(255, 255, 255, 0.20);
  }
}

a{
  color: var(--main-color);
  text-decoration: none;
}

.base-padding{
  padding: 32px;
  background-color: var(--background-color);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url('assets/bg.png');

  &.min{
    padding: 20px;
    background-image: none;
  }
}

.flex-height{
  flex: 1;
  display: flex;
  flex-direction: column;
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

.divider{
  height: 1px;
  background: var(--neutral-color);
  opacity: 0.01;
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
