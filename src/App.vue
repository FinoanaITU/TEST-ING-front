<template>
  <v-app class="grey lighten-4">
    <div v-if="login == true">
      <NavBar />
    </div>
    <v-main class="mx-6 mt-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    login: true
  }),

  created () {
    if(this.login){
      this.$router.push('home')
    }else{
      this.$router.push('login')
    }
  }
};
</script>
