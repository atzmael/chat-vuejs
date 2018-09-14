<template>
  <div class="login">
    <LoginForm @submit="onFormSubmit"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import store from '@/store.js'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  methods: {
    onFormSubmit (username) {
      this.$api.userRegister(username).then((user) => {
        window.$('.serrure img').animate({ textIndent: 0 }, {
          step: function () {
            $(this).css('-webkit-transform', 'rotate(360deg)')
          },
          duration: '600'
        }, 'linear')
        setTimeout(() => {
          store.user = user
          this.$router.push({ name: 'chat' })
        }, 600)
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
        background: url('/img/bg-login.jpg');
    }
</style>
