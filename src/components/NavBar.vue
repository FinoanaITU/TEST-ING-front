<template>
  <nav>
      <v-app-bar text flat app
      >
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase blue--text">
              <span class="font-weight-light">Gestion des utilisateurs</span>              
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="grey" text>
              <span>Sign out</span>
              <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app 
        absolute prominent src="../assets/antoine-rault-IhWRrZx4-kk-unsplash.jpg">
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/thumb/men/76.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link class="white--text">
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Finoana ANDRIA
                </v-list-item-title>
                <v-list-item-subtitle>finoanaandriatsilavoo@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider class="mx-1 grey lighten-3" ></v-divider>
          <v-list>
              <v-list-item class="white--text" router to="/home">
                <v-list-item-icon><v-icon>mdi-view-dashboard-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Accueil</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
          <!-- <v-list>
              <v-list-group
                v-for="menuItem in menu" 
                :key="menuItem.text" 
                router :to="menuItem.route"
                :prepend-icon="menuItem.icon"
              >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title class="white--text" v-text="menuItem.text"></v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item                   
                  v-for="submenuItem in menuItem.submenu" :key="submenuItem.title" 
                  router :to="submenuItem.route"
                >
                    <v-list-item-icon><v-icon class="white--text">{{submenuItem.icon}}</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="submenuItem.title" class="white--text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
              </v-list-group>
          </v-list> -->
      </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        menu: [
            {
                icon: 'mdi-server-network', 
                text: 'Users',
                route: '/home'                
            },
        ]
    })
}
</script>

<style>

</style>