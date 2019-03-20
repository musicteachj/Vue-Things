<template>
  <div class="hello">
    <v-container>
    <v-text-field v-model="barcodeValue" placeholder="Enter barcode value"/><br>
    <barcode v-bind:value="barcodeValue">
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
      barcodeValue: ""
    }
  },
  components: {
    'barcode': VueBarcode
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
