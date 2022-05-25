import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  token: getToken() // 设置token的共享状态,null-->getToken()初始化vuex的时候，就先从缓存中取，没有就是null
}
const mutations = {
  setToken(state, token) {
    state.token = token // 将数据传给VUEX
    setToken(token) // 同步到缓存
  },
  removeToken(state) {
    state.token = null
    removeToken() // 同步到缓存
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
