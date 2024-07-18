<template>
    <v-container class="py-15">
        <div class="w-100 d-flex justify-center flex-column align-center">
            <div style="width: 230px" class="">
                <h1 class="text-center" style="z-index: 10;">What I Can Do</h1>
                <div style="height: 12px;width: 100%;z-index: 5" class="bg-deep-purple-lighten-2 mt-n3 rounded-pill">
                </div>
            </div>
            <p style="font-size: 17px;" class="mt-3 font-weight-medium">Explore My Skills and Services in Web
                Development</p>
        </div>
        <v-row class="mt-15">
            <v-col cols="6" v-for="service in services" :key="service.title">
                  <v-card style="user-select: none"
                      :style="{ borderLeft: '5px solid #673AB7' }"
                      class="rounded-lg pa-5 rounded-lg" height="250">
                      <v-avatar size="50" class="rounded-0 mb-4">
                          <nuxt-img class="w-100" :src="service.icon + '.png'"></nuxt-img>
                      </v-avatar>
                      <h2 class="mb-3">{{ service.title }}</h2>
                      <p>{{ service.sentence }}</p>
                  </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Website Development",
    sentence: "I specialize in crafting modern, user-friendly websites that are not only visually appealing but also tailored to meet your specific business objectives and enhance your online presence.",
    icon: "/icons/website",
  },
  {
    title: "Web Application Development",
    sentence: "I excel in building robust web applications that go beyond aesthetics to deliver exceptional user experiences and functionality, ensuring seamless operation and scalability.",
    icon: "/icons/webapp",
  },
  {
    title: "Responsive Design",
    sentence: "With a focus on responsive design, I ensure that your website or application not only looks stunning on any device but also maintains optimal functionality and usability across various screen sizes and platforms.",
    icon: "/icons/responsive",
  },
  {
    title: "API Integration",
    sentence: "I leverage API integration to enhance your website or application by seamlessly incorporating powerful third-party services and functionalities, providing your users with a richer and more interactive experience.",
    icon: "/icons/api",
  }
];
</script>

<style scoped></style>