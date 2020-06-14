<template></template>

<script>
export default {
  mounted() {
    this.$store.dispatch("auth/logout");
    this.$router.replace({
      name: "login"
    });
  }
};
</script>

<style>
</style>