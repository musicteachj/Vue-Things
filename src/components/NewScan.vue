<template>
  <v-container>
    <!-- <v-btn 
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
  </div> -->
   <h1>Posts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'manual' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Barcode V</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                 <tr v-for="post in posts" :key="post._id">
                  <td>{{posts.indexOf(post) + 1}}</td>
                  <td>{{post._id}}</td>
                  <td>{{ post.barcodeValue }}</td>
                  <td @click="showDialog(post)">Edit</td>
                  <!-- <td><router-link :to="{name: 'print', params: { id: post._id }}" class="btn btn-primary">Edit</router-link></td> -->
                  <td><button class="btn btn-danger" @click="deletePost(post._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>

        <v-dialog
          v-model="dialog"
          width="500"
        >
          <!-- <template v-slot:activator="{ on }">
            <v-btn
              color="red lighten-2"
              dark
              v-on="on"
            >
              Click Me
            </v-btn>
          </template> -->

          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Edit Barcode
            </v-card-title>

            <v-container>
              <v-text-field
              clearable
              v-model="newThing">
            </v-text-field>
            <div id="barcodeContainer">
              <barcode
                :value="newThing">
              </barcode>
            </div>

            <!-- <v-card-text>
              {{newThing}}
            </v-card-text> -->
            </v-container>

            

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  </v-container>
</template>

<script>
import VueAxios from 'vue-axios';
import axios from 'axios';
import Quagga from 'quagga';
import VueBarcode from 'vue-barcode';

export default {
    components: {
    'barcode': VueBarcode
  },
  data() {
    return {
        barValue: "test",
         posts: [],
         dialog: false,
         post: {},
         newThing: ""
    }
  },
  created() {
      let uri = 'http://localhost:4000/scan';
      axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id) {
        let uri = `http://localhost:4000/scan/delete/${id}`;
        axios.delete(uri).then(response => {
          this.posts.splice(this.posts.findIndex(i => i._id == id), 1);
        });
      },
    
      showDialog(id) {
        console.log(id);
        this.newThing = id.barcodeValue;
        this.dialog = true;
      },

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