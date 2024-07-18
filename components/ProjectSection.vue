<template>
     <v-container class="py-15" id="project">
            <div class="w-100 d-flex justify-center flex-column align-center">
                <div style="width: 800px" class="">
                    <h1 class="text-center" style="z-index: 10;">My Journey Through Web Development Excellence</h1>
                    <div style="height: 12px;width: 100%;z-index: 5"
                        class="bg-deep-purple-lighten-2 mt-n3 rounded-pill"></div>
                </div>
                <p style="font-size: 17px;" class="mt-3 font-weight-medium">Explore my projects, showcasing my journey
                    as an aspiring full-stack developer.</p>
            </div>
            <v-row class="mt-15">
                <v-col cols="6" v-for="portfolio in portfolios" :key="portfolio.id">
                    <portfolio-card-item :portfolio="portfolio"></portfolio-card-item>
                </v-col>
            </v-row>
        </v-container>
</template>

<script setup lang="ts">
const portfolios = usePortfolioObject()
</script>

<style scoped>

</style>