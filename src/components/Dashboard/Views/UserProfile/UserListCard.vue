<template>
  <div class="card">
    <div class="header">
      <h2 class="title">{{title}}</h2>
      <hr>
    </div>
    <div class="content">
      <ul class="list-unstyled team-members">
          <li class="row" v-for="user in users">
            <a href="#" @click="userChanged(user)">
            <div class="col-xs-3">
              <div class="avatar">
                <img :src="user.image" alt="Circle Image" class="img-circle img-no-padding img-responsive">
              </div>
            </div>
            <div class="col-xs-6">
              <span class="text-black">{{user.name}}</span>
              <br>
              <span class="text-info">
                <small>{{user.email}}</small>
              </span>
            </div>
  
            <div class="col-xs-3 text-right">
              <button class="btn btn-sm btn-success btn-icon">
                <i class="fa fa-angle-double-right" style="font-size: 18px;"></i>
              </button>
            </div>
            </a>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'TB.Team',
        users: [
          {
            image: 'static/img/faces/face-3.jpg',
            name: 'Dj Khaled',
            email: 'sdsd@tb.com'
          },
          {
            image: 'static/img/faces/face-1.jpg',
            name: 'Creative Tim',
            email: 'rer@emdsd.com'
          },
          {
            image: 'static/img/faces/face-2.jpg',
            name: 'Flume Test',
            email: 'sdjsdj@sdsdsdf.com'
          }
        ]
      }
    },
    methods: {
      getemailClass (email) {
        switch (email) {
          case 'Offline':
            return 'text-muted'
          case 'Available':
            return 'text-success'
          case 'Busy':
            return 'text-info'
          default:
            return 'text-success'
        }
      },
      userChanged (user) {
        this.$root.$emit('userChanged', user)
      }
    }
  }

</script>
<style>
  
</style>
