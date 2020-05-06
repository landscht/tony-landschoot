import {Project} from "../models/Project";

export default {
    scolaires: [
        Object.assign(new Project(), {
            flex: 4,
            src: require('../assets/projects/scolaire/miage/pic1.png'),
            dialog: false,
            title: 'COO MIAGE',
            github: 'https://github.com/landscht/miage-coo-s5',
            description: 'Sur ce dépot vous pouvez retrouver tout les TPs que j\'ai réalisé durant mon année de licence MIAGE en COO.',
            car: [
                require('../assets/projects/scolaire/miage/pic1.png'),
            ],
            technos: [
                'java'
            ],
        }),
        Object.assign(new Project(), {
            flex: 4,
            src: require('../assets/projects/scolaire/miage/pic1.png'),
            dialog: false,
            title: 'HASKELL MIAGE',
            github: 'https://github.com/landscht/miage-pf-s5',
            description: 'Sur ce dépot vous pouvez retrouver tout les TPs que j\'ai réalisé durant mon année de licence MIAGE en programmation fonctionnelle.',
            car: [
                require('../assets/projects/scolaire/miage/pic1.png'),
            ],
            technos: [
                'java'
            ],
        })
    ]
}
