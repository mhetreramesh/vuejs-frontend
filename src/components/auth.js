import Vue from 'vue'

export default {
  login (googleUser, cb) {
    if (localStorage.token) {
      cb.push({name: 'overview'})
      return
    }
    // cb = arguments[arguments.length - 1]
    Vue.http.post('http://localhost:8085/login', {
      code: googleUser,
      redirect_uri: 'postmessage'
    }).then(function (response) {
      if (response.body) {
        console.log(response.body)
        var data = response.body
        var token = 'Bearer ' + data.token
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
    })

    /*
    var token = 'Bearer fdfdfdfdf'
    if (window.localStorage) {
      window.localStorage.setItem('user', JSON.stringify('sdsdsdsdsd'))
      window.localStorage.setItem('token', token)
    }
    cb.push({name: 'overview'})
    */
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
