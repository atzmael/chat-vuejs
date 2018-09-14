import Vue from 'vue'

const store = new Vue({
  data: {
    messages: [
      'Blabla',
      'Globglo',
      'Maecenas erat dui, volutpat et lacinia ac, gravida id nisl. Praesent ut urna tortor. Cras id velit leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pretium ac enim eu malesuada. Maecenas mauris lectus, mattis nec finibus quis, bibendum tempor ante. Vivamus venenatis odio nisi, eu tempor ipsum posuere id. Maecenas porttitor sed purus vel feugiat. Nulla interdum euismod varius. Nulla et scelerisque dolor, vitae vestibulum metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tempus iaculis mauris. Integer consequat nisi nibh, at tempor ligula placerat eu.'
    ],
    user: null,
    users: []
  },
  created () {
    Vue.nextTick(() => {
      this.$api.onError((data) => {
        console.log(error('Error from API:', data))
      })
      // @ts-ignore
      this.$api.onMessage((data) => {
        store.messages.push(data.message)
      })
      // @ts-ignore
      this.$api.onUsersUpdate(({ type, user, users }) => {
        /* console.log(`${user.username} just ${type} the room`)
        store.users = users */
        if (store.users.length === 0 && users.length > 0) {
          store.users = users.map((user) => {
            user.customavatar = getRandomAvatar()
            user.customminiavatar = getRandomMiniAvatar()
            return user
          })
        } else {
          switch (type) {
            case 'join':
              user.customavatar = getRandomAvatar()
              user.customminiavatar = getRandomMiniAvatar()
              store.users.push(user)
              break
            case 'left':
              let i = store.users.findIndex((u) => user.username === u.username)
              i && store.users.splice(i, 0)
          }
        }
      })
    })

    const tabAvatar = [
      '/img/avatar1.svg',
      '/img/avatar2.svg',
      '/img/avatar3.svg',
      '/img/avatar4.svg',
      '/img/avatar5.svg'
    ]
    const tabMiniAvatar = [
      '/img/bob-oeil.svg',
      '/img/jacque.svg',
      '/img/randall.svg'
    ]
    const getRandomAvatar = () => tabAvatar[Math.floor(Math.random() * tabAvatar.length)]
    const getRandomMiniAvatar = () => tabMiniAvatar[Math.floor(Math.random() * tabMiniAvatar.length)]
  }
})

export default store
