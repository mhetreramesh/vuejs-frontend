<template>
  <div class="card">
    <div class="header">
      <div class="row">
        <h2 class="title col-xs-9">{{title}}</h2>
        <div class="col-xs-3 text-right">
          <a class="btn btn-success" href="#">
            Start Health Check
          </a>
        </div>
      </div>
      <hr>      
    </div>
    <div class="content">
      <ul class="list-unstyled team-members">
          <li class="row" v-for="healthCheck in healthChecks" :class="{ active: isActive(healthCheck) }">
            <a href="/" @click="healthCheckChanged(healthCheck)">
            <div class="col-xs-9">
              <span class="text-black">{{healthCheck.title}} <small>({{healthCheck.date}})</small></span>
              <br>
              <span class="badge">Team - {{healthCheck.team}}</span> | <span class="badge">Members - {{healthCheck.memeberCount}}</span>
              <br>
            </div>
  
            <div class="col-xs-3 text-right">
              <button class="btn btn-sm btn-success btn-icon">
                <i class="fa fa-angle-double-right" style="font-size: 18px;" title="Slackbot"></i>
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
        title: 'Team Health Check',
        healthChecks: [
          {
            title: '2018-Q2 DEV',
            date: '07-07-2018',
            memeberCount: 24,
            team: 'DEV'
          },
          {
            title: '2018-Q1 SYSOPS',
            date: '17-03-2018',
            memeberCount: 4,
            team: 'SYSOPS'
          },
          {
            title: '2017-Q4 DEV',
            date: '12-12-2017',
            memeberCount: 16,
            team: 'DEVPROJ'
          }
        ],
        currentUser: null
      }
    },
    methods: {
      getSlackIcon (shortname) {
        return (shortname !== '' ? 'text-success' : 'text-muted')
      },
      healthCheckChanged (healthCheck) {
        this.currentUser = healthCheck
        this.$root.$emit('healthCheckChanged', healthCheck)
      },
      isActive (healthCheck) {
        return healthCheck === this.currentUser
      }
    }
  }

</script>
<style>
  
</style>
