<template>
    <v-container class="" id="home">
        <div class="d-flex align-center">
            <div class="d-flex" style="user-select: none;">
                <v-avatar class="rounded-0 mr-2 mt-1" size="35"><nuxt-img class="w-100" src="logo.png"></nuxt-img></v-avatar>
                <h1 class="font-weight-bold text-grey-darken-4">JS.</h1>
            </div>
            <v-spacer></v-spacer>
            <v-tabs>
                <v-tab @click="goToSection('home')" slider-color="deep-purple" class="text-capitalize font-weight-medium">Home</v-tab>
                <v-tab @click="goToSection('about-me')" slider-color="deep-purple" class="text-capitalize font-weight-medium">About me</v-tab>
                <v-tab @click="goToSection('service')" slider-color="deep-purple" class="text-capitalize font-weight-medium">Services</v-tab>
                <v-tab @click="goToSection('project')" slider-color="deep-purple" class="text-capitalize font-weight-medium">Portfolio</v-tab>
                <v-tab @click="goToSection('skill')" slider-color="deep-purple" class="text-capitalize font-weight-medium">Skills</v-tab>
                <v-tab @click="goToSection('training')" slider-color="deep-purple" class="text-capitalize font-weight-medium">Certificates</v-tab>
                <v-tab @click="goToSection('contact')" slider-color="deep-purple" class="text-capitalize font-weight-medium">Contact</v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <v-dialog width="750">
                <template #activator="{props:activator}">
                        <v-btn class="text-capitalize" v-bind="activator" variant="outlined" prepend-icon="mdi-email" color="black">Send message</v-btn>
                </template>
                <template #default="{isActive}">
                    <v-card class="pa-10 rounded-lg">
                        <h2 class="mb-5">Send message</h2>
                        <contact-form @success="isActive.value = false"></contact-form>
                    </v-card>
                </template>
            </v-dialog>
        </div>
        <v-row style="padding-block: 100px;">
            <v-col cols="12" lg="7">
                <h1 style="font-size: 45px">Aspiring Fullstack Developer</h1>
                <p style="font-size: 20px;">
                    👋 Hi, I'm Joshua Sotto, an ambitious web developer passionate about frontend and backend
                    development. 💻✨
                </p>
                <div class="pt-5 d-flex " style="gap: 15px">
                    <v-icon @click="visit('https://github.com/JSTTO31')" size="45">mdi-github</v-icon>
                    <v-icon @click="visit('https://www.facebook.com/james.rei.3538')" size="45" color="blue-darken-1">mdi-facebook</v-icon>
                    <v-icon @click="visit('https://www.linkedin.com/in/joshua-sotto-b5a199288/')" size="45" color="blue-darken-3">mdi-linkedin</v-icon>
                </div>
                <v-btn class="text-capitalize mt-5 rounded-lg" color="deep-purple" size="large"
                    prepend-icon="mdi-download">Download my CV</v-btn>
            </v-col>
            <v-col cols="12" lg="5" class="d-flex justify-center">
                <v-avatar size="400" class="bg-deep-purple pt-10 px-5">
                    <nuxt-img class="w-100" src="profile-image.png"></nuxt-img>
                </v-avatar>
            </v-col>
        </v-row>
    </v-container>
    <image-slider></image-slider>
</template>

<script setup lang="ts">

function visit(url: string){
    window.open(url, "_blank")
}

function goToSection(id: string){
    const element = document.getElementById(id) as HTMLDivElement

    if(element){
        element.scrollIntoView({behavior: 'smooth'})
    }
}
</script>

<style scoped></style>