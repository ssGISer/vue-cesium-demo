<template>
    <div id="cesiumContainer"></div>
</template>

<script>
import Cesium from 'cesium/Cesium'
import widget from 'cesium/Widgets/widgets.css'

export default {
    name: 'CesiumScene',
    data () {
        return {

        }
    },
    mounted () {
        this.init()
    },
    beforeDestroy () {},
    methods: {
        init () {
            let viewerOption = {
                geocoder: false,
                timeline: false
            }

            let viewer = new Cesium.Viewer(this.$el, viewerOption)
            viewer._cesiumWidget._creditContainer.style.display = 'none'
        }
    }
}
</script>

<style lang="scss" scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

</style>