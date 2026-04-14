<template>
  <nav class="flex items-center justify-between w-full" role="navigation" aria-label="Main navigation">
    <!-- Logo -->
    <a href="#" class="flex items-center" aria-label="IntelliToggle home">
      <img src="/images/logo-icon.svg" alt="" class="h-10 w-11 lg:h-[51px] lg:w-[55px]" aria-hidden="true" />
      <span class="font-merriweather font-bold text-xl lg:text-2xl bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-transparent">
        IntelliToggle
      </span>
    </a>

    <!-- Desktop CTA -->
    <a
      href="#cta"
      class="hidden sm:flex items-center justify-center bg-primary text-white font-bold text-lg lg:text-xl rounded-[5px] shadow-btn px-6 lg:px-9 h-12 lg:h-[55px] whitespace-nowrap hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      Get Started
    </a>

    <!-- Mobile Menu Button -->
    <button
      class="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
      :aria-expanded="mobileOpen"
      aria-controls="mobile-menu"
      aria-label="Toggle navigation menu"
      @click="mobileOpen = !mobileOpen"
    >
      <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="mobileOpen"
        id="mobile-menu"
        class="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-5 flex flex-col gap-3 sm:hidden"
        role="menu"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
          role="menuitem"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#cta"
          class="block w-full rounded-lg bg-primary px-5 py-3 text-center font-bold text-white mt-2"
          @click="mobileOpen = false"
        >
          Get Started
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'DartCode AI', href: '#dartcode-ai' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#cta' },
]
</script>
