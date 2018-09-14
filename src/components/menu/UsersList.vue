<template>
    <div class="userlist">
        <User v-for="(user, index) in users" :key="index" :user="user"/>
    </div>
</template>

<script>
import User from '@/components/menu/User.vue'
import store from '@/store.js'

export default {
  name: 'userlist',
  components: {
    User
  },
  computed: {
    users: () => store.users
  }
}
</script>

<style lang="scss">
    .userlist {
      padding:10px 0 30px;
      overflow:auto;
      box-sizing:border-box;
    }
</style>
