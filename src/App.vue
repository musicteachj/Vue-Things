<template>
  <div id="app">
    <v-app>
      <tool-bar />
      <router-view />
      <bottom-nav />
    </v-app>
  </div>
</template>

<script>
import BottomNav from './components/Navigation/BottomNav';
import ToolBar from './components/Navigation/Toolbar.vue';

export default {
  name: 'app',
  components: {
    BottomNav,
    ToolBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
