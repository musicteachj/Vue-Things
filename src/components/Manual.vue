<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-flex xs3>
            <v-card>
              <h1>3</h1>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card>
              <h1>6</h1>
            </v-card>
          </v-flex>
           <v-flex xs3>
            <v-card>
              <h1>3</h1>
            </v-card>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <v-text-field
      placeholder="Input Barcode"
      v-model="barcodeInput">
    </v-text-field>
    <div id="barcodeContainer">
      <barcode
        :value="barcodeInput">
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

// NOT PICKING UP THIS CSS :(
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
      barcodeInput: ""
    }
  },
  methods: {
    printExample() {
      d.print(document.getElementById("barcodeContainer"), [cssText]);
    },
  }
}
</script>
