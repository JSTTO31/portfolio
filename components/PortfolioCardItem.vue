<template>
    <v-card class="portfolio-card rounded-lg" @click="$router.push({ name: 'index-id', params: { id: portfolio.id } })">
        <v-img :src="portfolio.location + `/${portfolio.active_image}.png`"></v-img>
        <div class="pa-5">
            <h3 class="font-weight-bold">{{ portfolio.title }}</h3>
            <div class="mt-2 d-flex" style="gap: 5px">
                <v-icon size="30" v-for="icon in portfolio.icons" :key="icon">{{icon}}</v-icon>
            </div>
            <div class="mt-5 d-flex" style="gap: 5px">
                <v-btn prepend-icon="mdi-lock" color="primary" disabled flat class="rounded-lg text-capitalize"  v-if="portfolio.live_demo == 'private'">
                    Private
                </v-btn>
                <v-btn prepend-icon="mdi-chip" color="grey" disabled flat class="rounded-lg text-capitalize"  v-else-if="portfolio.live_demo == 'local'">
                    Local
                </v-btn>
                <v-btn v-else variant="flat" prepend-icon="mdi-open-in-new" class="rounded-lg text-capitalize"
                    color="deep-purple" @click.stop="visit(portfolio.live_demo)">Live
                    Demo</v-btn>
                <v-btn variant="flat" prepend-icon="mdi-github" class="rounded-lg text-capitalize"
                    @click.stop="visit(portfolio.source_frontend)" v-if="portfolio.source_frontend">Frontend Source</v-btn>
                <v-btn variant="flat" prepend-icon="mdi-github" class="rounded-lg text-capitalize"
                    @click.stop="visit(portfolio.source_backend)" v-if="portfolio.source_backend">Backend Source</v-btn>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{ portfolio: PortfolioType }>()
function visit(url: string){
    window.open(url, "_blank")
}
</script>

<style scoped></style>