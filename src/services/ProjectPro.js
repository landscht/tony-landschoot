import {Project} from "../models/Project";

export default {
    pros : [
        Object.assign(new Project(), {
            flex: 12,
            src: require('../assets/projects/pros/fast/pic3.png'),
            dialog: false,
            title: 'Fast',
            description: 'Davidson SI Nord propose des formations et il leur fallait un support pour pouvoir les faire connaître au monde extérieur. ' +
                'C’est là où FAST (Formation, Audit, Speaker & Tribe) est née. Celle-ci est un site vitrine permettant de présenter le catalogue de ' +
                'formations que l’entreprise propose et de permettre aux utilisateurs de réaliser des devis rapidement et sans devoir s’authentifier. ' +
                'Ce site intègre également une partie blog qui permet à l’entreprise de publier des articles en rapport avec les formations.\n' +
                'À mon arrivée on m’a donc confié ce projet qui n’avait pas encore débuté. De ce fait j’ai pu intervenir sur 3 grands sujets qui sont ' +
                'l’analyse du besoin, la réalisation du back-end et du front, puis sur l’intégration et le déploiement continus.\n',
            car: [
                require('../assets/projects/pros/fast/pic1.png'),
                require('../assets/projects/pros/fast/pic2.png'),
                require('../assets/projects/pros/fast/pic3.png'),
                require('../assets/projects/pros/fast/pic4.png')
            ],
            technos: [
                'vuejs', 'vuetify', 'npm', 'nodejs', 'neo4j', 'docker', 'travis', 'java', 'spring'
            ],
            rapport: 'https://docs.google.com/document/d/1h_biHB0iMrt2ddAJ6LTSZ1JUmPdPbwTQDFpbbtGp92E/edit?usp=sharing'
        }),

    ]
}
