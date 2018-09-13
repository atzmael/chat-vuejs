<template>
<form class="login--form" @submit.prevent="onFormSubmit">
    <div class="login--logo logo"></div>
    <div class="randomText"></div>
    <input type="text" placeholder="Pseudo" v-model="username">
    <button type="submit" >Let's Bob !</button>
</form>
</template>

<script>

export default {
  name: 'loginform',
  components: {
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onFormSubmit: function () {
      if (this.username.length > 0) {
        this.$emit('submit', this.username)
      } else {

      }
    }
  }
}
</script>

<style lang="scss">
form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    & > div {
        margin-bottom: 15px;
    }
    .logo {
        width:200px;
        height:200px;
        border-radius:50%;
        background: #d7cfcf;
    }
    input, button {
        color: #2c3e50;
        border-radius: 30px;
        background: #d7cfcf;
        box-shadow:none;
        border:none;
        padding: 10px;
        margin-bottom: 15px;
        text-align: center;
        display:inline-block;
        font-size: 16px;
        width: 300px;
        box-sizing: content-box;
    }
    input::placeholder {
        color: #bcb8b8;
        opacity:1;
    }
    button {
        cursor: pointer;
    }
}
</style>
