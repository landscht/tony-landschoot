<template>
    <div>
        <div id="content-me">
            <v-container class="text-center">
                <v-avatar size="150">
                    <v-img src="../assets/me/profile.jpg"></v-img>
                </v-avatar>
                <p class="display-2 font-weight-thin white--text">
                    Développeur full stack
                </p>

            </v-container>
        </div>
        <v-container id="me-description">
            <v-card style="text-align: left;">
                <v-card-title>Description</v-card-title>
                <v-card-text>
                    <p class="text-justify">Moi c'est Tony, je suis actuellement étudiant en <b>licence MIAGE</b> à Lille! J'ai commencé la programmation au lycée à l'aide de tuto
                        trouvé sur youtube. L'envie de continuer dans cette voie c'est concrétisé en Terminale grâce à l'option <b>ISN (Informatique et Science du Numérique)</b>
                        que j'ai pris au bac. Depuis je suis titulaire d'un <b>DUT informatique</b> réalisé à Lille et d'une <b>licence MIAGE</b>. Je compte continuer mon parcours en
                        intégrant le <b>master MIAGE en alternance</b>.
                    </p>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Accueil"
    }
</script>

<style scoped>
    #content-me {
        padding-top: 200px;
        padding-bottom: 200px;
        background-size: cover;
        background-image: url("../assets/toolbar/banner-toolbar.jpeg");
    }

    #me-description {
        margin-top: -60px;
    }
</style>
