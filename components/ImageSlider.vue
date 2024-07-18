<template>
    <div class="w-100 py-15 mt-15">
        <v-card class="slider-container">
            <nuxt-img :src="`/my-images/${n}.jpg`" v-for="n in 7" class="rounded slider-item" />
            <nuxt-img :src="`/my-images/${n}.jpg`" v-for="n in 7" class="rounded slider-item" />
        </v-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.slider-container{
    height: 350px;
    overflow-x: scroll;
    background-color: transparent;
    display: flex;
    gap: 15px;
    perspective: 100px;
    overflow: visible;
    animation: scroll 40s linear infinite;
}

.slider-container:hover{
    animation-play-state: paused
}


.slider-item{
    width: 500px;
    transition: transform .25s ease;
    z-index: 20px;

}

.slider-item:hover{
    transform: scale(1.2);
    z-index: 100px;
}


@keyframes scroll {
    0%{
        transform: translateX(0);
    }

    100%{
        transform: translateX(calc(-500px * 7));
    }
}
</style>