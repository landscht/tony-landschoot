import {Project} from "../models/Project";

export default {
    persos: [
        Object.assign(new Project(), {
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
        }),
        Object.assign(new Project(), {
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
        }),
        Object.assign(new Project(), {
            flex: 6,
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
        }),
        Object.assign(new Project(), {
            flex: 6,
            src: require('../assets/projects/perso/parkmod/pic3.png'),
            dialog: false,
            title: 'GTA 5 Park mod',
            github: 'https://github.com/landscht/ParkMod',
            description: 'Ce projet à était pour moi l\'occasion d\'apprendre le C# et de comprendre le fonctionnement du modding dans les jeux vidéos.' +
                'Ce mod permet de gérer en quelque sorte son parc automobile dans GTA 5. Lorsqu\'on ajoute une voiture, elle ne disparaitra plus et restera' +
                'à l\'emplacement ou on l\'a laissé meme si on quitte le jeu. Une interface permet de gérer son parc et également d\'intéragir avec les ' +
                'véhicules sauvegardés',
            car: [
                require('../assets/projects/perso/parkmod/pic2.png'),
                require('../assets/projects/perso/parkmod/pic1.png'),
                require('../assets/projects/perso/parkmod/pic3.png'),
                require('../assets/projects/perso/parkmod/pic4.png')
            ],
            technos: [
                'C#'
            ]
        })
    ]
}
