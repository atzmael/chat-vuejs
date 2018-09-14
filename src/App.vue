<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: 'PassionBold';
  src: url('./assets/fonts/PassionOne-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'OpensansRegular';
  src: url('./assets/fonts/OpenSans-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'OpensansBold';
  src: url('./assets/fonts/OpenSans-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'OpensansLight';
  src: url('./assets/fonts/OpenSans-Light.ttf') format('truetype');
  font-weight: lighter;
  font-style: normal;
}

body {
  margin:0;
  overflow:hidden;
}
#app {
  font-family: 'OpensansRegular', sans-serif;
  font-size:18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e5efef;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
