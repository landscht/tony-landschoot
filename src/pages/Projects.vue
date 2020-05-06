<template>
    <div>
        <LibraryCard title="Projets personnels" :data="persos"></LibraryCard>
        <LibraryCard title="Projets professionnels" :data="pros"></LibraryCard>
    </div>
</template>

<script>
    import LibraryCard from "../components/LibraryCard";
    import ProjectPerso from "../services/ProjectPerso";
    import ProjectPro from "../services/ProjectPro";

    export default {
        name: "Projects",
        components: {LibraryCard},
        data: () => ({
            dialog: false,
            persos: ProjectPerso.persos,
            pros: ProjectPro.pros
        })
    }
</script>

<style scoped>

</style>
