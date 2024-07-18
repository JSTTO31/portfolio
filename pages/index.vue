<template>
    <v-main class="bg-deep-purple-lighten-5 pb-15">
        <home-section></home-section>
        <about-me-section></about-me-section>
        <service-section></service-section>
        <project-section></project-section>
        <skill-section></skill-section>
        <training-certificate-section></training-certificate-section>
        <v-container>
            <v-row class="mt-15">
                <v-col cols="6" class="pr-10">
                    <div style="width: 210px" class=" mb-5">
                        <h1 class="text-center" style="z-index: 10;">Get in touch</h1>
                        <div style="height: 12px;width: 100%;z-index: 5"
                            class="bg-deep-purple-lighten-2 mt-n3 rounded-pill">
                        </div>
                    </div>
                    <p class="mt-n2">Please contact me for job opportunities or questions. I am excited to join your team</p>
                    <v-form class="mt-10">
                        <label for="name">Name</label>
                        <v-text-field color="deep-purple" single-line class="mt-2" id="name" label="name" variant="outlined"></v-text-field>
                        <label for="email">Email Address</label>
                        <v-text-field color="deep-purple" single-line class="mt-2" id="email" label="email address" variant="outlined"></v-text-field>
                        <label for="message">Message</label>
                        <v-textarea rows="5" color="deep-purple" single-line class="mt-2" id="message" label="message" variant="outlined"></v-textarea>
                        <v-btn class="py-5 text-capitalize" block color="deep-purple">Submit</v-btn>
                    </v-form>
                </v-col>
                <v-col cols="6">
                    <v-img src="/contact.svg"></v-img>
                    <div class="pt-15">
                        <div style="font-size: 17px;" class="text-deep-purple mb-4 d-flex align-center">
                            <v-icon>mdi-facebook</v-icon>
                            <span class="ml-2 font-weight-medium">
                                <a href="https://www.facebook.com/james.rei.3538" class="text-deep-purple">https://www.facebook.com/james.rei.3538</a>
                            </span>
                        </div>
                        <div style="font-size: 17px;" class="text-deep-purple mb-4 d-flex align-center">
                            <v-icon>mdi-phone</v-icon>
                            <span class="ml-2 font-weight-medium">+63 992993 9021</span>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog fullscreen :model-value="$route.name == 'index-id'" persistent no-click-animation
            @click:outside="$router.push({ name: 'index' })">
            <v-card class="rounded-0">
                <nuxt-page></nuxt-page>
                <v-btn color="grey-darken-4" icon="mdi-close" style="position: absolute;top: 15px;right: 15px"
                    @click="$router.push({ name: 'index' })" size="large"></v-btn>
            </v-card>
        </v-dialog>
    </v-main>
    <v-footer class="bg-grey-darken-4">
        <v-container class="d-flex align-center">
            <div class="d-flex">
                <v-avatar class="rounded-0 mr-2 mt-1" size="45"><v-img src="logo.png"></v-img></v-avatar>
                <h1 style="font-size: 35px" class="font-weight-bold text-white">JS.</h1>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex" style="gap: 5px">
                <v-btn variant="text" class="text-capitalize font-weight-medium">Home</v-btn>
                <v-btn variant="text" class="text-capitalize font-weight-medium">Services</v-btn>
                <v-btn variant="text" class="text-capitalize font-weight-medium">Portfolios</v-btn>
                <v-btn variant="text" class="text-capitalize font-weight-medium">About me</v-btn>
                <v-btn variant="text" class="text-capitalize font-weight-medium">Skills</v-btn>
                <v-btn variant="text" class="text-capitalize font-weight-medium">Testimonials</v-btn>
            </div>
            <v-spacer></v-spacer>
            <v-icon class="ml-3" size="35">mdi-github</v-icon>
            <v-icon class="ml-3" size="35" color="blue-darken-1 bg-white pa-0 rounded-circle">mdi-facebook</v-icon>
            <v-icon class="ml-3" size="35" color="blue-darken-3 bg-white pa-0 rounded-lg">mdi-linkedin</v-icon>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">



</script>

<style scoped>
.portfolio-card {
    z-index: 100;
    transition: .15s ease;
}

.portfolio-card:hover {
    z-index: 150;
    transform: scale(1.01)
}
</style>