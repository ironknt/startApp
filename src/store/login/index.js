export const LOGIN = 'LOGIN'

export default {
  state: {
    userName: '',
    token: ''
  },
  mutations: {
    [LOGIN] (state, Data) {
      Object.assign(state, {
        userName: Data.userName,
        token: Data.access_token
      })
    }
  },
  actions: {
    async [LOGIN] ({commit}, queryData) {
      const Data = {
        userName: queryData.userName,
        token: '123456'
      }
      localStorage.setItem('token', Data.token)
      localStorage.setItem('username', Data.userName)
      commit(LOGIN, Data)
      return Data
    }
  }
}
