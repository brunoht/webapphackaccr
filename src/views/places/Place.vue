<template>
  <div class="flex-height">
    <Place
      class="shadow"
      :title="this.place.name"
      :text="this.place.address"
      :image="this.place.image"
    >
      <router-link :to="{ name: 'dashboard'}">
        <Icon icon="back" />
      </router-link>
    </Place>
    <div class="divider"></div>
    <div class="base-padding">
      <div class="buttons">
        <Button v-on:buttonClick="openGoogleMaps">Abrir no Maps</Button>
        <Button class="link" v-on:buttonClick="shareWithWhatsapp">Compartilhar</Button>
      </div>
      <ReviewTags type="good" :title="tags.good.title" :data="tags.good.tags" />
      <hr />
      <ReviewTags :title="tags.neutral.title" :data="tags.neutral.tags" />
      <hr />
      <ReviewTags type="bad" :title="tags.bad.title" :data="tags.bad.tags" />
      <hr />
      <Button class="link blockable">Avaliar Local</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Place from "@/components/PlaceHeader";
import ReviewTags from "@/components/ReviewTags";
export default {
  name: "Home",
  components: {
    Button,
    Place,
    ReviewTags,
    Icon
  },
  data() {
    return {
      tags: {
        good: {
          type: "neutro",
          title: "Pontos Neutros",
          tags: [
            { id: 1, nome: "Local para banho grátis", qtd: "6" },
            { id: 2, nome: "Local para banho limpo", qtd: "5" },
            { id: 3, nome: "Boa comida", qtd: "12" },
            { id: 4, nome: "Banheiros Limpos", qtd: "5" },
            { id: 5, nome: "Caixa 24h", qtd: "18" },
            { id: 6, nome: "TV com Futebol", qtd: "20" }
          ]
        },

        neutral: {
          type: "neutral",
          title: "Pontos Neutros",
          tags: [
            { id: 1, nome: "Serve almoço", qtd: "10" },
            { id: 2, nome: "Fraudário", qtd: "2" }
          ]
        },

        bad: {
          type: "bad",
          title: "Pontos Negativos",
          tags: [
            { id: 1, nome: "Sinal da Tim ruim", qtd: "6" },
            { id: 2, nome: "Sinal da Claro ruim", qtd: "5" },
            { id: 3, nome: "Não tem pátio", qtd: "12" },
            { id: 4, nome: "Não tem estacionamento adequado", qtd: "5" }
          ]
        }
      },
      place: {
        id: 1,
        name: "Nome do Local",
        address: "Av. Juracy Magalhães, 721 - Centro  •  0.6 kms",
        image: "https://placehold.it/360x240",
        google_maps_url: "https://goo.gl/maps/pMkcW9jBfVTSbb4VA"
      }
    };
  },
  methods: {
    openGoogleMaps() {
      window.open(this.place.google_maps_url);
    },
    shareWithWhatsapp() {
      let url = window.location.href;
      let message = "Achei este ponto interessante: ";
      window.open("whatsapp://send?text=" + message + url);
    }
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;

    & + * {
      margin-left: 10px;
    }
  }
}
</style>