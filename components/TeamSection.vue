<template>
  <section class="w-full section-padding py-14 lg:py-20" aria-labelledby="team-heading">
    <div class="flex flex-col items-center gap-10 lg:gap-16 max-w-[1240px] mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-[18px] text-center text-text-title max-w-[868px]">
        <h2 id="team-heading" class="font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-none w-full">
          Built For Every Team
        </h2>
        <p class="font-normal text-base lg:text-xl leading-[1.5] w-full">
          Whether you're shipping code, managing products, or driving growth
        </p>
      </div>

      <!-- Team Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        <article
          v-for="card in teamCards"
          :key="card.title"
          class="bg-white flex flex-col items-center justify-center gap-4 h-auto lg:h-[342px] rounded-lg shadow-card p-6 lg:p-8 transition-transform duration-300 hover:-translate-y-1"
        >
          <div class="bg-primary-100 rounded-2xl overflow-hidden w-16 h-16 lg:w-[85px] lg:h-[85px] flex items-center justify-center" aria-hidden="true">
            <img :src="card.icon" :alt="''" class="w-10 h-10 lg:w-[51px] lg:h-[51px]" />
          </div>
          <h3 class="font-semibold text-xl lg:text-[28px] text-center leading-[1.5] text-black">
            {{ card.title }}
          </h3>
          <p class="font-medium text-base lg:text-lg text-center text-text-dark leading-normal max-w-[325px]">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamCards = [
  {
    title: 'Developers',
    description: 'Safely deploy and control feature rollouts with zero-downtime toggles.',
    icon: '/images/icon-users.svg',
  },
  {
    title: 'Product Managers',
    description: 'Run experiments, manage rollouts, and launch features on your terms.',
    icon: '/images/icon-users.svg',
  },
  {
    title: 'Enterprises',
    description: 'Secure, compliant, and scalable toggle management built with Dart reliability.',
    icon: '/images/icon-users.svg',
  },
]
</script>
