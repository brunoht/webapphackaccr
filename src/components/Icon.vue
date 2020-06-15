<template>
    <span :class="'icon icon-' + icon"></span>
</template>

<script>
    export default {
        props: ['icon']
    };
</script>

<style lang="scss" scope>
    .icon{
        height: 24px;
        width: 24px;
        font-size: 24px;
        line-height: 24px;
        color: var(--neutral-color);

        &.light{ color: #ffffff;}
        &.dark{ color: #161830;}

        &.min{
            height: 16px;
            width: 16px;
            font-size: 16px;
            line-height: 16px;
        }
    }
</style>