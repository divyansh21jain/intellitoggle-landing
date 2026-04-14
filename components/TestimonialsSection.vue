<template>
  <section
    id="testimonials"
    class="bg-primary-50 w-full section-padding py-14 lg:py-20 overflow-hidden"
    aria-labelledby="testimonials-heading"
  >
    <div class="flex flex-col items-center gap-10 lg:gap-16 max-w-[1284px] mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-[18px] text-center text-primary w-full">
        <h2 id="testimonials-heading" class="font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-none w-full">
          What Customers Say About Us
        </h2>
        <p class="font-normal text-base lg:text-xl leading-[1.5] w-full">
          Stay updated with our groundbreaking research discoveries and scientific publications
        </p>
      </div>

      <!-- Testimonial Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <blockquote
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-[#fefeff] border-2 border-[#fffafa] flex flex-col items-start justify-center gap-8 min-h-[276px] overflow-hidden px-6 lg:px-[30px] py-8 lg:py-10 rounded shadow-testimonial transition-transform duration-300 hover:-translate-y-1"
        >
          <p class="font-normal italic text-base lg:text-xl text-[#101010] leading-[1.5]">
            {{ testimonial.quote }}
          </p>
          <div class="flex items-center gap-5 w-full">
            <NuxtImg
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-14 h-14 lg:w-[69px] lg:h-[69px] rounded-full object-cover shrink-0"
              loading="lazy"
              format="webp"
              quality="80"
              width="69"
              height="69"
            />
            <div class="flex flex-col items-start justify-center gap-1">
              <cite class="font-jakarta font-bold text-base text-[#121316] not-italic leading-[1.32]">
                {{ testimonial.name }}
              </cite>
              <span class="font-normal text-sm text-[#1a1a1a] leading-[1.25]">
                {{ testimonial.role }}
              </span>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'Intellitoggle cut our launch risk dramatically. We ship confidently every day."',
    name: 'Eng. Chima Umeh',
    role: 'CTO, Nova',
    avatar: '/images/testimonial-1.png',
  },
  {
    quote: '"Our PMs now control rollouts without waiting on dev cycles. Huge win."',
    name: 'John Kennedy',
    role: 'Head of Product, EdgeFlow',
    avatar: '/images/testimonial-2.png',
  },
  {
    quote: '"Experiments are painless and data-driven. Engagement up 12% in two weeks."',
    name: 'Dan Harry',
    role: 'Software Engineer, Nova',
    avatar: '/images/testimonial-3.png',
  },
]
</script>
