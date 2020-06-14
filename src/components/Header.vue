<template>
    <div class="app-header">
        <div class="icon-action">
            <a class="">&lt;-</a>
        </div>        
        <header class="bar-header">
            <h2 class="title-header">Acesse nossa rede usando só seu WhatsApp</h2>
        </header>
        <p class="header-text">é bem rápido!</p>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scope>
    .app-header{
        padding: 60px 32px 32px 32px;
        color: var(--neutral-color);

        .icon-action{
            height: 24px;
            width: 24px;
            display: inline-block;
        }

        .bar-header{
            margin-top: 48px;

            .title-header{
                font-weight: bold;
                font-size: 27px;
                line-height: 32px;
                margin-bottom: 8px;
            }
        }

        .header-text{
            font-size: 17px;
            font-style: italic;
        }
    }
</style>