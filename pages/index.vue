<template>
    <v-main class="bg-deep-purple-lighten-5 pb-15" id="main">
        <home-section></home-section>
        <about-me-section></about-me-section>
        <service-section></service-section>
        <project-section></project-section>
        <skill-section></skill-section>
        <training-certificate-section></training-certificate-section>
        <contact-section></contact-section>
        <v-dialog fullscreen :model-value="$route.name == 'index-id'" persistent no-click-animation
            @click:outside="$router.push({ name: 'index' })">
            <v-card class="rounded-0">
                <nuxt-page></nuxt-page>
                <v-btn color="grey-darken-4" icon="mdi-close" style="position: absolute;top: 15px;right: 15px"
                    @click="$router.push({ name: 'index' })" size="large"></v-btn>
            </v-card>
        </v-dialog>
        <transition name="pop-up">
            <v-btn v-if="showUp" @click="goUp" id="up-btn" size="x-large" color="deep-purple" icon="mdi-chevron-up"></v-btn>
        </transition>
    </v-main>
    <v-footer class="bg-grey-darken-4">
        <v-container class="d-flex align-center">
            <div class="d-flex" style="user-select: none;">
                <v-avatar class="rounded-0 mr-2 mt-1" size="45"><v-img src="logo.png"></v-img></v-avatar>
                <h1 style="font-size: 35px" class="font-weight-bold text-white">JS.</h1>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex" style="gap: 5px">
                <v-btn variant="text" @click="goToSection('home')" class="text-capitalize font-weight-medium">Home</v-btn>
                <v-btn variant="text" @click="goToSection('about-me')" class="text-capitalize font-weight-medium">About me</v-btn>
                <v-btn variant="text" @click="goToSection('service')" class="text-capitalize font-weight-medium">Services</v-btn>
                <v-btn variant="text" @click="goToSection('project')" class="text-capitalize font-weight-medium">Portfolio</v-btn>
                <v-btn variant="text" @click="goToSection('skill')" class="text-capitalize font-weight-medium">Skills</v-btn>
                <v-btn variant="text" @click="goToSection('training')" class="text-capitalize font-weight-medium">Certificates</v-btn>
                <v-btn variant="text" @click="goToSection('contact')" class="text-capitalize font-weight-medium">Contact</v-btn>
            </div>
            <v-spacer></v-spacer>
            <v-icon @click="visit('https://github.com/JSTTO31')" class="ml-3" size="35">mdi-github</v-icon>
            <v-icon @click="visit('https://www.facebook.com/james.rei.3538')" class="ml-3" size="35" color="blue-darken-1 bg-white pa-0 rounded-circle">mdi-facebook</v-icon>
            <v-icon @click="visit('https://www.linkedin.com/in/joshua-sotto-b5a199288/')" class="ml-3" size="35" color="blue-darken-3 bg-white pa-0 rounded-lg">mdi-linkedin</v-icon>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
const showUp = ref(false)

function visit(url: string){
    window.open(url, "_blank")
}

function goUp(){
    window.scrollTo(0, 0)
}

function goToSection(id: string){
    const element = document.getElementById(id) as HTMLDivElement

    if(element){
        element.scrollIntoView({behavior: 'smooth'})
    }
}

onMounted(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 764){
            showUp.value = true
        }else{
            showUp.value = false

        }
    })
})
</script>

<style scoped>
body{
  scroll-behavior: smooth;

}


#main{
  scroll-behavior: smooth;

}

#up-btn{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.portfolio-card {
    z-index: 100;
    transition: .15s ease;
}

.portfolio-card:hover {
    z-index: 150;
    transform: scale(1.01)
}


.pop-up-enter-active, 
.pop-up-leave-active{
    transition: .2s ease;
}

.pop-up-enter-from, 
.pop-up-leave-to{
    transform: scale(.2) rotate(180deg);
}


</style>