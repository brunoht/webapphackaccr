<template>
  <button class="button"><slot /></button>
</template>

<script>
    export default {};
</script>

<style lang="scss" scope>
    .button{
        padding: 12px 12px;
        line-height: 24px;
        background: var(--main-color);
        color: #ffffff;
        height: 48px;
        min-width: 48px;
        box-sizing: border-box;
        border: none;
        font-size: 14px;
        border-radius: 24px;
        font-weight: 400;

        &:focus, &:hover{
            outline: none;
            background: var(--main-color-d);
        }

        &:active{
            outline: none;
            background: var(--main-color-d);
            -webkit-box-shadow: 0 8px 16px 0 var(--main-color-s);
            box-shadow: 0 8px 16px 0 var(--main-color-s);
        }

        &.blockable{
            display: block;
            min-width: 100%;
        }
        
        &.link{
            background: white;
            color:  var(--neutral-color);
            border: 1px solid rgba(0,0,0,0.16);

            // &:focus{
            //     border-color: var(--main-color);
            //     border-width: 2px;
            //     -webkit-box-shadow: 0 8px 16px 0 var(--main-color-s);
            //     box-shadow: 0 8px 16px 0 var(--main-color-s);
            // }

            &:active{
                background: var(--main-color-s);
                border-width: 0px;
            }
        }
    }
</style>