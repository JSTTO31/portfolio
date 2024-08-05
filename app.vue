<template>
  <v-app >
    <NuxtPage></NuxtPage>
  </v-app>
</template>
<script setup lang="ts">
useHead({
  link: [
    {rel: 'icon', type: 'image/x-icon', href: 'logo.png'}
  ]
})
useSeoMeta({
  title: 'Joshua Sotto Portfolio',
  ogTitle: 'Joshua Sotto Portfolio',
  description: 'Explore the portfolio of Joshua Sotto, an aspiring full-stack developer passionate about creating dynamic and responsive web applications.',
  ogDescription: 'Explore the portfolio of Joshua Sotto, an aspiring full-stack developer passionate about creating dynamic and responsive web applications.',
  ogImage: '/landing-page.jpg'
})
</script>
<style>
body{
  background-color: #ede7f6 !important;
}
</style>
