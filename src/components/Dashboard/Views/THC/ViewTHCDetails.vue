<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Start THC</h4>
    </div>
    <div class="content">
      Testing
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        healthCheck: {
          title: 'Q2-2018 Dev Team',
          team: 1,
          conductor: 'Niklas',
          template: 2
        },
        teams: [
          {
            id: 1,
            name: 'DEV'
          },
          {
            id: 2,
            name: 'Marketing'
          },
          {
            id: 3,
            name: 'Sales'
          }
        ],
        templates: [
          {
            id: 1,
            name: 'DEV-2018'
          },
          {
            id: 2,
            name: 'DEV-2018'
          }
        ]
      }
    },
    methods: {
      saveTHC () {
        alert('Your data: ' + JSON.stringify(this.healthCheck))
      }
    }
  }

</script>
<style>

</style>
