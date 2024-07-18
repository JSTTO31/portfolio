<template>
    <div class="w-100">
        <v-card class="slider-container bg-transparent" flat>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-vuejs</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-nuxt</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-react</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-laravel</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-nodejs</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-vuetify</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-bootstrap</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-tailwind</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-vuejs</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-nuxt</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-react</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-laravel</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-nodejs</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-vuetify</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-bootstrap</v-icon>
            <v-icon class="mx-15" size="60" color="grey-darken-1">mdi-tailwind</v-icon>
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
    animation: scroll 40s linear infinite;
}

@keyframes scroll {
    0%{
        transform: translateX(0);
    }

    100%{
        transform: translateX(calc(-200px * 7));
    }
}
</style>