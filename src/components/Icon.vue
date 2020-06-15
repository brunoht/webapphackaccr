<template>
    <img :src="'/icons/'+icon+'.svg'" class="icon" />
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

        &.min{
            height: 16px;
            width: 16px;
        }
    }
</style>