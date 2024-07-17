<template>
    <v-container class="d-flex flex-column align-center py-5">
        <img class="w-66" src="~/assets/404.svg" />
        <div class="d-flex justify-center mt-15" style="gap: 15px">
            <v-btn color="deep-purple" @click="$router.go(-1)" variant="flat" size="x-large" prepend-icon="mdi-arrow-left">Go back</v-btn>
            <v-btn color="deep-purple" @click="$router.push({name: 'index'})" variant="outlined" size="x-large" prepend-icon="mdi-home">Back to home</v-btn>
        </div>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>