<template>
    <div class="row">
      
      <div class="col-md-6">
        <user-list-card></user-list-card>
      </div>
      <div class="col-md-6">
       <user-card></user-card>
      </div>
    </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import UserListCard from './UserProfile/UserListCard.vue'

  export default {
    components: {
      EditProfileForm,
      UserCard,
      UserListCard
    }
  }

</script>
<style>

</style>
