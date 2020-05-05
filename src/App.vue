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
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-toolbar-title>Tony Landschoot</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
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
