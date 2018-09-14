<template>
    <div class="messageslist">
        <Message v-for="(message, index) in messages" :key="index" :message="message"/>
    </div>
</template>

<script>
import Message from '@/components/messageBox/Message.vue'

export default {
  name: 'messageslist',
  props: [
    'messages'
  ],
  components: {
    Message
  },
  watch: {
    messages (messages) {
      setTimeout(() => {
        this.$el.scrollTop = this.$el.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss">
    .messageslist {
        height:90vh;
        display:flex;
        flex-flow: column;
        align-items:flex-start;
        padding:20px 10px 40px;
        overflow:auto;
        box-sizing: border-box;
    }
</style>
