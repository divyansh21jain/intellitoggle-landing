<template>
  <section
    class="relative w-full pt-10 lg:pt-20 section-padding flex flex-col items-center gap-10 lg:gap-16"
    :style="{ backgroundImage: heroBgGradient }"
    aria-labelledby="hero-heading"
  >
    <!-- Header -->
    <AppHeader />

    <!-- Hero Content -->
    <div class="fade-in-up flex flex-col items-center gap-6 w-full">
      <h1
        id="hero-heading"
        class="font-bold text-3xl sm:text-4xl lg:text-[64px] text-primary text-center leading-tight lg:leading-[84px]"
      >
        The First Dart-Native<br />
        Feature Flag &amp; DartCodeAI
      </h1>

      <p class="font-normal text-base sm:text-lg lg:text-2xl text-primary text-center leading-snug max-w-[841px]">
        Ship faster, control rollouts, and get ready for AI-powered delivery,
        starting at just $1/month for a limited time
      </p>

      <div class="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
        <a href="#cta" class="btn-primary whitespace-nowrap">Start for $1/mo</a>
        <a href="#dartcode-ai" class="btn-secondary whitespace-nowrap">Join AI Early Access</a>
      </div>
    </div>

    <!-- Dashboard Preview -->
    <div class="fade-in-up relative w-full max-w-[964px] rounded-t-2xl overflow-hidden shadow-dashboard bg-gradient-to-b from-primary to-primary-dark pt-4 sm:pt-6 px-4 sm:px-6" style="transition-delay: 0.2s">
      <div class="w-full overflow-hidden rounded-t-sm">
        <NuxtImg
          src="/images/dashboard.png"
          alt="IntelliToggle Dashboard — feature flag management interface"
          class="w-full h-auto"
          loading="eager"
          format="webp"
          quality="85"
        />
      </div>
    </div>

    <!-- Floating Card Left - Create Project (desktop only) -->
    <div class="hidden xl:block absolute left-[6.6%] top-[66%] w-[283px] bg-[#514b88] rounded-[10px] overflow-hidden p-2 shadow-lg">
      <div class="bg-white backdrop-blur-[12px] rounded-sm border border-[#dbdbdb] p-3 flex flex-col gap-2">
        <div class="flex items-center justify-center gap-1">
          <img src="/images/logo-icon.svg" alt="" class="h-3.5 w-3.5" aria-hidden="true" />
          <span class="font-merriweather font-bold text-[5px] text-primary">IntelliToggle</span>
        </div>
        <p class="text-[7px] font-medium text-black text-center capitalize font-inter">
          🎉 Let's Start By Creating Your first Project 🎉
        </p>
        <div class="flex flex-col gap-2">
          <div>
            <label class="text-[5px] font-medium text-gray-900 font-inter">Project name <span class="text-red-500">*</span></label>
            <div class="border border-gray-200 rounded-sm px-1 py-1 mt-0.5 bg-white">
              <span class="text-[5px] font-medium text-black font-inter">Project 1</span>
            </div>
          </div>
          <div>
            <label class="text-[5px] font-medium text-gray-900 font-inter">Environment Setup <span class="text-red-500">*</span></label>
            <div class="border border-gray-200 rounded-sm px-1 py-1 mt-0.5 flex items-center justify-between bg-white">
              <span class="text-[5px] font-medium text-black font-inter">Prod</span>
              <svg class="w-[7px] h-[7px] text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <div>
            <label class="text-[5px] font-medium text-gray-900 font-inter">Description</label>
            <div class="border border-gray-200 rounded px-1 py-1 mt-0.5 h-[49px] bg-white">
              <span class="text-[5px] text-gray-400 font-inter">Message...</span>
            </div>
          </div>
          <button class="bg-[#42489e] text-white text-[5px] font-medium font-inter rounded h-[17px] w-full flex items-center justify-center">
            Create
          </button>
        </div>
      </div>
    </div>

    <!-- Floating Card Right - Create Flag (desktop only) -->
    <div class="hidden xl:block absolute right-[18%] top-[62%] bg-gradient-to-b from-primary to-[#848ae4] rounded-[10px] overflow-hidden p-3 shadow-lg">
      <div class="flex flex-col gap-4 w-[199px]">
        <button class="flex items-center justify-center gap-1 h-[43px] bg-[#f5f7fa] border border-primary rounded-lg px-2 w-full hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
          <img src="/images/icon-ai.svg" alt="" class="w-[26px] h-[26px]" aria-hidden="true" />
          <span class="font-medium text-[15px] text-primary whitespace-nowrap">Generate Flag with AI</span>
        </button>
        <button class="flex items-center justify-center gap-1 h-10 bg-[#42489e] rounded-lg shadow-sm px-2 w-full hover:bg-[#4a50b0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
          <img src="/images/icon-elements.svg" alt="" class="w-5 h-5" aria-hidden="true" />
          <span class="font-inter font-medium text-sm text-white whitespace-nowrap">Create Flag</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroBgGradient = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1440 1121' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='0.2'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4.4087e-15 56.05 -72 3.4321e-15 720 560.5)'><stop stop-color='rgba(242,241,254,1)' offset='0'/><stop stop-color='rgba(196,191,249,1)' offset='0.25'/><stop stop-color='rgba(151,141,244,1)' offset='0.5'/><stop stop-color='rgba(105,91,240,1)' offset='0.75'/><stop stop-color='rgba(82,66,237,1)' offset='0.875'/><stop stop-color='rgba(60,41,235,1)' offset='1'/></radialGradient></defs></svg>")`
</script>
