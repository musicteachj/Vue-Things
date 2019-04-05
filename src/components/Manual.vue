<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card dark color="primary">
            
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
              color="info"
              @click="printExample()">
              Save
            </v-btn>
            <v-btn 
              color="success"
              @click="printExample()">
              Print
            </v-btn>

          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="primary">
            
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
