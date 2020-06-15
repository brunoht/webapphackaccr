<template>
  <div class="flex-height">
    <section class="base-padding shadow">
      <Header><a><Icon icon="menu" /></a></Header>
      
      <div class="input-holder">
        <input class="input-search" type="text" placeholder="Pesquisar por local" />
      </div>
      
      <section class="tag-review">
          <header class="tag-header">            
              <h3 class="tag-title">Destaques</h3>
          </header>
          <section class="tag-cloud">
              <div class="tag" v-for="tag in tags_highlight" v-bind:key="tag.id" v-bind:tag="tag" :class="type(tag.type)"><span class="detail">{{tag.nome}}</span></div>
          </section>
      </section>
    </section>
    <div class="result-list">
      <Place
        class="shadow"
        v-for="item in results"
        v-bind:key="item.id"
        :title="item.name"
        :text="item.address"
        :image="item.image">
      </Place>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Place from "@/components/PlaceHeader";
import Icon from "@/components/Icon";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Header, Icon, Place
  },
  data() {
    return {      
      tags_highlight: [
        { id: 1, nome: "Local para banho grátis", type: 1 },
        { id: 2, nome: "Local para banho limpo", type: 1 },
        { id: 3, nome: "Boa comida", type: 1 },
        { id: 4, nome: "Banheiros Limpos", type: 1 },
        { id: 5, nome: "Caixa 24h", type: 1 },
        { id: 6, nome: "TV com Futebol", type: 1 }
      ],
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
          name: "Nome do Local",
          address: "Av. Juracy Magalhães, 721 - Centro  •  0.6 kms",
          image: "https://placehold.it/360x240",
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
    },
    type(num){
        if (num < 0)
            return 'bad';
        else if (num > 0)
            return 'good';
        else
            return 'neutral';
    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated"
    })
  }
};
</script>

<style lang="scss" scoped>
  .result-list{
    & > *{
      margin-top: 10px;
    }
    margin-bottom: 32px;
  }

    .input-holder{
        display: flex;
        border-radius: 24px;
        border: 2px solid #C8C8C8;
        background-color: var(--background-color);

        .icon{
          font-size: 24px;
        }

        .input-search{
            border: none;
            padding: 16px 24px;
            line-height: 16px;
            border-radius: 24px;
            font-size: 14px;
            flex: 1;
            background-color: var(--background-color);
            color: var(--neutral-color);

            &:focus{
              border: none;
              outline: none;

              @at-root .input-holder#{&} {
                border-color: var(--main-color)
              }
            }
        }
    }

    .tag-review{
        font-size: 13px;
        margin-top: 30px;

        .tag-header{
            display: flex;
            flex-direction: row;
            line-height: 16px;
            justify-content: space-between;
            margin-bottom: 10px;

            .tag-title{
                color: var(--neutral-color);
                text-transform: uppercase;
                font-weight: bold;
            }
        }

        .tag-cloud{
            margin-top: 10px;

            .more{
                display: inline-block;
                border-radius: 20px;
                margin: 0 10px 10px 0;
                padding: 7px;
                line-height: 16px;
            }

            &.good{
                .tag{
                    border: 1px solid var(--good-color);
                    color: 1px solid var(--good-color);
                    .count{
                        background-color: var(--good-color);
                        color: var(--background-color);
                    }
                }
            }

            &.bad{
                .tag{
                    border: 1px solid var(--bad-color);
                    color: 1px solid var(--bad-color);
                    .count{
                        background-color: var(--bad-color);
                        color: var(--background-color);
                    }
                }
            }

            .tag{
                display: inline-block;
                border: 1px solid var(--neutral-color);
                color: 1px solid var(--neutral-color);
                padding: 3px;
                border-radius: 20px;
                margin: 0 10px 10px 0;

                .detail{
                    padding: 4px 7px;
                    line-height: 16px;
                }

                .count{
                    background-color: var(--neutral-color);
                    color: var(--background-color);
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    display: inline-block;
                    border-radius: 12px;
                }

                &.good{
                    border: 1px solid var(--good-color);
                    color: 1px solid var(--good-color);
                    .count{
                        background-color: var(--good-color);
                        color: var(--background-color);
                    }
                }

                &.bad{
                    border: 1px solid var(--bad-color);
                    color: 1px solid var(--bad-color);
                    .count{
                        background-color: var(--bad-color);
                        color: var(--background-color);
                    }
                }
            }
        }
    }
</style>
