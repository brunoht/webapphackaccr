<template>
    <div class="reviewbar">
        <span class="good-bar" style="flex:1000">10</span>
        <span class="neutral-bar" style="flex:200">2</span>
        <span class="bad-bar" style="flex:80">8</span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.reviewbar{
    height: 24px;
    line-height: 24px;
    display: flex;
    margin-top: 8px;
    background-color: var(--fore-color);
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    border-radius: 20px;

    & > *{
        height: 24px;
        min-width: 48px;
        border-radius: 20px;
    }


    .good-bar{
        background-color: var(--good-color);
        color: #fff;
    }

    .neutral-bar{
        color: var(--neutral-color);
    }

    .bad-bar{
        background-color: var(--bad-color);
        color: #fff;
    }
}
</style>