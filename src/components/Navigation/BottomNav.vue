<template>
  <v-card class="bottomNavCard" height="55px" flat>
    <!-- <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div> -->
    <v-bottom-nav
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        to="/comp1"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
        to="/"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
.bottomNavCard {
    bottom: 0;
    position: absolute;
    width: 100%;
}
</style>
