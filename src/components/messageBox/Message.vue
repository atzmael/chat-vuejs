<template>
    <div class="message">
        <div>
            <span class="message--text">{{ message }}</span>
            <span class="message--user"><span class="message--user--name">Flo</span><img src="https://i.pinimg.com/originals/34/7a/a1/347aa1944e5e7918813ba76e79048212.png" alt="" class="message--user--img"></span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'message',
  props: [
    'message'
  ],
  components: {
  }
}
</script>

<style lang="scss">
    .message {
        margin:15px 10px;
        cursor: default;
        & > div {
            display: flex;
            flex-flow:column nowrap;
            align-items: flex-start;
        }
        &--text {
            border-radius: 10px 10px 10px 0px;
            background: rgb(77, 175, 255);
            position:relative;
            top:50%;
            transform: translateY(-50%);
            color: #fff;
            padding: 10px 15px;
            margin-bottom:-15px;
        }
        &--user {
            position:relative;
            width:30px;
            height:30px;
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
                background: #333333;
                top:50%;
                right: 0%;
                transform: translate(120%,-50%);
                border-radius: 10px;
                padding: 2px 5px;
                color: #FFFFFF;
                transition: 0.3s;
                display:none;
                &::before {
                    content: "";
                    position:absolute;
                    width: 5px;
                    height: 5px;
                    top:50%;
                    left:0;
                    background: #333333;
                    transform: translate(-40%,-50%) rotate(45deg);
                }
            }
        }
    }
    .you {
        align-self: flex-end;
        align-items: flex-end;
        .message--text {
            border-radius: 10px 10px 0 10px;
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
</style>
