<template>
  <section class="bg-white w-full section-padding py-14 lg:py-20" aria-label="Trusted by leading engineering teams">
    <div class="flex flex-col items-center gap-10 max-w-[1240px] mx-auto">
      <p class="font-inter font-normal text-sm lg:text-base text-primary leading-6 text-center">
        Trusted by various engineering teams
      </p>
      <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-[53px]">
        <img
          v-for="logo in logos"
          :key="logo.name"
          :src="logo.src"
          :alt="logo.name"
          class="h-10 sm:h-12 lg:h-[60px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  { name: 'Google Cloud', src: '/images/logo-google-cloud.svg' },
  { name: 'AWS', src: '/images/logo-aws.svg' },
  { name: 'Microsoft Azure', src: '/images/logo-azure.svg' },
  { name: 'DigitalOcean', src: '/images/logo-digitalocean.svg' },
  { name: 'IBM', src: '/images/logo-ibm.svg' },
]
</script>
