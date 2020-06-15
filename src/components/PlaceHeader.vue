<template>
    <div class="place-header">
        <div class="icon-action">
            <slot />
        </div>
        <div class="header-cover">
            <img v-if="image != null" :src="image" />
        </div>
        <header class="bar-header">
            <h2 class="title-header">{{ title }}</h2>
            <span class="info-text">{{ text }}</span>
            <ReviewBar v-if="review != null" good="1" neutral="1" bad="1" />
        </header>
    </div>
</template>

<script>
    import Icon from "@/components/Icon";
    import ReviewBar from "@/components/ReviewBar";
    export default {
        components: { Icon, ReviewBar },
        props: ['title','text','image','review']
    };
</script>

<style lang="scss" scope>
    .place-header{
        color: var(--neutral-color);
        background: var(--background-color);

        .icon-action{
            height: 24px;
            width: 24px;
            display: inline-block;
            position: absolute;
            top: 60px;
            left: 20px;

            *{
                z-index: 999;
            }
        }

        .header-cover{
            min-height: 116px;
            max-height: 210px;
            overflow: hidden;
            z-index: -1;

            img{
                min-width: 100%;
                max-width: 100%;
            }
        }

        .bar-header{
            padding: 20px;

            .title-header{
                font-weight: bold;
                font-size: 27px;
                line-height: 1;
                margin: 0;
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