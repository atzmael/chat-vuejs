<template>
  <div class="sendbox">
    <form action="#" @submit.prevent="onFormSubmit">
      <input type="text" v-model="input">
      <button>Send</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'sendbox',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    onFormSubmit () {
      this.$emit('messageSent', this.input)
      this.input = ''
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
    .sendbox {
        height:8vh;
        background: #e5e5e5;
    }
</style>
