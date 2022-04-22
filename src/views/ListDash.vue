<template>
<v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="dessertHeaders"
    :items="allPeople"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    :loading="loadPeople"
    :search="search"
    item-key="name"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>List People</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog
                transition="dialog-bottom-transition"
                fullscreen
                hide-overlay
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    v-model="vfilm"
                  >film</v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar
                      color="primary"
                      dark
                    >
                    <v-btn
                      icon
                      dark
                      @click="dialog.value = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    List film
                    </v-toolbar>
                    <v-card-text>
                      <v-card flat  v-for="film in item.films" :key="film.title" elevation="2">
                      <v-layout wrap class="pa-3 project">
                        <v-flex xs12 md2 >
                          <div class="green--text">title</div>
                          <div>{{ film.title}}</div>
                        </v-flex>
                        <v-flex xs6 sm4 md2 >
                          <div class="caption green--text">Episode</div>
                          <div>{{film.episode_id}}</div>
                        </v-flex>
                        <v-flex xs2 sm4 md2 >
                          <div class="caption green--text">director</div>
                          <div>{{film.director}}</div>
                        </v-flex>
                        <v-flex xs2 sm4 md2 >
                          <div class="caption green--text">release date</div>
                          <div>{{film.release_date}}</div>
                        </v-flex>
                        <v-flex xs2 sm4 md2 >
                          <div class="caption green--text">Description</div>
                          <div>{{film.description}}</div>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                    </v-card>
                    </v-card-text>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>

          <v-col cols="auto">
            <v-dialog
              transition="dialog-top-transition"
              max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >Vehicules</v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar
                    color="primary"
                    dark
                  >List vehicules</v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Vehicules</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
          <v-col cols="auto">
            <v-dialog
              transition="dialog-top-transition"
              max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >Starships</v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar
                    color="primary"
                    dark
                  >List Starships</v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Starships</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
      </v-row>
      </td>
    </template>
  </v-data-table>
  </v-card>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        expanded: [],
        singleExpand: false,
        allPeople: [],
        loadPeople: false,
        search: '',
        vfilm: false,
        dessertHeaders: [
          {
            text: 'name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'gender', value: 'gender' },
          { text: 'height', value: 'height' },
          { text: 'skin color', value: 'skin_color' },
          { text: 'birth year', value: 'birth_year' },
          { text: 'hair color', value: 'hair_color' },
          { text: '', value: 'data-table-expand' },
        ],
      }
    },

     created(){
      this.getListPeople()
    },
    methods: {
      getListPeople(){
        this.loadPeople = true,
        axios.post('http://127.0.0.1:5000/findListPeople')
            .then(function( response ){
              console.log(response.data)
              this.allPeople = response.data;
              this.loadPeople = false
            }.bind(this));
      },
    }
  }
</script>