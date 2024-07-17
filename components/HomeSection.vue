<template>
    <v-container class="">
        <div class="d-flex align-center">
            <div class="d-flex">
                <v-avatar class="rounded-0 mr-2 mt-1" size="35"><v-img src="logo.png"></v-img></v-avatar>
                <h1 class="font-weight-bold text-grey-darken-4">JS.</h1>
            </div>
            <v-spacer></v-spacer>
            <v-tabs>
                <v-tab slider-color="deep-purple" class="text-capitalize font-weight-medium">Home</v-tab>
                <v-tab slider-color="deep-purple" class="text-capitalize font-weight-medium">Services</v-tab>
                <v-tab slider-color="deep-purple" class="text-capitalize font-weight-medium">Portfolios</v-tab>
                <v-tab slider-color="deep-purple" class="text-capitalize font-weight-medium">About me</v-tab>
                <v-tab slider-color="deep-purple" class="text-capitalize font-weight-medium">Skills</v-tab>
                <v-tab slider-color="deep-purple" class="text-capitalize font-weight-medium">Testimonials</v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <v-btn class="text-capitalize" color="deep-purple">Contact me</v-btn>
        </div>
        <v-row class="" style="padding-block: 100px;">
            <v-col cols="7">
                <h1 style="font-size: 45px">Aspiring Fullstack Developer</h1>
                <p style="font-size: 20px;">
                    👋 Hi, I'm Joshua Sotto, an ambitious web developer passionate about frontend and backend
                    development. 💻✨
                </p>
                <div class="pt-5 d-flex " style="gap: 15px">
                    <v-icon size="45">mdi-github</v-icon>
                    <v-icon size="45" color="blue-darken-1">mdi-facebook</v-icon>
                    <v-icon size="45" color="blue-darken-3">mdi-linkedin</v-icon>
                </div>
                <v-btn class="text-capitalize mt-5 rounded-lg" color="deep-purple" size="large"
                    prepend-icon="mdi-download">Download my CV</v-btn>
            </v-col>
            <v-col cols="5" class="d-flex justify-center">
                <v-avatar size="400" class="bg-deep-purple ">
                    <v-img src="profile-image.png"></v-img>
                </v-avatar>
            </v-col>
        </v-row>
    </v-container>
    <marquee>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-vuejs</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-nuxt</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-react</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-laravel</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-nodejs</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-vuetify</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-bootstrap</v-icon>
        <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-tailwind</v-icon>
    </marquee>
</template>

<script setup lang="ts">

</script>

<style scoped></style>