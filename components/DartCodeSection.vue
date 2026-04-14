<template>
  <section id="dartcode-ai" class="bg-white w-full section-padding py-14 lg:py-20" aria-labelledby="dartcode-heading">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-[1240px] mx-auto">
      <!-- Left Content -->
      <div class="flex flex-col items-start gap-10 justify-center w-full lg:w-[613px]">
        <!-- Header -->
        <div class="flex flex-col items-start gap-[18px] w-full">
          <div class="bg-accent-light rounded-full px-8 py-2.5">
            <span class="font-semibold text-sm text-accent capitalize text-center">Coming Soon</span>
          </div>

          <h2 id="dartcode-heading" class="font-semibold text-3xl sm:text-4xl lg:text-[48px] text-text-title leading-[1.32]">
            Be First to Power Your Features with DartCode AI
          </h2>

          <p class="font-normal text-base lg:text-xl text-text-muted leading-[1.5]">
            DartCode AI is the only AI built specifically for Dart feature flagging. It learns from your app's live usage, optimizes rollouts in real time, and safeguards every release
          </p>
        </div>

        <!-- Feature List -->
        <ul class="flex flex-col items-start gap-6" role="list">
          <li
            v-for="item in aiFeatures"
            :key="item.title"
            class="flex items-center gap-4"
          >
            <div class="flex items-center justify-center shrink-0" aria-hidden="true">
              <img src="/images/icon-check.svg" alt="" class="w-8 h-8 -scale-y-100" />
            </div>
            <div class="flex flex-col items-start gap-1 justify-center">
              <h3 class="font-semibold text-lg text-[#3f3f3f] leading-6">{{ item.title }}</h3>
              <p class="font-normal text-base text-text-light leading-[1.32]">{{ item.description }}</p>
            </div>
          </li>
        </ul>

        <!-- CTA Button -->
        <a href="#cta" class="btn-primary w-[210px]">Start for $1/mo</a>
      </div>

      <!-- Right - Dashboard Image -->
      <div class="bg-primary h-[400px] lg:h-[556px] overflow-hidden rounded-[10px] w-full lg:w-[570px] relative">
        <div class="absolute left-6 lg:left-10 top-6 lg:top-10 w-[120%] h-[90%]">
          <NuxtImg
            src="/images/dashboard.png"
            alt="IntelliToggle AI-powered dashboard"
            class="w-full h-full object-cover object-left-top"
            loading="lazy"
            format="webp"
            quality="80"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const aiFeatures = [
  {
    title: 'Predict Rollout Success',
    description: 'Forecast which users will adopt features fastest',
  },
  {
    title: 'Adapt Without Guesswork',
    description: 'Automatic rollout adjustments based on live results.',
  },
  {
    title: 'Prevent Costly Mistakes',
    description: 'Early anomaly detection and instant rollback cues',
  },
]
</script>
