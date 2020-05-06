<template>
    <div class="text-center">
        <v-container style="text-align: left">
            <v-card-title>Parcour scolaire</v-card-title>
            <v-timeline>
                <v-timeline-item
                        v-for="(etape, n) in scolaires"
                        :key="n"
                        color="#009688"
                        fill-dot
                        left
                >
                    <template v-slot:opposite>
                        {{etape.date}}
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title>{{etape.title}}</v-card-title>
                        <v-card-text>
                            <v-icon color="#009688">mdi-school</v-icon> {{etape.ecole}}<br>
                            <v-icon color="#009688">mdi-map-marker</v-icon> {{etape.ville}}<br>
                            {{etape.description}}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-container>
        <v-container>
            <v-card color="#009688" class="elevation-10">
                <v-card-title class="white--text">Parcour professionnel</v-card-title>
                <v-card-text>
                    <v-timeline style="z-index: 1">
                        <v-timeline-item
                                v-for="(etape, n) in pro"
                                :key="n"
                                color="secondary"
                                fill-dot
                                right
                        >
                            <template v-slot:opposite>
                                <span class="white--text">{{etape.date}}</span>
                            </template>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">
                                    {{etape.company}}
                                </v-card-title>
                                <v-card-text>
                                    <v-icon color="#009688">mdi-briefcase</v-icon> {{etape.poste}}<br>
                                    <v-icon color="#009688">mdi-map-marker</v-icon> {{etape.ville}}<br>
                                    {{etape.description}}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-container>
        </div>
</template>

<script>
    export default {
        name: "Parcours",
        data : () => ({
            scolaires : [
                {
                    title: 'Licence MIAGE',
                    date: '2020',
                    ecole: 'Université de Lille',
                    ville: 'Lille',
                    description: ''
                },
                {
                    title: 'DUT informatique',
                    date: '2019',
                    ecole: 'IUT A, Université de Lille',
                    ville: 'Lille',
                    description: ''
                },
                {
                    title: 'Baccalauréat général Scientifique',
                    date: '2017',
                    ecole: 'Lycée Marguerite de Flandre',
                    ville: 'Gondecourt',
                    description: 'Option ISN (Informatique et Science du Numérique'
                },
            ],
            pro : [
                {
                    company: 'O\'tera',
                    poste: 'Merchandiser',
                    ville: 'Illies',
                    date: 'de juillet 2019 à aout 2019',
                    description: 'Gestion du stock et du rayon fruits et légumes.',
                },
                {
                    company: 'Davidson SI Nord',
                    poste: 'Développeur full stack (stage)',
                    ville: 'Lille',
                    date: 'de avril 2019 à juin 2019',
                    description: 'Création d\'un site web permettant de réaliser un devis selon un catalogue de formation et de consulter un blog.',
                },
                {
                    company: 'Université catholique de Lille',
                    poste: 'Assistant administratif',
                    ville: 'Lille',
                    date: 'de juillet 2018 à aout 2018',
                    description: 'Conduite engins agricoles',
                },
                {
                    company: 'KWS MOMONT',
                    poste: 'Ouvrier saisonnier',
                    ville: 'Mons en Pévèle',
                    date: 'de juillet 2017 à aout 2017',
                    description: 'Conduite engins agricoles',
                }
            ]
        })
    }
</script>
