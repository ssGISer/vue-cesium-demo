<template>
    <div class="sidebar-logo-container" :class="{ 'collapse': collapse }">
        <transition name="sidebarLogoFade">
            <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/"></router-link>
            <router-link></router-link>
        </transition>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>