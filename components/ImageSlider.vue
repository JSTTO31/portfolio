<template>
    <div class="w-100">
        <v-card style="overflow: hidden" class="bg-transparent" flat>
            <v-card class="slider-container bg-transparent" flat>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-vuejs</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-nuxt</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-react</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-laravel</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-nodejs</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-vuetify</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-bootstrap</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-tailwind</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-vuejs</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-nuxt</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-react</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-laravel</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-nodejs</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-vuetify</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-bootstrap</v-icon>
                <v-icon class="mx-5 mx-md-15" size="60" color="grey-darken-1">mdi-tailwind</v-icon>
            </v-card>
        </v-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.slider-container{
    overflow-x: scroll;
    background-color: transparent;
    display: flex;
    gap: 15px;
    perspective: 100px;
    overflow: visible;
    animation: scroll 45s linear infinite;
}

@media only screen and (min-width: 768px)  {
    .slider-container{
        overflow-x: scroll;
        background-color: transparent;
        display: flex;
        gap: 15px;
        perspective: 100px;
        overflow: visible;
        animation: scroll 30s linear infinite;
    }
}


@keyframes scroll {
    0%{
        transform: translateX(0);
    }

    100%{
        transform: translateX(calc(-60px * 25));
    }
}
</style>