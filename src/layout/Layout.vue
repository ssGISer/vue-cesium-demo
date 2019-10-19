<template>
    <div :class="classObj" class="app-wrapper">
        <div v-if="device === 'mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <!-- 侧边栏 -->
        <side-bar></side-bar>
        <!-- 右侧内容区域 -->
        <div class="main-container">
            <!-- 标题栏 -->
            <div :class="{'fixedHeader': fixedHeader}">
                <!-- 导航栏 -->
                <nav-bar></nav-bar>
            </div>
            <!-- 内容区域app-main -->
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { SideBar, NavBar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
    name: 'Layout',
    components: {
        SideBar,
        NavBar,
        AppMain
    },
    mixins: [ResizeMixin],
    computed: {
        sidebar () { return this.$store.state.app.sidebar },
        device () { return this.$store.app.device },
        fixedHeader () { return this.$store.settings.fixedHeader },
        classObj () {
            return {
                hideSideBar: !this.sidebar.opened,
                openSideBar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === 'mobile'
            }
        }
    },
    methods: {
        handleClickOutside () {
            this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
        }
    } 
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
}

.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }

</style>