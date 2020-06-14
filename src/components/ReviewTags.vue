<template>
    <section class="tag-review">
        <header class="tag-header">            
            <h3 class="tag-title">Pontos Positivos</h3>
            <a href="#">ver todos</a>
        </header>
        <section class="tag-cloud good">
            <div class="tag"><span class="detail">Local para banho grátis</span><span class="count">6</span></div>
            <div class="tag"><span class="detail">Local para banho limpo</span><span class="count">5</span></div>
            <div class="tag"><span class="detail">Boa comida</span><span class="count">12</span></div>
            <div class="tag"><span class="detail">Banheiros Limpos</span><span class="count">5</span></div>
            <div class="tag"><span class="detail">Caixa 24h</span><span class="count">18</span></div>
            <div class="more"><span class="detail">+20</span></div>
        </section>
    </section>
</template>

<script>
export default {};
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