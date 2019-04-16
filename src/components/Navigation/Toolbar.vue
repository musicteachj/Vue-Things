<template>
  <div>
    <v-toolbar class="t" color="white">
      <v-btn
        class="b"
        large
        fab
        flat
        to="/">
        <v-icon color="white">home</v-icon>
      </v-btn>
      <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
    </v-toolbar>
    </div>
</template>

<style scoped>
.t {
    color: white !important;
    background-color: #1867C0 !important;
    border-bottom: 1px solid black !important;
}
.b:hover, .b:before {
  color: transparent;
}
</style>
