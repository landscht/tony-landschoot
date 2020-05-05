<template>
    <div>
        <v-container style="text-align: left">
            <span class="display-3">Projets personnels</span>
            <v-row dense>
                <v-col
                        v-for="(perso ,n) in persos"
                        :key="n"
                        :cols="perso.flex"
                >
                    <v-dialog v-model="perso.dialog" max-width="1000px">
                        <template v-slot:activator="{ on }">
                            <v-card v-on="on">
                                <v-img
                                        :src="perso.src"
                                        class="white--text align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                        height="200px"
                                >
                                    <v-card-title v-text="perso.title"></v-card-title>
                                </v-img>
                            </v-card>
                        </template>
                        <v-card>
                            <v-carousel
                                    cycle
                                    height="400"
                                    hide-delimiter-background
                                    show-arrows-on-hover
                            >
                                <v-carousel-item
                                        v-for="(slide, i) in perso.car"
                                        :key="i"
                                        :src="slide"
                                >
                                </v-carousel-item>
                            </v-carousel>
                            <v-card-title>
                                <span class="headline">{{perso.title}}</span>
                            </v-card-title>
                            <v-card-text>
                                {{perso.description}}
                            </v-card-text>
                            <v-card-actions>
                                <v-chip
                                        v-for="(techno, n) in perso.technos"
                                        class="ml-2"
                                        :key="n">
                                    {{techno}}
                                </v-chip>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon>mdi-github</v-icon></v-btn>
                                <v-btn icon v-if="perso.link" :href="perso.link"><v-icon>mdi-eye</v-icon></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-container>
        <v-container style="text-align: left">
            <span class="display-3">Projets scolaires</span>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data: () => ({
            dialog: false,
            persos: [
                {
                    flex: 3,
                    src: require('../assets/projects/perso/spotif/banner-card.png'),
                    dialog: false,
                    title: 'Spotif',
                    link: 'https://spotifhue.herokuapp.com',
                    description: 'L\'idée première de ce projet était de me perfectionné avec vuejs et également de manipuler des APIs. J\'ai donc' +
                        'recréé une interface pour Spotify en utilisant leur API et leur player SDK. Spotif récupére les playlists et musiques enregistré' +
                        'par l\'utilisateur Spotify et de les écouter. On peut également obtenir des informations sur les musiques en cours d\'écoutes. Je vous laisse' +
                        'un lien en bas à droite de cette card pour aller sur ce site si vous voulez en savoir plus.',
                    car: [
                        require('../assets/projects/perso/spotif/banner-card.png'),
                        require('../assets/projects/perso/spotif/pic1.png'),
                        require('../assets/projects/perso/spotif/pic2.png'),
                        require('../assets/projects/perso/spotif/pic3.png')
                    ],
                    technos: [
                        'vuejs',
                        'vuetify'
                    ]
                },
                {
                    flex: 3,
                    src: require('../assets/projects/perso/area-citizen/banner-card.png'),
                    title: 'Area Citizen',
                    dialog: false,
                    description: 'Area Citizen est un site web qui regroupe les vaisseaux présents dans le jeu Star Citizen. Il est possible de voir toute les caractéristiques' +
                        'd\'un vaisseau et de voir de quoi il est composé. Une fonction permet de comparer autant de vaisseau qu\'on désire. Toutes les informations des vaisseaux' +
                        'sont récupérées via l\'API \'StarCitizenAPI\'',
                    car: [
                        require('../assets/projects/perso/area-citizen/banner-card.png'),
                        require('../assets/projects/perso/area-citizen/pic2.png'),
                        require('../assets/projects/perso/area-citizen/pic3.png'),
                        require('../assets/projects/perso/area-citizen/pic4.png')
                    ],
                    technos: [
                        'vuejs',
                        'vuetify'
                    ]
                }
            ]
        })
    }
</script>

<style scoped>

</style>
