<template>
    <div class="app-header">
        <div class="icon-action">
            <slot />
        </div>
        <header class="bar-header">
            <h2 class="title-header">{{ title }}</h2>
        </header> 
        <p class="header-text">{{ text }}</p>
    </div>
</template>

<script>
    import Icon from "@/components/Icon";
    export default {
        props: ['title','text'],
        components: { Icon }
    };
</script>

<style lang="scss" scope>
    .app-header{
        margin-top: 28px;
        color: var(--neutral-color);

        .icon-action{
            height: 24px;
            width: 24px;
            display: inline-block;
            position: absolute;
            top: 60px;
            left: 32px;
        }

        .bar-header{
            margin-top: 100px;

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