<template>
  <section class="relative w-full h-auto min-h-[176px] bg-primary overflow-hidden" aria-label="Limited time offer countdown">
    <!-- Polygon background -->
    <div class="absolute left-[10%] -top-[364px] w-[1178px] h-[1178px] flex items-center justify-center opacity-20 pointer-events-none" aria-hidden="true">
      <img src="/images/polygon-bg.svg" alt="" class="w-[998px] h-[998px] rotate-[-168deg]" />
    </div>

    <!-- Content -->
    <div class="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[51px] text-white py-8 lg:py-0 lg:h-[176px] section-padding">
      <p class="font-poppins font-medium text-sm sm:text-base lg:text-xl leading-[1.2] max-w-[865px] text-center lg:text-left">
        $1/month for your first year. Normally $10/month. Sign up before September 15, 2025.
      </p>

      <!-- Countdown Timer -->
      <div class="flex items-center gap-3 sm:gap-4 text-center text-white shrink-0" role="timer" aria-label="Time remaining until offer ends">
        <div
          v-for="unit in countdownUnits"
          :key="unit.label"
          class="bg-accent flex flex-col items-center justify-center gap-1 sm:gap-[7px] p-2 rounded-xl w-[60px] sm:w-[77px]"
        >
          <span class="font-semibold text-lg sm:text-2xl" :aria-label="`${unit.value} ${unit.label.toLowerCase()}`">{{ unit.value }}</span>
          <span class="font-normal text-xs sm:text-base" aria-hidden="true">{{ unit.label }}</span>
        </div>
      </div>
    </div>

    <!-- Texture Overlay -->
    <div
      class="absolute inset-0 mix-blend-overlay opacity-35 pointer-events-none"
      :style="{ backgroundImage: 'url(/images/texture.png)', backgroundSize: '106px 106px' }"
      aria-hidden="true"
    />
  </section>
</template>

<script setup lang="ts">
const targetDate = new Date('2025-09-15T00:00:00')

const countdownUnits = ref([
  { label: 'DAYS', value: '00' },
  { label: 'HRS', value: '00' },
  { label: 'MIN', value: '00' },
  { label: 'SEC', value: '00' },
])

function updateCountdown() {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()
  if (diff <= 0) return

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const secs = Math.floor((diff % (1000 * 60)) / 1000)

  countdownUnits.value = [
    { label: 'DAYS', value: String(days).padStart(2, '0') },
    { label: 'HRS', value: String(hrs).padStart(2, '0') },
    { label: 'MIN', value: String(mins).padStart(2, '0') },
    { label: 'SEC', value: String(secs).padStart(2, '0') },
  ]
}

let timer: ReturnType<typeof setInterval>

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
