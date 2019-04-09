<template>
  <v-container>
    <v-btn 
    color="success"
    @click="openScanner">
     scan
  </v-btn>
  <v-btn 
    color="error"
    @click="closeScanner">
     stop
  </v-btn>
  <div id="barC"></div>
  </v-container>
</template>

<script>
import Quagga from 'quagga';
export default {
  data() {
    return {

    }
  },
  methods: {
    openScanner() {
      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#barC')    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
            "2of5_reader",
            "code_93_reader"
          ]
        }
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
      });
    },
    closeScanner() {
      Quagga.stop();
    }
    
  }
}
</script>

