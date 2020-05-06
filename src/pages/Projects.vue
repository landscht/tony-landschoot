<template>
    <div>
        <LibraryCard title="Projets personnels" :data="persos"></LibraryCard>
        <LibraryCard title="Projets professionnels" :data="pros"></LibraryCard>
        <LibraryCard title="Projets scolaires" :data="scolaires"></LibraryCard>
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
            persos: ProjectPerso.persos,
            pros: ProjectPro.pros,
            scolaires: ProjectScolaire.scolaires
        })
    }
</script>

<style scoped>

</style>
