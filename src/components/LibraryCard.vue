<template>
    <v-container style="text-align: left">
        <v-card-title>{{title}}</v-card-title>
        <v-row dense>
            <v-col
                    v-for="(card ,n) in data"
                    :key="n"
                    :cols="card.flex"
            >
                <v-dialog v-model="card.dialog" max-width="1000px">
                    <template v-slot:activator="{ on }">
                        <v-card v-on="on">
                            <v-img
                                    :src="card.src"
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    height="200px"
                            >
                                <v-card-title v-text="card.title"></v-card-title>
                            </v-img>
                        </v-card>
                    </template>
                    <v-card>
                        <v-carousel
                                style="text-align: right"
                                cycle
                                height="400"
                                hide-delimiter-background
                                show-arrows-on-hover
                        >
                            <v-carousel-item
                                    v-for="(slide, i) in card.car"
                                    :key="i"
                                    :src="slide"
                            >
                                <v-btn small bottom left dark @click="displayImage(slide)" fab class="mt-2 mr-2"><v-icon>mdi-magnify-plus</v-icon></v-btn>
                            </v-carousel-item>
                        </v-carousel>

                        <v-card-title>
                            <span class="headline">{{card.title}}</span>
                        </v-card-title>
                        <v-card-text>
                            <p>{{card.description}}</p>
                            <v-chip
                                    v-for="(techno, n) in card.technos"
                                    class="ml-2 mb-1"
                                    :key="n">
                                {{techno}}
                            </v-chip>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text @click="card.dialog = !card.dialog">Retour</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon v-if="card.rapport" :href="card.rapport"><v-icon>mdi-book-open</v-icon></v-btn>
                            <v-btn icon v-if="card.github" :href="card.github"><v-icon>mdi-github</v-icon></v-btn>
                            <v-btn icon v-if="card.link" :href="card.link"><v-icon>mdi-eye</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-overlay :value="overlay" opacity="0.8" z-index="1000">
                        <v-btn
                                icon
                                @click="overlay = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-img :src="image" :max-width="size < 1000 ? size-50 : size-200"></v-img>
                    </v-overlay>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: "LibraryCard",
        props : {
            data: Array,
            title: String,
        },
        methods : {
            displayImage(image) {
                this.image = image;
                this.overlay = !this.overlay;
            }
        },
        mounted() {
            this.size = window.innerWidth;
        },
        data : () => ({
            overlay: false,
            image : '',
            size: 1000
        })
    }
</script>

<style scoped>

</style>
