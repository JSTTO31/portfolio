<template>
    <v-container class="pa-0 d-flex h-100" fluid>
        <v-col cols="12" class=" h-100 pa-0">
            <v-carousel show-arrows="hover" cycle progress="deep-purple" class="h-100 pt-1  bg-grey-darken-4 border"
                hide-delimiters>
                <v-carousel-item class="" v-for="image in portfolio.images_count" arr :key="image"
                    :src="portfolio.location + `/${image}.png`" cover>
                </v-carousel-item>
                <template v-slot:prev="{ props }">
                    <v-card variant="text"  flat class="pa-2 h-100 ml-n5 rounded-0 mx-0 d-flex align-center bg-transparent px-5" @click="props.onClick">
                        <v-icon size="55" color="black">mdi-chevron-left</v-icon>
                    </v-card>
                </template>
                <template v-slot:next="{ props }">
                    <v-card variant="text" flat class="pa-2 h-100 mr-n5 rounded-0 mx-0 d-flex align-center bg-transparent px-5" @click="props.onClick">
                        <v-icon size="55" color="black">mdi-chevron-right</v-icon>
                    </v-card>
                </template>
            </v-carousel>
        </v-col>
    </v-container>
</template>

<script setup lang="ts">
import type { PortfolioType } from '~/composables/usePortfolioObject';
const route = useRoute()
definePageMeta({
    validate: async (route) => {
        const portfolio = usePortfolioObject().find(item => item.id == route.params.id)
        return !!portfolio
    }
})

const portfolio = usePortfolioObject().find(item => item.id == route.params.id) as PortfolioType

useSeoMeta({
    title: portfolio.title,
    ogTitle: portfolio.title,
    description: portfolio.paragraph,
    ogDescription: portfolio.paragraph,
})
</script>

<style scoped>
.carousel-image {
    position: absolute;
    width: 100%;
    /* top: 50%;
    transform: translateY(-50%) scale(1.2); */
}
</style>