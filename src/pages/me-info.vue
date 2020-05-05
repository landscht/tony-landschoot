<template>
    <div class="text-center mt-5">
        <v-avatar size="150">
            <v-img src="../assets/me/profile.jpg"></v-img>
        </v-avatar>
        <p>
            <v-icon>mdi-car</v-icon> Véhicule personnel<br>
            <v-icon>mdi-cake-variant</v-icon> 21 ans<br>
        </p>
        <v-container style="text-align: left">
            <span class="display-3">Description</span>
            <p class="text-justify">Moi c'est Tony, je suis actuellement étudiant en <b>licence MIAGE</b> à Lille! J'ai commencé la programmation au lycée à l'aide de tuto
                trouvé sur youtube. L'envie de continuer dans cette voie c'est concrétisé en Terminale grâce à l'option <b>ISN (Informatique et Science du Numérique)</b>
                que j'ai pris au bac. Depuis je suis titulaire d'un <b>DUT informatique</b> réalisé à Lille et d'une <b>licence MIAGE</b>. Je compte continuer mon parcours en
                intégrant le <b>master MIAGE en alternance</b>.
            </p>
        </v-container>
        <v-btn text color="primary" to="/parcours">Parcours<v-icon right>mdi-chevron-right</v-icon></v-btn>
    </div>
</template>

<script>
    export default {
        name: "Accueil"
    }
</script>

<style scoped>

</style>
