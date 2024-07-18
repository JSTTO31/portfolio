<template>
    <v-container class="" id="home">
        <div class="d-flex align-center">
            <div class="d-flex" style="user-select: none;">
                <v-avatar class="rounded-0 mr-2 mt-1" size="35"><nuxt-img class="w-100" src="logo.png"></nuxt-img></v-avatar>
                <h1 class="font-weight-bold text-grey-darken-4">JS.</h1>
            </div>
            <v-spacer></v-spacer>
            <v-tabs class="d-none d-lg-block">
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
                        <v-btn class="text-capitalize d-none d-lg-flex" v-bind="activator" variant="outlined" prepend-icon="mdi-email" color="black">Send message</v-btn>
                </template>
                <template #default="{isActive}">
                    <v-card class="pa-10 rounded-lg">
                        <h2 class="mb-5">Send message</h2>
                        <contact-form @success="isActive.value = false"></contact-form>
                    </v-card>
                </template>
            </v-dialog>
            <v-btn @click="showMenu = true" icon="mdi-menu" variant="text" size="large" class="rounded-lg border d-block d-lg-none"></v-btn>

        </div>
        <v-row style="padding-block: 100px;">
            <v-col cols="12" lg="7" class="d-flex d-lg-block justify-center flex-column">
                <h1 style="font-size: 45px" class="text-center text-md-left">Aspiring Fullstack Developer</h1>
                <p style="font-size: 20px;" class="text-center text-md-left">
                    👋 Hi, I'm Joshua Sotto, an ambitious web developer passionate about frontend and backend
                    development. 💻✨
                </p>
                <div class="pt-5 d-flex mx-auto" style="gap: 15px">
                    <v-icon @click="visit('https://github.com/JSTTO31')" size="45">mdi-github</v-icon>
                    <v-icon @click="visit('https://www.facebook.com/james.rei.3538')" size="45" color="blue-darken-1">mdi-facebook</v-icon>
                    <v-icon @click="visit('https://www.linkedin.com/in/joshua-sotto-b5a199288/')" size="45" color="blue-darken-3">mdi-linkedin</v-icon>
                </div>
                <v-btn class="text-capitalize mt-5 rounded-lg" color="deep-purple" size="large"
                    prepend-icon="mdi-download" @click="download">Download My CV</v-btn>
                <a id="download" href="/resume.pdf" download style="visibility: hidden"></a>
            </v-col>
            <v-col cols="12" lg="5" class="d-lg-flex justify-center d-none">
                <v-avatar size="400" class="bg-deep-purple pt-10 px-5">
                    <nuxt-img class="w-100" src="profile-image.png"></nuxt-img>
                </v-avatar>
            </v-col>
        </v-row>
    </v-container>
    <image-slider></image-slider>
    <v-navigation-drawer location="right" v-model="showMenu" v-if="showMenu">
        <v-list class="pt-15">
            <v-list-item class="text-h5 mt-10 pa-5 mb-2"  @click="goToSection('home')">Home</v-list-item>
            <v-list-item class="text-h5 pa-5 mb-2"  @click="goToSection('about-me')">About me</v-list-item>
            <v-list-item class="text-h5 pa-5 mb-2"  @click="goToSection('service')">Services</v-list-item>
            <v-list-item class="text-h5 pa-5 mb-2"  @click="goToSection('project')">Portfolio</v-list-item>
            <v-list-item class="text-h5 pa-5 mb-2"  @click="goToSection('skill')">Skills</v-list-item>
            <v-list-item class="text-h5 pa-5 mb-2"  @click="goToSection('training')">Certificates</v-list-item>
            <v-list-item class="text-h5 pa-5 mb-2"  @click="goToSection('contact')">Contact</v-list-item>
        </v-list>
        <v-btn @click="showMenu = false" style="position: absolute;top: 25px;right: 25px" icon="mdi-close" size="x-large" variant="text"></v-btn>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
const showMenu = ref(false)

function visit(url: string){
    window.open(url, "_blank")
}

function download(){
    const download = document.getElementById("download")

    if(download){
        download.click()
    }
}

function goToSection(id: string){
    const element = document.getElementById(id) as HTMLDivElement
    element.scrollIntoView({behavior: 'smooth'})

    if(element){
        element.scrollIntoView({behavior: 'smooth'})
    }
}
</script>

<style scoped></style>