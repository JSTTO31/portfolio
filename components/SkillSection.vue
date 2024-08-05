<template>
    <v-container id="skill" class="py-15">
        <div class="w-100 d-flex justify-center flex-column align-center">
            <div style="width: 200px" class="">
                <h1 class="text-center" style="z-index: 10;">My Skill Set</h1>

                <div style="height: 12px;width: 100%;z-index: 5" class="bg-deep-purple-lighten-2 mt-n3 rounded-pill">
                </div>
            </div>
            <p style="font-size: 17px;" class="mt-3 font-weight-medium">Explore My Diverse Skill Set</p>

        </div>
        <v-row class="mt-10">
            <v-col cols="12" md="6" v-for="skill in skills" :key="skill.label">
                <h3>{{ skill.label }}</h3>
                <v-progress-linear class="rounded-pill mt-2" color="deep-purple-darken-4" height="10"
                    :model-value="skill.progress"></v-progress-linear>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const skills = [
    {
        label: "HTML",
        progress: 90
    },
    {
        label: "CSS",
        progress: 80
    },
    {
        label: "VueJS",
        progress: 80
    },
    {
        label: "ReactJS",
        progress: 20
    }, {
        label: "NuxtJS",
        progress: 75
    }, {
        label: "Vuetify",
        progress: 90
    }, {
        label: "Tailwind",
        progress: 50
    }, {
        label: "Bootstrap",
        progress: 50
    }, {
        label: "NodeJS",
        progress: 45
    },

    {
        label: "PHP",
        progress: 65
    },
    {
        label: "SQL",
        progress: 70
    },

    {
        label: "Laravel",
        progress: 80
    },

]
</script>

<style scoped></style>