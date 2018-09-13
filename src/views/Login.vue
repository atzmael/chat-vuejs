<template>
  <div class="login">
    <LoginForm @submit="onFormSubmit"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import Store from '@/store.js'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  methods: {
    onFormSubmit: function (username) {
      this.$api.userRegistration({
        username
      }).then((user) => {
        Store.user = user
      })
    }
  }
}
</script>

<style lang="scss">
    .login {
        display:flex;
        align-items: center;
        justify-content: center;
        height:100vh;
        //background: url(~assets/img/chatroom.jpg);
    }
</style>
