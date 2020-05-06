<template>
    <div>
        <LibraryCard title="Projets personnels" :data="projects"></LibraryCard>
    </div>
</template>

<script>
    import LibraryCard from "../components/LibraryCard";
    import ProjectPerso from "../services/ProjectPerso";
    import ProjectPro from "../services/ProjectPro";
    import ProjectScolaire from "../services/ProjectScolaire";

    export default {
        name: "Projects",
        components: {LibraryCard},
        data: () => ({
            dialog: false,
            projects: ProjectPerso.persos.concat(ProjectPro.pros).concat(ProjectScolaire.scolaires),
        })
    }
</script>

<style scoped>

</style>
