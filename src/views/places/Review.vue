<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      place: {
        id: 1,
        name: "",
        address: "",
        image: "",
        google_maps_url: ""
      },
      categories: [
        {
          name: "",
          tags: [
            { id: 1, nome: "Local para banho grátis", type: 1, checked: false },
            { id: 2, nome: "Local para banho limpo", type: 1, checked: false },
            { id: 3, nome: "Boa comida", type: 1, checked: false },
            { id: 4, nome: "Banheiros Limpos", type: 1, checked: false },
            { id: 5, nome: "Caixa 24h", type: 1, checked: false },
            { id: 6, nome: "TV com Futebol", type: 1, checked: false }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>