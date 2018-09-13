<template>
  <div class="chatbox">
    <MessagesList :messages="messages"/>
    <SendBox @messageSent="onMessageSent"/>
  </div>
</template>

<script>
import MessagesList from '@/components/messageBox/MessagesList.vue'
import SendBox from '@/components/messageBox/SendBox.vue'
import Store from '@/store.js'

export default {
  name: 'chatbox',
  methods: {
    onMessageSent (message) {
      Store.messages.push(message)
    }
  },
  computed: {
    messages: () => Store.messages
  },
  components: {
    MessagesList,
    SendBox
  }
}
</script>

<style lang="scss">
    .chatbox {
        width:calc(100vw - 100px);
    }
</style>
