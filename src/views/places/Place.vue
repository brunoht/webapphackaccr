<template>
  <div class="flex-height">
    <Place class="shadow" title="Nome do Local" text="endereço do local" image="https://placehold.it/480x320" review="[0,2,2]">
        <a><Icon icon="back"/></a>
    </Place>
    <div class="divider"></div>
    <div class="base-padding">      
      <div class="buttons">
        <Button>Abrir no Maps</Button>
        <Button class="link">Compartilhar</Button>
      </div>
      <ReviewTags type="good" title="Pontos Positivos" :data="tags" />
      <hr />
      <ReviewTags title="Pontos Neutros" :data="tags" />
      <hr />
      <ReviewTags type="bad" title="Pontos Negativos" :data="tags" />
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
      Button, Place,ReviewTags,Icon
    },
    data(){
        return {
            tags: [ 
                { id: 1, nome: 'Local para banho grátis', qtd: '6' }, 
                { id: 2, nome: 'Local para banho limpo', qtd: '5' }, 
                { id: 3, nome: 'Boa comida', qtd: '12' }, 
                { id: 4, nome: 'Banheiros Limpos', qtd: '5' }, 
                { id: 5, nome: 'Caixa 24h', qtd: '18' }, 
                { id: 6, nome: 'TV com Futebol', qtd: '20' }
            ]
        }
    }
  };
</script>

<style lang="scss" scoped>
  .buttons{
    display: flex;
    flex-direction: row;

    &>*{
      flex: 1;

      & + *{
        margin-left: 10px;
      }
    }
  }
</style>