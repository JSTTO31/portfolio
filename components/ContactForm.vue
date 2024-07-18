<template>
    <v-form @submit.prevent="submit">
        <label for="name">Name</label>
        <v-text-field v-model="$v.name.$model" :error-messages="$v.name.$errors[0]?.$message.toString() || ''" color="deep-purple" single-line class="mt-2" id="name" label="name"
            variant="outlined" required></v-text-field>
        <label for="email">Email Address</label>
        <v-text-field v-model="$v.email.$model" :error-messages="$v.email.$errors[0]?.$message.toString() || ''" type="email" color="deep-purple" single-line class="mt-2" id="email" label="email address"
            variant="outlined" required></v-text-field>
        <label for="message">Message</label>
        <v-textarea v-model="$v.message.$model"  rows="5" color="deep-purple" single-line class="mt-2" id="message" label="message"
            variant="outlined"></v-textarea>
        <v-btn type="submit" :loading="loading" class="py-5 text-capitalize" block color="deep-purple">Submit</v-btn>
    </v-form>
    <v-dialog width="650" v-model="showDialog" :persistent="loading" @click:outside="onClickOutside">
        <v-card class="rounded-lg d-flex flex-column align-center py-15" height="490" v-if="!loading">
            <v-avatar size="200">
                <nuxt-img class="w-100" src="/sent.png"></nuxt-img>
            </v-avatar>
            <h1 class="mt-10">Appreciate Your Message</h1>
            <p>I appreciate your message and look forward to connecting with you soon</p>
        </v-card>
        <v-card class="rounded-lg d-flex flex-column align-center justify-center py-15" height="490" v-else> 
            <v-progress-circular indeterminate size="200" width="8" color="deep-purple"></v-progress-circular>
            <h1 class="mt-10">Please Wait...</h1>
            <p>Please wait as the email from my portfolio may take a moment to send.</p>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
const emits = defineEmits(['success'])
const router = useRouter()
const showDialog = ref(false)
const form = reactive({
    name: '',
    email: '',
    message: '',
})

const rules = {
    name: {required},
    email: {required, email},
    message: {}
}

const $v = useVuelidate(rules, form)

const loading = ref(false)

async function submit(){
    if($v.value.$invalid) return $v.value.$touch();
    loading.value = true
    showDialog.value = true
    await useFetch("https://formsubmit.co/25494812c1d7e6c3649ce9c1312f036c",{
        method: 'POST',
        body: form,
        onResponse(){
            $v.value.$reset();
        }
    })
    loading.value = false

}

function onClickOutside(){
    if(!loading.value){
        emits('success')
    }
}
</script>

<style scoped>

</style>