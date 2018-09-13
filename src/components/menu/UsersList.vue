<template>
    <div class="userlist">
        <User v-for="(user, index) in users" :key="index" :user="user"/>
    </div>
</template>

<script>
import User from '@/components/menu/User.vue'
import Store from '@/store.js'

export default {
  name: 'userlist',
  components: {
    User
  },
  computed: {
    users: () => Store.users
  }
}
</script>

<style lang="scss">
    .userlist {
        height:90vh;
    }
</style>
