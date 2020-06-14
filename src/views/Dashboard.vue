<template>
  <div class="flex-height base-padding">
    <Header />
    <div>
      <input type="text" placeholder="Pesquisar por local" />

      <hr />

      <!-- SECTION 1 -->
      <div>
        <h2>Destaques</h2>
        <ul>
          <li>Local para banho limpo</li>
          <li>Caixa 24h</li>
          <li>Refeições 24h</li>
        </ul>
      </div>

      <hr />

      <!-- SECTION 2 -->
      <div id="videos">
        <template>
          <img src alt="video_cover" />
          <span>Dica no app</span>
          <p>Como se alimentar melhor nas estradas sem gastar mais</p>
        </template>
      </div>

      <hr />

      <!-- SECTION 3 -->
      <div id="adds">
        <template>
          <span>distancia</span>
          <span>Nome Patrocinador</span>
          <img src alt="add_background" />
          <button>Saber mais</button>
        </template>
      </div>

      <hr />

      <!-- SECTION 4 -->
      <div id="places_to_eat">
        <template>
          <h4>Posto Castelo Branco</h4>
          <span id="review"></span>
          <p>Endereço</p>
        </template>
      </div>
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
  data() {
    return {
      search: null,
      filters: [
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
      ],
      popularity: "asc",
      results: [
        {
          id: 1,
          name: "",
          address: "",
          image: "",
          google_maps_url: "",
          tags: {
            good: 10,
            neutral: 5,
            bad: 5
          }
        }
      ]
    };
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
