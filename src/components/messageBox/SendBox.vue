<template>
  <div class="sendbox">
    <form action="#" @submit.prevent="onFormSubmit">
      <input type="text" v-model="input" placeholder="J’aime les pâtes et les cornichons mais pas coquillettes le midi" class="inputsend">
      <button class="send" @click="animateIco(this)"><div class="send-ico"><img src="/img/send.svg" alt="" class="ico-img"></div></button>
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
    },
    animateIco () {
      let ico = window.$('.ico-img')
      console.log(ico)
      ico.animate({
        'left': '130%',
        'opacity': 0
      }, 100)
        .hide()
        .animate({
          'left': '-30%'
        })
        .show()
        .animate({
          'left': '0%',
          'opacity': 1
        }, 100)
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
    .sendbox {
        height:10vh;
        border-top: 4px solid #041749;
        form {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            height:100%;
            padding: 0px 20px;
            input {
                background:transparent;
                border-radius: 30px;
                font:normal 16px "OpensansRegular", sans-serif;
                color: #706f6f;
                padding: 5px 15px;
                width:80%;
            }
            .send {
                min-width:100px;
                .send-ico {
                    margin-left:20px;
                    width: 40px;
                    height: 40px;
                    position:relative;
                    cursor: pointer;
                    overflow:hidden;
                    transition: 0.4s;
                    &:hover {
                        transform: rotate(-90deg) ;
                        -webkit-transform: rotate(-90deg) ;
                        -moz-transform: rotate(-90deg) ;
                        -o-transform: rotate(-90deg) ;
                        -ms-transform: rotate(-90deg) ;
                    }
                    img {
                      position:relative;
                      top:50%;
                      transform:translateY(-50%);
                    }
                }
            }
        }
    }
</style>
