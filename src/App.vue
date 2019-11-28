<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    vHeader: resolve => require(['./components/header.vue'], resolve),
    vFooter: resolve => require(['./components/footer.vue'], resolve)
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/common.css');
  #app{
    width: 100%;
    background: url("assets/images/bg.png") repeat;
  }
</style>
