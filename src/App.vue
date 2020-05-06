<template>
  <v-app>
    <v-app-bar
      app
      dark
      src="./assets/toolbar/banner-toolbar.jpeg"
    >
      <template v-slot:img="{ props }">
        <v-img
                v-bind="props"

                gradient="to top right, rgba(0,0,0,.30), rgba(0,0,0,.30)"
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
      <router-view id="content"></router-view>
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

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
