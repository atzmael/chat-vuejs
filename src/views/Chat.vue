<template>
  <div class="chat">
    <MenuLeft/>
    <ChatBox/>
  </div>
</template>

<script>

import MenuLeft from '@/components/MenuLeft.vue'
import ChatBox from '@/components/ChatBox.vue'

export default {
  name: 'chat',
  components: {
    MenuLeft,
    ChatBox
  }
}
</script>

<style lang="scss">
    .chat {
      display:flex;
      flex-flow: row nowrap;
      & > div {
          height:100vh;
      }
    }
</style>
