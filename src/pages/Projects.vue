<template>
    <div>
        <v-container style="text-align: left">
            <span class="headline">Projets personnels</span>
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
                                <p>{{perso.description}}</p>
                                <v-chip
                                        v-for="(techno, n) in perso.technos"
                                        class="ml-2 mb-1"
                                        :key="n">
                                    {{techno}}
                                </v-chip>
                            </v-card-text>
                            <v-card-actions>
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
            <span class="headline">Projets scolaires</span>
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
                    flex: 6,
                    src: require('../assets/projects/perso/catho/pic3.png'),
                    dialog: false,
                    title: 'Durée annualisée',
                    link: 'https://projet-catho-front.herokuapp.com/',
                    description: 'Ce projet est destiné à aider les employés de l\'université catholique de Lille à calculer la durée annualisé pour leurs' +
                        'employés. Avec ce projet j\'ai pu approfondir mes compétences en front avec vuejs mais également coté back avec spring. J\'ai également' +
                        'appris comment gérer l\'authentification avec spring security et jwt token. Il suffit de rentrer l\'année pour laquelle on veut calculer la' +
                        'durée annualisé, la date d\'entrée de l\'employé, et le logiciel calcul automatiquement ces jours de congés qu\'il à accumuler, le nombre de RTT' +
                        'le nombre de week end et de jour férie pendant cette période, et sort le nombre d\'heure ou de jours à réaliser dans l\'année.',
                    car: [
                        require('../assets/projects/perso/catho/banner-card.png'),
                        require('../assets/projects/perso/catho/pic1.png'),
                        require('../assets/projects/perso/catho/pic2.png'),
                        require('../assets/projects/perso/catho/pic3.png'),
                        require('../assets/projects/perso/catho/pic4.png')
                    ],
                    technos: [
                        'vuejs',
                        'vuetify',
                        'spring',
                        'spring-security',
                        'travis',
                        'heroku'
                    ]
                },
                {
                    flex: 6,
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
                    flex: 12,
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
