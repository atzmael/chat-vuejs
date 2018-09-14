<template>
  <div class="menu">
    <div>
        <div class="menu--left">
          <div class="menu--left--logo">
            <div class="minibob">
              <img src="/img/minibob_visage.svg" alt="" class="minibob--visage">
              <img src="/img/minibob_oeil.svg" v-bind:style="style" alt="" class="minibob--oeil">
            </div>
            <span>{{user.username}}</span>
          </div>
          <div class="menu--left--btn">
            <div class="menu--left--btn--userlist" @click="displayTab(1)" :class="{active:selected == 1}"><img src="/img/invite.svg" alt=""></div>
            <div class="menu--left--btn--settings" @click="displayTab(2);logout()" :class="{active:selected == 2}"><img src="/img/home.svg" alt=""></div>
            <!-- <div class="menu--left--btn--userinfo" @click="displayTab(3)" :class="{active:selected == 3}"><img src="/img/" alt=""></div> -->
          </div>
        </div>
        <div class="menu--panel">
            <UsersList/>
            <!-- <Settings/> -->
        </div>
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/menu/UsersList.vue'
import Settings from '@/components/menu/Settings.vue'
import store from '@/store.js'

export default {
  name: 'menu',
  data () {
    return {
      user: store.user,
      selected: 1,
      mouseY: 0,
      mouseX: 0,
      posX: 0,
      posY: 0,
      oeilW: 0,
      oeilH: 0,
      bobW: 0,
      bobH: 0,
      oeilPX: '50%',
      oeilPY: '50%'
    }
  },
  components: {
    UsersList,
    Settings
  },
  methods: {
    displayTab (elmt) {
      this.selected = elmt
      elmt--
      let tab = window.$('.menu--panel').children()[elmt]
      $('.menu--panel').children().each(function (i, e) {
        $(this).animate({
          'left': '-130%'
        }, 100)
      })
      $(tab).animate({
        'left': '0%'
      }, 300)
    },
    followEye () {
      this.oeilW = window.$('.oeil').width()
      this.oeilH = window.$('.oeil').height()
      this.bobW = window.$('.logo').width()
      this.bobH = window.$('.logo').height()
      this.mouseY = event.y
      this.mouseX = event.x
      this.posX = (((100 * this.mouseX) / window.innerWidth) - 50) / 100
      this.posY = (((100 * this.mouseY) / window.innerHeight) - 50) / 100
      this.oeilPX = `${(140 * (this.posX / 6)) - ((this.posX / 10) * (this.oeilW)) + this.bobW / 2}px`
      this.oeilPY = `${(140 * (this.posY / 6)) - ((this.posY / 10) * (this.oeilH)) + this.bobH / 2}px`
    },
    logout () {
      location.reload()
    }
  },
  computed: {
    style () {
      return {
        left: this.oeilPX,
        top: this.oeilPY
      }
    }
  },
  mounted () {
    window.addEventListener('mousemove', this.followEye)
  },
  destroyed: function () {
    window.removeEventListener('mousemove', this.followEye)
  }
}
</script>

<style lang="scss">
    .menu {
        width:240px;
        background: #041749;
        font-size:14px;
        color: white;
        font-family: "OpensansRegular", sans-serif;
        -moz-box-shadow: 1px 0px 15px 0px #656565;
        -webkit-box-shadow: 1px 0px 15px 0px #656565;
        -o-box-shadow: 1px 0px 15px 0px #656565;
        box-shadow: 1px 0px 15px 0px #656565;
        & > div {
            display:flex;
            flex-flow:row nowrap;
        }
      &--left {
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        border-right: 4px solid #a7cc0d;
        position:relative;
        height:100vh;
        background: #041749;
        z-index:10;
        box-sizing:border-box;
        width: 120px;
        &--logo {
          padding:10px;
          box-sizing:content-box;
          .minibob {
            position:relative;
            height:100px;
            &--visage, &--oeil  {
              position:absolute;
              left: 50%;
              top:50%;
              transform:translate(-50%,-50%);
              transition:0.005s;
            }
            &--visage {
              height:90px;
            }
            &--oeil {
              width: 25%;
            }
          }
        }
        &--btn {
          display:flex;
          flex-flow: column nowrap;
          width:100%;
          & .active {
            background: #a7cc0d;
            color:#041749;
          }
          & > div {
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            height:100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            cursor:pointer;
          }
          &--userlist img {
            width: 80%;
          }
          &--settings img {
            width:80%;
          }
        }
      }
      &--panel {
        width: 120px;
        background: #e5efef;
        color: #706f6f;
        position:relative;
        & > div {
          position:absolute;
          top:0;
          left:-130%;
          height:100vh;
          width:120px;
          background: #e5efef;
        }
        & > div:first-child {
          left:0;
        }
      }
    }
</style>
