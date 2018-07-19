export default {
  login (googleUser) {
    var cb = arguments[arguments.length - 1]
    /* this.$http.post('http://your-backend-server.com/auth/google', {
      code: googleUser,
      redirect_uri: 'postmessage'
    }).then(function (response) {
      if (response.body) {
        var data = response.body
        var token = 'Bearer ' + data.token
        this.$store.commit('SET_USER', data.user_data)
        this.$store.commit('SET_TOKEN', token)
        if (window.localStorage) {
          window.localStorage.setItem('user', JSON.stringify(data.user_data))
          window.localStorage.setItem('token', token)
        }
        this.$router.push({
          name: 'overview'
        })
      }
    }, function (response) {
      var data = response.body
      this.response = data.error
      console.log('BACKEND SERVER - SIGN-IN ERROR', data)
    }) */
    if (localStorage.token) {
      cb(true)
      return
    }
    var token = 'Bearer fdfdfdfdf'
    // this.$store.commit('SET_USER', 'sdsdsd')
    // this.$store.commit('SET_TOKEN', token)
    if (window.localStorage) {
      window.localStorage.setItem('user', JSON.stringify('sdsdsdsdsd'))
      window.localStorage.setItem('token', token)
    }
    if (cb) cb(true)
  },
  getToken () {
    return localStorage.token
  },
  logout () {
    delete localStorage.token
  },
  loggedIn () {
    return !!localStorage.token
  }
}
