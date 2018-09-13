<template>
  <div class="menu">
    <div class="menu--logo">

    </div>
    <UsersList/>
    <UserInfo/>
    <Settings/>
  </div>
</template>

<script>
import UserInfo from '@/components/menu/UserInfo.vue'
import UsersList from '@/components/menu/UsersList.vue'
import Settings from '@/components/menu/Settings.vue'

export default {
  name: 'menu',
  components: {
    UserInfo,
    UsersList,
    Settings
  }
}
</script>

<style lang="scss">
    .menu {
      width:100px;
      border-right: 1px solid rgb(223, 223, 223);
    }
</style>
