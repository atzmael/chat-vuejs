<template>
    <div class="user">
      <div class="user--logo"><img :src="theavatar" alt=""></div>
      <div class="user--name">{{user.username}}</div>
    </div>
</template>

<script>

export default {
  name: 'user',
  data () {
    return {
      avatars: [
        'avatar1',
        'avatar2',
        'avatar3',
        'avatar4',
        'avatar5'
      ],
      theavatar: ''
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.theavatar = `/img/${this.avatars[Math.floor(Math.random() * 5)]}.svg`
    })
  },
  props: [
    'user'
  ],
  components: {
  }
}
</script>

<style lang="scss">
    .user {
        margin-bottom:5px;
        display:flex;
        flex-flow:column nowrap;
        align-items: center;
        &--logo {
            width:80px;
        }
    }
</style>
