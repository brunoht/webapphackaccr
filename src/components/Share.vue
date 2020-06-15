<template>
    <div class="overscren">
        <div class="space"></div>
        <nav id="share-menu">
            <div class="item">
                <a href="whatsapp://send?text=Funciona,%20e%20é%20top!">Compartilhar pelo Whatsapp</a>
            </div>
            <div class="item">
                <a>Compartilhar</a>
            </div>
            <div class="item">
                <button class="cancel-button">Cancelar</button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .overscren{
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--overscreen);

        .space{
            flex: 1;
        }
    }
    #share-menu{
        border-radius: 12px;
        text-align: center;
        background-color: var(--background-color);
        margin: 8px;
        -webkit-box-shadow: 0 8px 16px 0 var(--neutral-color-sss);
        box-shadow: 0 8px 16px 0 var(--neutral-color-ss);
        border: 1px solid rgba(0,0,0,0.0);

        .item{
            padding: 16px;
            line-height: 16px;
            font-size: 14px;
            font-weight: 400;
            color: var(--neutral-color);
            display: flex;
            text-align: center;

            a{
                color: var(--neutral-color);
                text-decoration: none;
                flex: 1;
            }

            & + .item{
                border-top: 1px solid var(--neutral-color-ss)
            }
        }

        .cancel-button{
            flex: 1;         
            padding: 12px 24px;
            line-height: 24px;
            background: var(--good-color);
            color: #ffffff;
            height: 48px;
            min-width: 48px;
            box-sizing: border-box;
            border: none;
            font-size: 14px;
            border-radius: 24px;
            font-weight: 400;
            -webkit-box-shadow: 0 8px 16px 0 var(--good-color-s);
            box-shadow: 0 8px 16px 0 var(--good-color-s);
            border: 1px solid rgba(0,0,0,0.0);
        }
    }
</style>