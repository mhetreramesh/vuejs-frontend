<template>
    <div class="row">
      
      <div class="col-lg-8 col-md-7">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">
          </paper-table>
        </div>
      </div>
      <div class="col-lg-4 col-md-5">
        <members-card>
        </members-card>
      </div>
    </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  const tableColumns = ['Id', 'Topic', 'City']
  const tableData = [{
    id: 1,
    topic: 'Dakota Rice',
    salary: '$36.738',
    country: 'Niger',
    city: 'Oud-Turnhout'
  },
  {
    id: 2,
    topic: 'Minerva Hooper',
    salary: '$23,789',
    country: 'Curaçao',
    city: 'Sinaai-Waas'
  },
  {
    id: 3,
    topic: 'Sage Rodriguez',
    salary: '$56,142',
    country: 'Netherlands',
    city: 'Baileux'
  },
  {
    id: 4,
    topic: 'Philip Chaney',
    salary: '$38,735',
    country: 'Korea, South',
    city: 'Overland Park'
  }]

  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard,
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Start THC',
          subTitle: '',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
