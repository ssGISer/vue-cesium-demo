<template>
    <div class="sidebar-logo-container" :class="{ 'collapse': collapse }">
        <transition name="sidebarLogoFade">
            <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
                <img v-if="logo" :src="logo" class="sidebar-logo">
                <h1 v-else class="sidebar-title">{{ title }}</h1>
            </router-link>
            <router-link v-else key="expand" class="sidebar-logo-link">
                <img v-if="logo" :src="logo" class="sidebar-logo">
                <h1 class="sidebar-title">{{ title }}</h1>
            </router-link>
        </transition>
    </div>    
</template>

<script>
export default {
    name: 'SidebarLogo',
    props: {
        collapse: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            title: 'Vue Cesium Demo',
            logo: '@/icons/logo.png'   
        }
    }

}
</script>

<style lang="scss" scoped>

</style>