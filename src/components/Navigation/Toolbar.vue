<template>
    <div>
        <v-toolbar class="t" color="white">
    <v-btn
        color=""
        flat
        value="recent"
        to="/comp1"
      >
        <v-icon color="white">home</v-icon>
      </v-btn>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    </div>
</template>

<style scoped>
.t {
    color: white !important;
    background-color: #1867C0 !important;
    border-bottom: 1px solid black !important;
}
</style>
