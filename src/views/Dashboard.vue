<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  methods: {
    loadUsers() {
      axios.get("/users").then(function(response) {
        console.log(response.data);
      });
    }
  }
};
</script>

<style>
</style>