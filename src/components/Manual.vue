<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card dark color="primary">
            <barcode
              format="CODE128"
              value="Example1234">
            </barcode>
            <barcode
              format="EAN13"
              value="5901234123457">
            <barcode
              format="UPC"
              value="123456789999">
            </barcode>
            </barcode>
            <barcode
              format="EAN8"
              value="96385074">
            </barcode>
            <barcode
              format="EAN5"
              value="54495">
            </barcode>
            <barcode
              format="EAN2"
              value="53">
            </barcode>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card flat>
            <v-text-field
              clearable
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
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="primary">
            <barcode
              format="CODE39"
              value="CODE39 Barcode">
            </barcode>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>        
  </div> <!-- End div -->
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
