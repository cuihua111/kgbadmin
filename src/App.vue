<template>
  <div id="app">
    <commonVue></commonVue>
  </div>
</template>

<script>
  import commonVue from 'components/common/common'
export default {
  name: 'app',
  components:{
    commonVue
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
