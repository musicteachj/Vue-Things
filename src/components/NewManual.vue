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
              placeholder="Input Barcode"
              v-model="post.barcodeValue">
            </v-text-field>
            <div id="barcodeContainer">
              <barcode
                :value="post.barcodeValue">
              </barcode>
            </div>
            <v-btn 
              color="info"
              @click="addPost()">
              Save
            </v-btn>
            <v-btn 
              color="success"
              @click="showSnack()">
              Print
            </v-btn>

          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="primary">
            
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar
        color="success"
        v-model="snackbar"
        :bottom="true"
        :timeout="timeout"
      >
      {{text}}
      </v-snackbar>
    </v-container>        
  </div> <!-- End div -->
</template>

<script>
import VueAxios from 'vue-axios';
import axios from 'axios';
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
      barcodeInput: "",
      post:{
        barcodeValue: ""
      },
      snackbar: false,
      timeout: 3000,
      text: "Save Successful"
    }
  },
  methods: {
    showSnack() {
      this.snackbar = true;
    },
    printExample() {
      d.print(document.getElementById("barcodeContainer"), [cssText]);
    },
    addPost(){
      console.log(this.post);
      let uri = 'http://localhost:4000/scan/add';
      axios.post(uri, this.post).then(() => {
        this.showSnack();
        this.post.barcodeValue = "";
      });
    }
  }
}
</script>