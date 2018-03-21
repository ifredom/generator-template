<template>
    <div class="root-view" ref="rootView">
        <keep-alive>
            <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view class="child-view" :class="transitionName" v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
        };
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './style/index.styl';
</style>
