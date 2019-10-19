/*****************************************
 * 定义混入对象，所有组件均可以使用复用的功能
 * 所有的组件在device === 'mobile'模式下
 * 均涉及到尺寸大小的响应问题
 * 使用 $_ 表示 mixin属性
 *****************************************/
import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
    watch: {
        $route (route) {
            if (this.device === 'mobile' && this.sidebar.opened) {
                store.dispatch('app/closeSideBar', { withoutAnimation: false })
            }
        }
    },
    beforeMount () {
        window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.$_resizeHandler)
    },
    mounted () {
        const is_Mobile = this.$_isMobile()
        if (isMobile) {
            store.dispatch('app/toggleDevice', 'mobile')
            store.dispatch('app/closeSideBar', { withoutAnimation: true })
          }
    },
    methods: { 
        // use $_ for mixins properties
        $_isMobile () {
            const rect = body.getBoundingClientRect()
            return rect.width - 1 < WIDTH 
        },
        $_resizeHandler () {
            if(!document.hidden) {
                const isMobile = this.$_isMobile()
                store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

                if (isMobile) {
                    store.dispatch('app/closeSideBar', { withoutAnimation: true })
                }
            }         
        }
    }
}
