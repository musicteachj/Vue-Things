<template>
  <div>
    <v-container>
      <v-card 
        v-for="(post, index) in posts"
        :key="index">
        <barcode :value="post.barcodeValue">
        </barcode>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            icon
            @click="editDialog(post)"
            >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="deletePost(post._id)">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-actions>
        <edit-dialog
        v-model="dialog"
        />
      </v-card>

       <!-- <v-dialog
          v-model="dialog"
          width="500"
        >
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
        </v-dialog> -->
    </v-container>
  </div>
</template>

<script>
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueBarcode from 'vue-barcode';
import EditDialog from '@/components/Dialogs/EditD.vue';

  export default {
     components: {
      'barcode': VueBarcode,
      EditDialog
    },
      data() {
        return {
          posts: [],
           dialog: false,
           newThing: ""
        }
      },
      // created() {
      //   let uri = `http://localhost:4000/scan/edit/${this.$route.params.id}`;
      //   axios.get(uri).then((response) => {
      //       this.post = response.data;
      //   });
      // },
      created() {
        let uri = 'http://localhost:4000/scan';
        axios.get(uri).then(response => {
          this.posts = response.data;
        });
      },
      methods: {
        // updatePost() {
        //   let uri = `http://localhost:4000/scan/update/${this.$route.params.id}`;
        //   axios.post(uri, this.post).then(() => {
        //     this.$router.push({name: 'scan'});
        //   });
        // }
        deletePost(id) {
          let uri = `http://localhost:4000/scan/delete/${id}`;
          axios.delete(uri).then(response => {
            this.posts.splice(this.posts.findIndex(i => i._id == id), 1);
          });
        },
      
        editDialog(id) {
          console.log(id);
          this.newThing = id.barcodeValue;
          this.dialog = true;
        },
    }
  }
</script>