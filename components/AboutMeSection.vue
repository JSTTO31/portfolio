<template>
    <div>
        <v-container id="about-me" class="py-15 pt-0 d-flex d-block flex-column-reverse flex-md-row">
            <v-row class="mt-15">
                <v-col cols="12" lg="7" class="px-5 pl-lg-0 pr-lg-15">
                    <div class="d-flex justify-center d-lg-block mb-5 mb-lg-0">
                        <div style="width: 250px" class="mb-5">
                            <h1 class="text-center" style="z-index: 10;">Get to know me</h1>
                            <div style="height: 12px;width: 100%;z-index: 5"
                                class="bg-deep-purple-lighten-2 mt-n3 rounded-pill">
                            </div>
                        </div>
                    </div>
                    <p :style="name == 'sm' || name == 'xs' ? 'font-size: 17px' : 'font-size: 20px;line-height: 40px'" class="text-justify">👋 Hi, I'm Joshua Sotto, an
                        aspiring
                        full-stack developer with a passion for creating dynamic and responsive web applications. I
                        recently
                        graduated in June 2024 from Arellano University, Jose Rizal Campus. During my internship at
                        Inventive Media, I developed several impactful projects, including an attendance system, the
                        Questify app for mock exams and icebreakers, and the Eventons event management platform. My work
                        reflects a commitment to combining innovative solutions with user-friendly design.</p><br>
                    <p :style="name == 'sm' || name == 'xs' ? 'font-size: 17px' : 'font-size: 20px;line-height: 40px'" class="text-justify">Additionally, my third-year
                        project,
                        Canteen Kiosk, demonstrated my ability to address real-world challenges by streamlining food
                        ordering processes during the pandemic. In my fourth year, I developed Efficiently, a
                        productivity
                        app, and Arellano Connect, a platform to strengthen alumni connections, which won first
                        runner-up in
                        the Arellano Research Colloquium 2024. I am dedicated to continuous learning and growth, always
                        eager to take on new challenges and enhance my skills in both frontend and backend development.
                        💻✨
                    </p>
                </v-col>
                <v-col cols="12" lg="5" class="d-md-flex d-block d-lg-block" style="gap: 55px">
                    <v-card class="pa-3 w-100 w-md-50 w-lg-100 rounded-lg mt-15" style="transform: rotate(-10deg)">
                        <nuxt-img class="w-100" src="/grad-pic.jpg"></nuxt-img>
                    </v-card>
                    <v-card class="pa-3 w-100 w-md-50 w-lg-100 rounded-lg mt-15" style="transform: rotate(-10deg)">
                        <nuxt-img class="w-100" src="/grad-pic-2.jpg"></nuxt-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- <image-slider></image-slider> -->

    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
const {name} = useDisplay()
</script>

<style scoped></style>