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
  <div id="barDisplay">
      <barcode
         :value="barValue">
      </barcode>
  </div>
  </v-container>
</template>

<script>
import Quagga from 'quagga';
import VueBarcode from 'vue-barcode';

export default {
    components: {
    'barcode': VueBarcode
  },
  data() {
    return {
        barValue: "test"
    }
  },
  methods: {
    openScanner() {
     Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector('#barC'),
                    constraints: {
                       width: {min: 640},
                        height: {min: 480},
                        aspectRatio: {min: 1, max: 100},
                        facingMode: "environment"
                    },
                    area: { // defines rectangle of the detection/localization area
                        top: "0%",    // top offset
                        right: "0%",  // right offset
                        left: "0%",   // left offset
                        bottom: "0%"  // bottom offset
                    },
                },
                decoder: {
                    readers: [
                        "code_128_reader",
                        "ean_reader",
                        "ean_8_reader",
                        "code_39_reader",
                        "code_39_vin_reader",
                        "codabar_reader",
                        "upc_reader",
                        "upc_e_reader",
                        "i2of5_reader"
                    ],
                    debug: {
                        showCanvas: true,
                        showPatches: true,
                        showFoundPatches: true,
                        showSkeleton: true,
                        showLabels: true,
                        showPatchLabels: true,
                        showRemainingPatchLabels: true,
                        boxFromPatches: {
                            showTransformed: true,
                            showTransformedBox: true,
                            showBB: true
                        }
                    }
                },

            }, function (err) {
                if (err) {
                    console.log(err);
                    return
                }

                console.log("Initialization finished. Ready to start");
                Quagga.start();

                // Set flag to is running
                _scannerIsRunning = true;
            });

            Quagga.onProcessed(function (result) {
                var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

                if (result) {
                    if (result.boxes) {
                        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                        result.boxes.filter(function (box) {
                            return box !== result.box;
                        }).forEach(function (box) {
                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                        });
                    }

                    if (result.box) {
                        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
                    }

                    if (result.codeResult && result.codeResult.code) {
                        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                    }
                }
            });


            
        
  
    },
    closeScanner() {
      Quagga.stop();
    }
    
  },
  computed: {
      detect() {
          Quagga.onDetected(function (result) {
                console.log("barV");
                console.log(this.barValue);
                console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
                this.barValue = result.codeResult.code;
                console.log("barvalue:");
                console.log(this.barValue);
                Quagga.stop();
            });
      }
      
  }
}
</script>

<style scoped>
#barC {
    background-color: blue !important;
    width: 640px;
    height:480px;
}
</style>


