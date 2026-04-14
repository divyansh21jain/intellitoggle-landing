<template>
  <div class="bg-[#fffdff] w-full">
    <HeroSection />
    <CountdownBanner />
    <TeamSection />
    <FeaturesSection />
    <DartCodeSection />
    <TrustedBySection />
    <TestimonialsSection />
    <CtaBanner />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useScrollAnimation()

useHead({
  title: 'IntelliToggle - The First Dart-Native Feature Flag & DartCodeAI',
  htmlAttrs: { lang: 'en' },
})
</script>
