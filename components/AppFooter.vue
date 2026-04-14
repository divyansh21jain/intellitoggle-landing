<template>
  <footer class="bg-[#e6e7f3] w-full section-padding py-12 lg:py-[63px]" role="contentinfo">
    <div class="max-w-[1240px] mx-auto">
      <div class="flex flex-col lg:flex-row items-start gap-10 lg:gap-[88px]">
        <!-- Brand Column -->
        <div class="flex flex-col items-start gap-2.5 w-full lg:w-[359px] shrink-0">
          <a href="#" class="flex items-center" aria-label="IntelliToggle home">
            <img src="/images/logo-footer.svg" alt="" class="h-[42px] w-[45px]" aria-hidden="true" />
            <span class="font-merriweather font-bold text-xl bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-transparent">
              IntelliToggle
            </span>
          </a>
          <div class="py-2.5">
            <p class="font-light text-base lg:text-lg text-[#263238] opacity-90 leading-6 max-w-[359px]">
              Intelli Toggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
            </p>
          </div>
          <a href="#" aria-label="IntelliToggle on GitHub" class="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">
            <img src="/images/icon-github.svg" alt="" class="w-[30px] h-[30px]" aria-hidden="true" />
          </a>
        </div>

        <!-- Links -->
        <div class="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-[86px] text-[#263238]">
          <!-- Company -->
          <nav class="flex flex-col items-start gap-4" aria-label="Company links">
            <h3 class="font-semibold text-lg leading-5">Company</h3>
            <ul class="flex flex-col items-start gap-3 font-light text-base leading-6" role="list">
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">Pricing</a></li>
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">Doc</a></li>
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">About Us</a></li>
            </ul>
          </nav>

          <!-- Resources -->
          <nav class="flex flex-col items-start gap-4" aria-label="Resources links">
            <h3 class="font-semibold text-lg leading-5">Resources</h3>
            <ul class="flex flex-col items-start gap-3 font-light text-base leading-6" role="list">
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">Why IntelliToggle is different</a></li>
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">Customer Support</a></li>
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">Terms &amp; conditions</a></li>
              <li><a href="#" class="hover:text-primary transition-colors focus:outline-none focus:underline">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col items-start gap-6 lg:gap-[27px] w-full sm:w-auto">
          <h3 class="font-semibold text-[15px] text-[#263238] leading-none">
            Subscribe to Newsletter
          </h3>
          <form class="relative w-full sm:w-[322px] h-[46px]" @submit.prevent="handleSubscribe" aria-label="Newsletter subscription">
            <label for="newsletter-email" class="sr-only">Email address</label>
            <input
              id="newsletter-email"
              v-model="email"
              type="email"
              required
              placeholder="Enter email address"
              class="w-full h-full rounded-lg bg-white pl-4 pr-[120px] text-xs text-gray-900 placeholder-[#8a8a8a] font-inter outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              class="absolute right-0 top-0 h-full w-[116px] bg-primary rounded-r-lg text-sm font-inter font-bold text-[#fafafa] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')

function handleSubscribe() {
  if (email.value) {
    email.value = ''
  }
}
</script>
