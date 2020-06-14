<template>
    <div class="place-header">
        <div class="icon-action">
            <a class=""><Icon /></a>
        </div>
        <div class="header-cover">
            <img src="https://placehold.it/375x210" />
        </div>
        <header class="bar-header">
            <h2 class="title-header">Posto Castelo Branco</h2>
            <span class="info-text">Av Caxambu, Rua 23, Lote 15 • 0.7 kms</span>
            <ReviewBar />
        </header>
    </div>
</template>

<script>
    import Icon from "@/components/Icon";
    import ReviewBar from "@/components/ReviewBar";
    export default {
        components: { Icon, ReviewBar }
    };
</script>

<style lang="scss" scope>
    .place-header{
        color: var(--neutral-color);
        background: var(--background-color);

        .header-cover{
            min-height: 116px;
            max-height: 210px;
            overflow: hidden;

            img{
                min-width: 100%;
            }
        }

        .icon-action{
            height: 24px;
            width: 24px;
            display: inline-block;
            position: absolute;
            top: 60px;
            left: 32px;
        }

        .bar-header{
            padding: 20px;

            .title-header{
                font-weight: bold;
                font-size: 27px;
                line-height: 1;
                margin-bottom: 8px;
            }

            .info-text{
                font-size: 12px;
                font-style: italic;
                color: var(--shadow-color);
            }
        }
    }
</style>