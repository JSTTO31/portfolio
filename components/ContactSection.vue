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
                <v-form class="mt-10" @submit.prevent="submit">
                    <label for="name">Name</label>
                    <v-text-field v-model="form.name" color="deep-purple" single-line class="mt-2" id="name" label="name"
                        variant="outlined" required></v-text-field>
                    <label for="email">Email Address</label>
                    <v-text-field v-model="form.email" type="email" color="deep-purple" single-line class="mt-2" id="email" label="email address"
                        variant="outlined" required></v-text-field>
                    <label for="message">Message</label>
                    <v-textarea v-model="form.message" rows="5" color="deep-purple" single-line class="mt-2" id="message" label="message"
                        variant="outlined"></v-textarea>
                    <v-btn type="submit" class="py-5 text-capitalize" block color="deep-purple">Submit</v-btn>
                </v-form>
            </v-col>
            <v-col cols="6">
                <v-img src="/contact.svg"></v-img>
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
const form = reactive({
    name: '',
    email: '',
    message: '',
})




async function submit(){
    console.log('triggered');
    
}
</script>

<style scoped></style>