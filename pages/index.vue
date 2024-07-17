<template>
    <v-main class="bg-deep-purple-lighten-5">
        <home-section></home-section>
        <service-section></service-section>
        <project-section></project-section>
        <v-dialog fullscreen :model-value="$route.name == 'index-id'" persistent no-click-animation  @click:outside="$router.push({name: 'index'})" >
                <v-card class="rounded-0">
                    <nuxt-page></nuxt-page>
                    <v-btn color="grey-darken-4" icon="mdi-close" style="position: absolute;top: 15px;right: 15px" @click="$router.push({name: 'index'})" size="large"></v-btn>
                </v-card>
        </v-dialog>
    </v-main>
</template>

<script setup lang="ts">




</script>

<style scoped>
.portfolio-card{
    z-index: 100;
    transition: .15s ease;
}

.portfolio-card:hover{
    z-index: 150;
    transform: scale(1.01)
}
</style>