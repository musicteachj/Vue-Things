<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs1>
          <v-card flat>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card flat>
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
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-card flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
     <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs2>
          <v-card flat>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card flat>
            <h1 class="display-1 bTypes">Available Types</h1>
            <h1
              class="subheading"
              v-for="(item, index) in barcodeTypes"
              :key="index">
              {{item.type}}
            </h1>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card flat>
            <v-carousel 
              class="car"
              hide-delimiters
              interval="4000">
              <v-carousel-item>
                <barcode format="CODE128" value="Example1234"></barcode>
                <p>CODE128</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="EAN13" value="5901234123457"></barcode>
                <p>EAN13</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="UPC" value="123456789999"></barcode>
               <p>UPC</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="EAN8" value="96385074"></barcode>
                <p>EAN8</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="EAN5" value="54495"></barcode>
                <p>EAN5</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="EAN2" value="53"></barcode>
                <p>EAN2</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="CODE39" value="CODE39 Barcode"></barcode>
                <p>CODE39</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="ITF14" value="12345678901231"></barcode>
                <p>ITF14</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="MSI" value="1234"></barcode>
                <p>MSI</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="MSI10" value="1234"></barcode>
                <p>MSI10</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="MSI11" value="1234"></barcode>
                <p>MSI11</p>
              </v-carousel-item>
               <v-carousel-item>
                <barcode format="MSI1010" value="1234"></barcode>
                <p>MSI1010</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="MSI1110" value="1234"></barcode>
                <p>MSI1110</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="pharmacode" value="1234"></barcode>
                <p>PHARMACODE</p>
              </v-carousel-item>
              <v-carousel-item>
                <barcode format="codabar" value="1234567890"></barcode>
                <p>CODABAR</p>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
      barcodeValue: "example",
      barcodeTypes: [
        {type: "CODE128"},
        {type: "UPC"},
        {type: "EAN13"},
        {type: "EAN8"},
        {type: "EAN5"},
        {type: "EAN2"},
        {type: "CODE39"},
        {type: "ITF14"},
        {type: "MSI"},
        {type: "MSI10"},
        {type: "MSI11"},
        {type: "MSI1010"},
        {type: "MSI1110"},
        {type: "PHARMACODE"},
        {type: "CODABAR"}
      ]
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
.bTypes {
  margin-bottom: 10%;
}
.subheading {
  margin-right: 5%;
  display: inline;
}
.secondIntro, .barHome {
  margin-top: 4%;
}
.hello {
  background-color: white;
}
.car {
  /* margin-bottom: 5%;
  margin-top: 5%; */
  height: 250px !important;
}
.v-carousel {
  box-shadow: none;
}
</style>
