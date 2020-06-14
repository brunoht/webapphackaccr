<template>
    <section class="tag-review">
        <header class="tag-header">            
            <h3 class="tag-title">{{title}}</h3>
            <a v-on:click="more">mostrar/ocultar</a>
        </header>
        <section :class="type" class="tag-cloud">
            <div class="tag" v-for="tag in tags.slice(0, this.limit)" v-bind:key="tag.id" v-bind:tag="tag"><span class="detail">{{tag.nome}}</span><span class="count">{{tag.qtd}}</span></div>
            <div v-if="this.data.length - this.limit > 0" class="more">+{{this.data.length - this.limit}}</div>
        </section>
    </section>
</template>

<script>
    export default {
        props: ['title','data','type'],
        data() {
            return {
                tags: this.data,
                limit: 5
            };
        },
        methods:{
            more(){
                if( this.limit > 5 ){
                    this.limit = 5;
                }else{
                    this.limit = this.data.length;
                }
            }
        }
    };  
</script>

<style lang="scss" scoped>
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
            }
        }
    }
</style>