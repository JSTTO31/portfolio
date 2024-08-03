<template>
     <v-container class="py-15" id="project">
            <div class="w-100 d-flex justify-center flex-column align-center">
                <div style="width: 800px" class="d-none d-md-block">
                    <h1 class="text-center" style="z-index: 10;">My Journey Through Web Development Excellence</h1>
                    <div style="height: 12px;width: 100%;z-index: 5"
                        class="bg-deep-purple-lighten-2 mt-n3 rounded-pill"></div>
                </div>
                <div style="width: 380px" class="d-block d-md-none">
                    <h2 class="text-center" style="z-index: 10;">My Web Development Journey</h2>
                    <div style="height: 10px;width: 100%;z-index: 5"
                        class="bg-deep-purple-lighten-2 mt-n2 rounded-pill"></div>
                </div>
                <p style="font-size: 17px;" class="mt-3 font-weight-medium text-center">Explore my projects, showcasing my journey
                    as an aspiring full-stack developer.</p>
            </div>
            <v-row class="mt-15">
                <v-col cols="12" md="6" v-for="portfolio in portfolios.slice(0,show)" :key="portfolio.id">
                    <portfolio-card-item :portfolio="portfolio"></portfolio-card-item>
                </v-col>
            </v-row>
            <div class="d-flex justify-center">
                <v-btn color="deep-purple" size="large" class="rounded-lg mt-15 font-weight-bold" @click="show = 13" v-if="show != 13" variant="outlined">Show More</v-btn>
            </div>
        </v-container>
</template>

<script setup lang="ts">
const portfolios = usePortfolioObject()
const show = ref(12)
</script>

<style scoped>

</style>