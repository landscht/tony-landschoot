<template>
  <v-app id="app">
    <v-app-bar
      app
      elevate-on-scroll
      fade-img-on-scroll
      shrink-on-scroll
      dark
      src="./assets/toolbar/banner-toolbar.jpeg"
    >
      <template v-slot:img="{ props }">
        <v-img
                v-bind="props"
                gradient="to top right, rgba(0,0,0,.40), rgba(0,0,0,.40)"
        ></v-img>
      </template>
      <v-toolbar-title>Tony Landschoot</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-download</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/me">Qui suis-je</v-tab>
          <v-tab to="/parcours">Parcours</v-tab>
          <v-tab to="/project">Projets</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <Accueil></Accueil>
      <Parcours></Parcours>
      <Projects></Projects>
    </v-content>
    <v-footer
            dark
            padless
    >
      <v-row
              justify="center"
              align="center"
              no-gutters
      >
        <v-btn color="white" text rounded class="my-2">Me contacter</v-btn>
        <v-btn color="white" text rounded class="my-2">Code source</v-btn>
        <span class="subtitle-2 white--text ml-5" >Restons connectés!</span>
        <v-btn color="white" icon><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn color="white" icon><v-icon>mdi-linkedin</v-icon></v-btn>
        <v-btn color="white" icon><v-icon>mdi-github</v-icon></v-btn>
        <v-col
                class="lighten-2 py-4 text-center white--text"
                cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Tony Landschoot</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

import Accueil from "./pages/me-info";
import Parcours from "./pages/Parcours";
import Projects from "./pages/Projects";
export default {
  name: 'App',
  components: {Projects, Parcours, Accueil},
  data: () => ({
    //
  }),
};
</script>
