<template>
  <div>
  <v-card class="bottomNavCard" height="55px" flat>
    <v-bottom-nav
      :value="true"
      absolute
      >
      <v-btn
        color="teal"
        flat
        to="/manual">
        <span>Manual</span>
        <v-icon>keyboard</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        to="/scan">
        <span>Scan</span>
        <v-icon>mdi-barcode-scan</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        to="/print">
        <span>Print</span>
        <v-icon>print</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        to="/newmanual">
        <span>New Manual</span>
        <v-icon>keyboard</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        to="/newscan">
        <span>New Scan</span>
        <v-icon>mdi-barcode-scan</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        to="/newprint">
        <span>New Print</span>
        <v-icon>print</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  </div>
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
