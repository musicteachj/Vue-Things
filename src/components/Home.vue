<template>
  <div class="hello">
    <v-container>
      <!-- <v-text-field v-model="barcodeValue" placeholder="Enter barcode value"/><br>
      <barcode v-bind:value="barcodeValue">
        Enter your barcode above
      </barcode> -->
      <h1 class="display-3 intro">Barcode Generator</h1>
      <h1 class="display-2 secondIntro">Create your own barcodes and print them out</h1>
      <barcode class="barHome" v-bind:value="barcodeValue">
        Enter your barcode above
      </barcode>
    </v-container>
  </div>
</template>

<script>
import VueBarcode from 'vue-barcode';

export default {
  name: 'HelloWorld',
  data() {
    return {
      barcodeValue: "example"
    }
  },
  components: {
    'barcode': VueBarcode
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  margin-top: 5%;
}
.secondIntro, .barHome {
  margin-top: 7%;
}
.hello {
  background-color: white;
}
</style>
