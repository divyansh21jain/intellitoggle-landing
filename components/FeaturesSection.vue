<template>
  <section id="features" class="w-full section-padding py-14 lg:py-20" aria-labelledby="features-heading">
    <div class="flex flex-col items-center gap-10 lg:gap-16 max-w-[1240px] mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-[18px] text-center text-text-title max-w-[868px]">
        <h2 id="features-heading" class="font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-none w-full">
          Powerful Features, Simplified
        </h2>
        <p class="font-normal text-base lg:text-xl leading-[1.5] w-full">
          AI-driven intelligence meets developer-friendly simplicity
        </p>
      </div>

      <!-- Feature Grid with Accordion -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
        <div
          v-for="(feature, idx) in features"
          :key="feature.title"
          class="bg-primary-50 flex flex-col items-start gap-6 lg:gap-10 p-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md"
          role="button"
          :tabindex="0"
          :aria-expanded="feature.expanded"
          :aria-controls="`feature-detail-${idx}`"
          @click="toggleFeature(idx)"
          @keydown.enter="toggleFeature(idx)"
          @keydown.space.prevent="toggleFeature(idx)"
        >
          <!-- Icon Box -->
          <div class="bg-primary rounded-[4px] overflow-hidden w-10 h-10 lg:w-[47px] lg:h-[47px] flex items-center justify-center shrink-0" aria-hidden="true">
            <img src="/images/icon-document.svg" alt="" class="w-5 h-5 lg:w-6 lg:h-6" />
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-4 items-start w-full">
            <div class="flex flex-col gap-2 items-start w-full">
              <div class="flex items-center justify-between w-full">
                <h3 class="font-bold text-lg lg:text-2xl text-black capitalize tracking-[-0.72px]">
                  {{ feature.title }}
                </h3>
                <svg
                  class="w-5 h-5 text-primary transition-transform duration-300 shrink-0 ml-2"
                  :class="{ 'rotate-180': feature.expanded }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p class="font-medium text-sm text-text-body capitalize leading-6">
                {{ feature.description }}
              </p>
            </div>

            <!-- Expandable Detail -->
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-40 opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-40 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-show="feature.expanded" :id="`feature-detail-${idx}`" class="overflow-hidden">
                <p class="text-sm text-text-body leading-6 border-t border-primary/10 pt-3">
                  {{ feature.detail }}
                </p>
              </div>
            </Transition>

            <a
              href="#cta"
              class="font-semibold text-sm text-primary capitalize hover:opacity-80 transition-opacity inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
              @click.stop
            >
              get started
              <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = reactive([
  {
    title: 'AI-powered Flag Creation',
    description: 'Our AI analyzes your user base, traffic patterns, and historical data to suggest optimal rollout strategies automatically',
    detail: 'Leverage machine learning to predict the best rollout percentages, identify risky deployments, and auto-generate feature flag configurations from your codebase.',
    expanded: false,
  },
  {
    title: 'Smart Targeting',
    description: 'Advanced user segmentation with real-time behavioral analysis ensures your features reach the most engaged audience.',
    detail: 'Create dynamic user segments based on real-time behavior, geography, device type, and custom attributes. Our targeting engine updates in milliseconds.',
    expanded: false,
  },
  {
    title: 'Flag Cleanup',
    description: 'Keep your codebase clean with intelligent flag lifecycle management that removes technical debt automatically',
    detail: 'Automatically detect stale flags, unused toggles, and permanent flags that should be removed. Get actionable cleanup recommendations with one-click removal.',
    expanded: false,
  },
  {
    title: 'Environment & A/B Testing',
    description: 'Multi-environment support with sophisticated A/B testing framework gives you confidence in every release.',
    detail: 'Run statistically significant experiments across development, staging, and production. Built-in analytics provide clear winner determination.',
    expanded: false,
  },
])

function toggleFeature(idx: number) {
  features[idx].expanded = !features[idx].expanded
}
</script>
