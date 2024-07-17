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
  ogImage: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/350809737_202104772726649_132464225368296042_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFjgzxlXoYdqM6GtwhZsPSSZmtvsVwfMyhma2-xXB8zKLdRk_IK2OXBRTPX6tFv7i6kKT1BJ5aL1BVJ8GSIWS06&_nc_ohc=F2gPjIJnMGMQ7kNvgFBVLKJ&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYCX22RqU3VpDgew5vdQ8hud_YeKDZFNYwMqncHJj5gx4g&oe=669C0D48'
})
</script>
<style>
body{
  background-color: #ede7f6 !important;
}
</style>
