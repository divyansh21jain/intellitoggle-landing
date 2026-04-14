<template>
  <section id="cta" class="w-full section-padding py-14 lg:py-20" aria-labelledby="cta-heading">
    <div class="max-w-[1240px] mx-auto">
      <!-- CTA Card -->
      <div class="relative w-full rounded-2xl lg:rounded-[20px] overflow-hidden min-h-[300px] lg:min-h-[375px]">
        <!-- Background Gradient -->
        <div class="absolute inset-0" :style="{ backgroundImage: ctaBgGradient }" />

        <!-- Texture Overlay -->
        <div
          class="absolute inset-0 mix-blend-overlay opacity-35 pointer-events-none"
          :style="{ backgroundImage: 'url(/images/texture.png)', backgroundSize: '106px 106px' }"
          aria-hidden="true"
        />

        <!-- Content -->
        <div class="relative flex flex-col items-center gap-8 lg:gap-12 py-12 lg:py-[73px] px-6 lg:px-[174px]">
          <div class="flex flex-col items-center justify-center gap-3 text-center max-w-[891px]">
            <h2 id="cta-heading" class="font-medium text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.2]">
              Launch Features Confidently With AI Driven Flags
            </h2>
            <p class="font-normal text-sm lg:text-lg text-[#fafafa] opacity-90 leading-[1.32] max-w-[784px]">
              Start for free, scale as your team grows
            </p>
          </div>
          <div class="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <a
              href="#"
              class="flex items-center justify-center bg-accent text-primary font-bold text-base sm:text-xl rounded-[5px] shadow-btn h-12 sm:h-[55px] px-6 sm:px-9 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Start for $1/mo
            </a>
            <a
              href="#"
              class="flex items-center justify-center border border-[rgba(255,153,170,0.44)] font-bold text-base sm:text-xl text-accent rounded-[5px] shadow-btn h-12 sm:h-[55px] px-6 sm:px-9 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              Join AI Early Access
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const ctaBgGradient = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1243 375' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(62.15 0 0 18.75 621.5 187.5)'><stop stop-color='rgba(111,102,194,1)' offset='0'/><stop stop-color='rgba(89,79,176,1)' offset='0.5'/><stop stop-color='rgba(66,56,158,1)' offset='1'/></radialGradient></defs></svg>")`
</script>
