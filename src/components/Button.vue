<template>
  <button v-on:click="$emit('buttonClick')" class="button">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.float {
  position: absolute;
  bottom: 32px;
  right: 32px;
}
.button {
  padding: 12px 24px;
  line-height: 24px;
  background: var(--main-color);
  color: #ffffff;
  height: 48px;
  min-width: 48px;
  box-sizing: border-box;
  border: none;
  font-size: 14px;
  border-radius: 24px;
  font-weight: 400;
  -webkit-box-shadow: 0 8px 16px 0 var(--main-color-s);
  box-shadow: 0 8px 16px 0 var(--main-color-s);
  border: 1px solid rgba(0, 0, 0, 0);

  &:focus,
  &:hover {
    outline: none;
    background: var(--main-color-d);
  }

  &:active {
    outline: none;
    background: var(--main-color-d);
  }

  &.blockable {
    display: block;
    min-width: 100%;
  }

  &.link {
    background: var(--fore-color);
    color: var(--neutral-color);
    border: 1px solid var(--shadow-color-s);
    -webkit-box-shadow: none;
    box-shadow: none;

    // &:focus{
    //     border-color: var(--main-color);
    //     border-width: 2px;
    //     -webkit-box-shadow: 0 8px 16px 0 var(--main-color-s);
    //     box-shadow: 0 8px 16px 0 var(--main-color-s);
    // }

    &:active {
      background: var(--main-color);
      border-color: rgba(0, 0, 0, 0);
    }
  }
}
</style>