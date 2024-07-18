<template>
    <v-container>
        <v-row class="mt-15">
            <v-col cols="6" class="pr-10">
                <div style="width: 210px" class=" mb-5">
                    <h1 class="text-center" style="z-index: 10;">Get in touch</h1>
                    <div style="height: 12px;width: 100%;z-index: 5"
                        class="bg-deep-purple-lighten-2 mt-n3 rounded-pill">
                    </div>
                </div>
                <p class="mt-n2">Please contact me for job opportunities or questions. I am excited to join your team
                </p>
                <contact-form></contact-form>
            </v-col>
            <v-col cols="6">
                <nuxt-img class="w-100" src="/contact.svg"></nuxt-img>
                <div class="pt-15">
                    <div style="font-size: 17px;" class="text-deep-purple mb-4 d-flex align-center">
                        <v-icon>mdi-facebook</v-icon>
                        <span class="ml-2 font-weight-medium">
                            <a href="https://www.facebook.com/james.rei.3538"
                                class="text-deep-purple">https://www.facebook.com/james.rei.3538</a>
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
</template>

<script setup lang="ts">

</script>

<style scoped></style>