<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="calories"
    class="elevation-1"
    :search="search.firstname"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Utilisateurs {{add ? `(${add})` : ''}}</v-toolbar-title>
        <div v-if="add == 0">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click.prevent="getAndSaveUsers()"
        >
          <v-icon dark>
            mdi-application-import
          </v-icon>
        </v-btn>
        </div>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>

        <div class="d-flex align-items-center justify-content-center">          
            <v-text-field
              v-model="search.firstname"            
              label="Recherche"
              placeholder="Tapez quelque chose"
              required
            ></v-text-field>          
        </div>
        
        <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="1100px"
        >          
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>              
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-avatar size="96">
                      <img :src="editedItem.picture" />
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"                    
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fullname"
                      label="Noms et prénoms"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"                    
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.username"
                      label="Nom d'utilisateur"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"                    
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Adresse email"
                      readonly
                    ></v-text-field>
                  </v-col>                  
                </v-row>                
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                OK
              </v-btn>              
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-card-account-details-outline
      </v-icon>      
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { Helper } from '../helper/Helper';
import UsersApi from '../api/UsersApi';

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      add: 0,
      users: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'fullname',
        },
        { text: "Nom d'utilisateur", value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'Force du mot de passe', value: 'passwordstrength' },
        { text: 'Actions', value: 'actions', sortable: false }      
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      search: {        
        firstname: '',
        title: '',
        activated: false
      }
    }),

    computed: {
      formTitle () {
        return "Données de l'utilisateur"
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize();
      console.log(this.users)
      
    },

    methods: {
      getUsers() {
        UsersApi.list()
        .then((response) => {
          console.log(response.data);
          this.add = response.data.length;
          this.users = response.data.map((user) => {
            return {
              gender: user.gender,
              title: user.name.title,
              firstname: user.name.first,
              lastname: user.name.last,
              fullname: `${user.name.title.toLocaleUpperCase()} ${Helper.capitalize(user.name.first)} ${Helper.capitalize(user.name.last)}`,
              username: user.login.username,
              email: user.email,
              phone: user.phone,
              picture: user.picture,
              passwordstrength: user.login.passwordstrength
            }
          });
        })
      },
      getAndSaveUsers() {
        UsersApi.getAndSaveUser()
        .then((response) => {
          console.log(response.data);
          this.add = response.data.user_add
          this.users = response.data.result.map((user) => {
            return {
              gender: user.gender,
              title: user.name.title,
              firstname: user.name.first,
              lastname: user.name.last,
              fullname: `${user.name.title.toLocaleUpperCase()} ${Helper.capitalize(user.name.first)} ${Helper.capitalize(user.name.last)}`,
              username: user.login.username,
              email: user.email,
              phone: user.phone,
              picture: user.picture,
              passwordstrength: user.login.passwordstrength
            }
          });
        })
      },
      initialize () {
        console.log('Initialize...');
        this.getUsers();
      },

      editItem (item) {        
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }      
    },
  }
</script>