<template>
  <div class="flex-height base-padding">
    <Header />
      <div>

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
  export default {
    name: "Home",
    components: {
      Header
    }
  };
</script>
