<template>
    <transition name="bla">
        <div class="message" v-bind:class="{you: isYou}">
            <div>
                <div class="message--text">
                    {{ message.text }}
                    <!-- <span class="message--text--time">{{message.created}}</span> -->
                </div>
                <div class="message--user">
                    <img :src="user.customminiavatar" alt="" class="message--user--img">
                    <span class="message--user--name">{{ message.user.username }}</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'message',
  data () {
    return {
      username: store.user.username,
      isYou: null
    }
  },
  created: function () {
    this.$nextTick(() => {
      // this.avatar = `/img/${this.avatars[Math.floor(Math.random() * this.avatars.length)]}.svg`
      this.isYou = this.username === this.message.user.username
    })
  },
  props: [
    'message'
  ],
  computed: {
    user () {
      return store.users.find((user) => user.username === this.message.user.username)
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
    .message {
        margin:10px 10px;
        max-width:650px;
        cursor: default;
        & > div {
            display: flex;
            flex-flow:column nowrap;
            align-items: flex-start;
        }
        &--text {
            border-radius: 10px 10px 10px 0px;
            background: #a7cc0d;
            color: #fff;
            padding: 10px 15px;
            position:relative;
            max-width:650px;
            word-break: break-all;
            &:hover &--time {
                display:initial;
            }
            &--time {
                position:absolute;
                font-size:14px;
                font-family: 'OpensansLight', sans-serif;
                color: #757575;
                top:50%;
                right: 0%;
                transform: translate(130%,-50%);
                display:none;
            }
        }
        &--user {
            width:30px;
            height:30px;
            margin-top: 5px;
            position:relative;
            &:hover &--name {
                display:initial;
            }
            &--img {
                height:30px;
                width:30px;
                border-radius:50%;
                background: rgb(221, 205, 205);
            }
            &--name {
                position:absolute;
                font-size:14px;
                font-family: 'OpensansLight', sans-serif;
                color: #757575;
                top:50%;
                right: 0%;
                transform: translate(130%,-50%);
                display:none;
            }
        }
    }
    .you {
        align-self: flex-end;
        align-items: flex-end;
        .message--text {
            border-radius: 10px 10px 0 10px;
            background: transparent;
            border: 1px solid #041749;
            color: #041749;
        }
        .message--user--name {
            right:unset;
            left: 0%;
            transform: translate(-120%,-50%);
            &::before {
                left: unset;
                right: 0;
                transform: translate(40%,-50%) rotate(45deg);
            }
        }
    }
    .bla-enter {
        opacity:0
    }
    .bla-enter-to {
        opacity:1;
    }
    .bla-enter-active {
        transition: 1s;
    }
</style>
