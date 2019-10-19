/**
 * @description getters 类似store的计算属性，缓存state派生的状态
 */
const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name
}

export default getters