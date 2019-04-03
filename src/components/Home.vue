<template>
    <v-container>
      <!-- <v-text-field v-model="barcodeValue" placeholder="Enter barcode value"/><br>
      <barcode v-bind:value="barcodeValue">
        Enter your barcode above
      </barcode> -->
      <h1 class="display-3 intro">Barcode Generator</h1>
      <h1 class="display-2 secondIntro">Create your own barcodes and print them out</h1>
      <div id="exampleBarcodeContainer">
        <barcode class="barHome" :value="barcodeValue">
          Enter your barcode above
        </barcode>
      </div>
      <v-btn 
        color="success"
        @click="printExample()">
         Print
      </v-btn>
    </v-container>
</template>

<script>
import VueBarcode from 'vue-barcode';
import Printd from 'printd';

const d = new Printd();

const cssText = `
.barHome {
  margin-left: 40px;
}
`;

export default {
  components: {
    'barcode': VueBarcode
  },
  data() {
    return {
      barcodeValue: "example"
    }
  },
  methods: {
    printExample() {
      d.print(document.getElementById("exampleBarcodeContainer"), [cssText]);
    },
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
