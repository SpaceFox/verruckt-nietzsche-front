<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Verrückt Nietzsche Logo"
          class="shrink mr-2"
          contain
          src="logo.jpg"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Ask Nietzsche</v-toolbar-title>
      </div>

    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        <strong>Ask Nietzsche</strong> by <a href="https://spacefox.fr">SpaceFox</a>, {{ new Date().getFullYear() }}
        — This site doesn’t use any cookie
        – Contact : nietzsche [at] spacefox.fr
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import Home from './components/Home.vue';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
