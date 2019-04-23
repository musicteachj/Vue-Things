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
              @click="printExamp()">
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
      }
    }
  },
  methods: {
    printExample() {
      d.print(document.getElementById("barcodeContainer"), [cssText]);
    },
    addPost(){
      console.log(this.post);
      let uri = 'http://localhost:4000/scan/add';
      axios.post(uri, this.post).then(() => {
        this.$router.push({name: 'scan'});
      });
    }
  }
}
</script>