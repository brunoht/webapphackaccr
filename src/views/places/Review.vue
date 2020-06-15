<template>
  <div class="flex-height box">
    <div class="flex-height">      
      <Place
        class="shadow"
        :title="this.place.name"
        :text="this.place.address">
        <a>
          <Icon icon="back" />
        </a>
      </Place>
      <div class="divider"></div>
      <div class="base-padding min">
        <Checklist class="spacing" v-for="cat in this.categories" v-bind:data="cat" v-bind:key="cat.name" />
      </div>
    </div>
    <div>
      <div class="button-bar">      
        <Button v-on:click="">Começar a usar</Button>
      </div>      
    </div>
  </div>
</template>


<script>
import Place from "@/components/PlaceHeader";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Checklist from "@/components/Checklist";

export default {
  components: { Place, Button, Icon, Checklist },
  data() {
    return {
      place: {
        id: 1,
        name: "Nome do Local",
        address: "Av. Juracy Magalhães, 721 - Centro  •  0.6 kms",
        image: "https://placehold.it/360x240",
        google_maps_url: ""
      },
      categories: [
        {
          name: "Acomodações",
          tags: [
            { id: 1, nome: "Lugar para pernoite", type: 0, checked: false },
            { id: 2, nome: "Local para descanso", type: 1, checked: false },
            { id: 3, nome: "Redes", type: 1, checked: false },
            { id: 4, nome: "Área de camping", type: 1, checked: false },
            { id: 5, nome: "Não tem pátio", type: -1, checked: false },
            { id: 6, nome: "Não tem estacionamento adequado", type: -1, checked: false }
          ]
        },
        {
          name: "Refeições",
          tags: [
            { id: 11, nome: "Refeições 24", type: 1, checked: false },
            { id: 12, nome: "Serve lanches rápidos", type: 0, checked: false },
            { id: 13, nome: "Serve café da manhã", type: 0, checked: false },
            { id: 14, nome: "Serve Almoço", type: 0, checked: false },
            { id: 15, nome: "Serve Jantar", type: 0, checked: false }
          ]
        },
        {
          name: "Experiências",
          tags: [
            { id: 21, nome: "TV com futebol", type: 1, checked: false },
            { id: 22, nome: "TV com novela", type: 1, checked: false },
            { id: 23, nome: "Show ao vivo", type: 1, checked: false },
            { id: 24, nome: "Lavajato", type: 1, checked: false }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .box{
    background-color: var(--background-color); 
  }

  .spacing{
    &+.spacing{
      margin-top: 60px;
    }
  }

  .button-bar{
    text-align: right;
    padding: 16px 20px;
    border-top: 1px solid var(--neutral-color-s);
    background-color: var(--background-color); 
  }
</style>