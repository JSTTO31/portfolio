<template>
    <v-card class="portfolio-card rounded-lg">
        <v-hover v-slot="{ props, isHovering }">
            <v-card v-bind="props" class="rounded-0" flat
                @click.stop="$router.push({ name: 'index-id', params: { id: portfolio.id } })">
                <nuxt-img id="image" class="w-100"
                    :src="portfolio.location + `/${portfolio.active_image}.png`"></nuxt-img>
                <v-overlay contained persistent no-click-animation :model-value="!!isHovering"
                    class="d-flex justify-center align-center">
                    <v-btn variant="outlined" class="font-weight-medium" color="white">View Images</v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
        <div class="pa-5">
            <h3 @click="$router.push({ name: 'index-id', params: { id: portfolio.id } })"
                class="text-xs-h6 text-lg-h6 text-md-subtitle-2 font-weight-bold underline">{{ portfolio.title }}</h3>
            <div class="mt-2 d-flex" style="gap: 5px">
                <v-icon size="30" v-for="icon in portfolio.icons" :key="icon">{{ icon }}</v-icon>
            </div>
            <div class="mt-5 d-flex" style="gap: 5px">
                <v-btn prepend-icon="mdi-lock" color="primary" disabled flat class="rounded-lg text-capitalize"
                    v-if="portfolio.live_demo == 'private'">
                    Private
                </v-btn>
                <v-btn prepend-icon="mdi-chip" color="grey" disabled flat class="rounded-lg text-capitalize"
                    v-else-if="portfolio.live_demo == 'local'">
                    Local
                </v-btn>
                <v-btn v-else variant="flat" prepend-icon="mdi-open-in-new" class="rounded-lg text-capitalize"
                    color="deep-purple" @click.stop="visit(portfolio.live_demo)">Live
                    Demo</v-btn>
                <v-menu>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" class="border rounded-lg text-capitalize" flat
                            append-icon="mdi-chevron-down" prepend-icon="mdi-github" v-if="!(name == 'lg' || name == 'xl')">Github source</v-btn>
                    </template>
                    <v-list>
                        <v-list-item prepend-icon="mdi-github" class="rounded-lg text-capitalize"
                            @click.stop="visit(portfolio.source_frontend)"
                            v-if="portfolio.source_frontend">Frontend
                            Source</v-list-item>
                        <v-list-item prepend-icon="mdi-github" class="rounded-lg text-capitalize"
                            @click.stop="visit(portfolio.source_backend)"
                            v-if="portfolio.source_backend">Backend Source</v-list-item>
                    </v-list>
                </v-menu>
                <v-btn variant="flat" prepend-icon="mdi-github" class="rounded-lg text-capitalize"
                    @click.stop="visit(portfolio.source_frontend)"
                    v-if="portfolio.source_frontend && (name == 'lg' || name == 'xl')">Frontend Source</v-btn>
                <v-btn variant="flat" prepend-icon="mdi-github" class="rounded-lg text-capitalize"
                    @click.stop="visit(portfolio.source_backend)"
                    v-if="portfolio.source_backend && (name == 'lg' || name == 'xl')">Backend Source</v-btn>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const props = defineProps<{ portfolio: PortfolioType }>()
function visit(url: string) {
    window.open(url, "_blank")
}
const { name } = useDisplay()
</script>

<style scoped>
#image {
    -webkit-user-drag: none;
    user-select: none;
}

.underline:hover {
    cursor: pointer;
    text-decoration: underline;
    user-select: none;
}

.underline:active {
    color: #673AB7;
}
</style>