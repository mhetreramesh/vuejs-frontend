<template>
  <div class="card">
    <div class="header">
      <h2 class="title">{{title}}</h2>
      <hr>
    </div>
    <div class="content">
      <ul class="list-unstyled team-members">
          <li class="row" v-for="topic in topics" :class="{ active: isActive(topic) }"><span class="badge">{{topic.team}}</span>
            <a href="#/admin/view-thc?id=1" @click="topicChanged(topic)">
            <div class="col-xs-9">
              <span class="text-black">{{topic.name}}</span>
              <br>
              <span class="text-black">
                <small>{{topic.details}}</small>
              </span>
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
        title: 'Q2-2018 DEV',
        topics: [
          {
            name: 'Mission',
            details: 'Mission',
            red: 0,
            green: 10,
            yellow: 3
          },
          {
            name: 'Teamwork',
            details: 'Teamwork',
            red: 1,
            green: 7,
            yellow: 5
          },
          {
            name: 'Pawns or Players',
            details: 'Pawns or Players',
            red: 3,
            green: 4,
            yellow: 6
          },
          {
            name: 'Suitable Process',
            details: 'Suitable Process',
            red: 3,
            green: 4,
            yellow: 6
          },
          {
            name: 'Delivering Quality',
            details: 'Delivering Quality',
            red: 3,
            green: 4,
            yellow: 6
          },
          {
            name: 'Data Driven Decisions',
            details: 'Data Driven Decisions',
            red: 3,
            green: 4,
            yellow: 6
          }
        ],
        currentUser: null
      }
    },
    methods: {
      getSlackIcon (shortname) {
        return (shortname !== '' ? 'text-success' : 'text-muted')
      },
      topicChanged (topic) {
        this.currentUser = topic
        this.$root.$emit('topicChanged', topic)
      },
      isActive (topic) {
        return topic === this.currentUser
      }
    }
  }

</script>
<style>
  
</style>
