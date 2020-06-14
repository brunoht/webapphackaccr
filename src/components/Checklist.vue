<template>
    <section class="checklist">
        <header class="checklist-header">
            <h3 class="checklist-title">Sobre acomodações</h3>
        </header>
        <section class="item-list">
            <div class="item good">
                <input type="checkbox" id="t1" />
                <label class="detail" for="t1">Lorem Ipsum</label>
            </div>
            <div class="item">
                <input type="checkbox" id="t2" />
                <label class="detail" for="t2">Lorem Ipsum</label>
            </div>
            <div class="item bad">
                <input type="checkbox" id="t3" />
                <label class="detail" for="t3">Lorem Ipsum</label>
            </div>
        </section>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .checklist{
        font-size: 13px;
        margin-top: 20px;

        .checklist-header{
            line-height: 16px;
            margin-bottom: 10px;

            .checklist-title{
                color: var(--neutral-color);
                text-transform: uppercase;
                font-weight: bold;
            }
        }

        .item-list{
            .item{
                display: flex;
                border-bottom: 1px solid var(--neutral-color-ss);
                color: 1px solid var(--neutral-color);
                padding: 16px 0;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                .detail{
                    position: relative;
                    line-height: 16px;
                    font-size: 16px;
                    flex: 1;

                    &:after{
                        content: '';
                        width: 16px;
                        height: 16px;
                        box-sizing: border-box;
                        border-radius: 4px;
                        border: 1px solid var(--neutral-color-ss);
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 0px;
                    }
                }

                input[type=checkbox]{
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;

                    &:checked + .detail{
                        &:after{
                            border-color: transparent;
                            background-color: var(--main-color);
                        }
                    }
                }

                &.good{
                    color: var(--good-color);
                    input[type=checkbox]{
                        &:checked + .detail{
                            &:after{
                                background-color: var(--good-color);
                            }
                        }
                    }
                }

                &.bad{
                    color: var(--bad-color);
                    input[type=checkbox]{
                        &:checked + .detail{
                            &:after{
                                background-color: var(--bad-color);
                            }
                        }
                    }
                }
            }
        }
    }
</style>