<template>
    <div class="messageslist" Autoscroll="bottom">
        <Message v-for="(message, index) in messages" :key="index" :message="message"/>
        <div class="message you">
        <span class="message--text">Hey it's you</span>
        <span class="message--user"><span class="message--user--name">Flo</span><img src="" alt=""></span>
    </div>
    </div>
</template>

<script>

import Message from '@/components/messageBox/Message.vue'
import Autoscroll from 'vue-autoscroll'

export default {
  name: 'messageslist',
  props: [
    'messages'
  ],
  components: {
    Message
  },
  directive: {
    Autoscroll
  }
}
</script>

<style lang="scss">
    .messageslist {
        height:92vh;
        display:flex;
        flex-flow: column;
        align-items:flex-start;
        padding:20px 0 40px 0;
        overflow:scroll;
        box-sizing: border-box;
    }
</style>
