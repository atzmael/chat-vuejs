<template>
<form class="login--form" @submit.prevent="onFormSubmit">
    <div class="login--logo logo">
        <img src="/img/bob_oeil.svg" alt="" v-bind:style="style" class="oeil"><img src="/img/bob_bouche_petit.svg" alt="" class="bouche">
    </div>
    <div class="randomText">Une porte, j'apporte !</div>
    <input type="text" placeholder="Pseudo" v-model="username">
    <button type="submit" ><div class="serrure"><img src="/img/serrure.svg" alt=""></div></button>
</form>
</template>

<script>

export default {
  name: 'loginform',
  components: {
  },
  data () {
    return {
      username: '',
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
  methods: {
    onFormSubmit: function () {
      if (this.username.length > 0) {
        this.$emit('submit', this.username)
      }
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
form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    & > div {
        margin-bottom: 15px;
    }
    .randomText {
        color: #041749;
        font: bold 30px 'PassionBold',sans-serif;
        text-transform: uppercase;
    }
    .logo {
        width:200px;
        height:200px;
        background: url('/img/bob_visage.svg') no-repeat center;
        position:relative;
        .oeil, .bouche {
            position:absolute;
            left: 50%;
            transform:translate(-50%,-50%);
            transition:0.005s;
        }
        .oeil {
            width: 25%;
            top:50%;
        }
        .bouche {
            width: 30%;
            top:85%;
        }
    }
    input, button {
        color: #2c3e50;
        border-radius: 30px;
        background: #ffffff;
        box-shadow:none;
        border:none;
        padding: 10px;
        margin-bottom: 15px;
        display:inline-block;
        font-size: 16px;
        width: 400px;
        box-sizing: content-box;
    }
    input::placeholder {
        color: #bcb8b8;
        opacity:1;
    }
    button {
        cursor: pointer;
        background: transparent;
        width: 80px;
        .serrure {
            img {
                transition: 0.2s;
            }
            &:hover img {
                transform: rotate(30deg);
            }
        }
    }
}
</style>
