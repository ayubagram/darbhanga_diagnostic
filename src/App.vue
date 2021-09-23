<template>
  <v-app>
    <Navbar />
    <v-main style="margin-top: 110px;">
      <router-view :key="$route.path" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar, Footer }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
}
.v-btn span { 
  font-weight: 300 !important; 
  font-size: 16px !important;
}
.home .v-btn span {
  font-weight: bold !important; 
  font-size: 13px !important;
  letter-spacing: .5px !important;
}
</style>