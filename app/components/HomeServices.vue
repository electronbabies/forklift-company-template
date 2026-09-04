<script setup lang="ts">
const services = [
  {
    title: 'Equipment Sales',
    eyebrow: 'New + Used',
    description:
      'Material handling equipment from trusted manufacturers, selected around the demands of your operation.',
    image: '/images/services/sales.webp',
    to: '/equipment',
  },
  {
    title: 'Rentals',
    eyebrow: 'Short + Long Term',
    description:
      'Flexible rental options when you need additional capacity without the long-term commitment.',
    image: '/images/services/rentals.webp',
    to: '/rentals',
  },
  {
    title: 'Service',
    eyebrow: 'Keep Moving',
    description:
      'Experienced technicians, preventive maintenance, and repairs that keep your equipment productive.',
    image: '/images/services/service.webp',
    to: '/service',
  },
  {
    title: 'Parts',
    eyebrow: 'Support',
    description:
      'The parts and support needed to minimize downtime and keep your fleet on the floor.',
    image: '/images/services/parts.webp',
    to: '/parts',
  },
]
</script>

<template>
  <section
    class="border-y border-[var(--color-border)]
           bg-[var(--color-surface)]"
  >
    <div class="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
      <div
        class="mb-14 flex flex-col justify-between gap-8
               lg:flex-row lg:items-end"
      >
        <div>
          <div
            class="mb-5 flex items-center gap-3 text-xs font-bold
                   uppercase tracking-[0.24em]
                   text-[var(--color-primary)]"
          >
            <span class="h-px w-8 bg-[var(--color-primary)]" />
            What We Do
          </div>

          <h2
            class="max-w-3xl text-4xl font-black tracking-[-0.04em]
                   sm:text-5xl lg:text-6xl"
          >
            Everything your operation
            <span class="text-[var(--color-primary)]">
              needs to keep moving.
            </span>
          </h2>
        </div>

        <p
          class="max-w-md text-base leading-7
                 text-[var(--color-text-muted)]"
        >
          Sales, rentals, service, and parts backed by decades of
          material handling experience.
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-2">
        <NuxtLink
          v-for="service in services"
          :key="service.title"
          :to="service.to"
          class="group relative min-h-[420px] overflow-hidden
                 border border-[var(--color-border)]
                 bg-[var(--color-bg)] sm:min-h-[360px]"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="service-card-image absolute inset-0 size-full object-cover
                   transition duration-500 group-hover:scale-[1.03]"
          >

          <div
            class="service-card-overlay absolute inset-0"
          />

          <div
            class="absolute inset-x-0 bottom-0 z-10 p-8
                   lg:p-10"
          >
            <div
              class="mb-3 text-xs font-bold uppercase
                     tracking-[0.2em]
                     text-[var(--color-primary)]"
            >
              {{ service.eyebrow }}
            </div>

            <div class="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-8">
              <div>
                <h3
                  class="text-3xl font-black tracking-[-0.03em]
                         lg:text-4xl"
                >
                  {{ service.title }}
                </h3>

                <p
                  class="mt-4 max-w-lg leading-7
                         text-[var(--color-text-muted)]"
                >
                  {{ service.description }}
                </p>
              </div>

              <div
                class="flex size-12 shrink-0 items-center justify-center
                       border border-[var(--color-border)]
                       text-xl transition
                       group-hover:border-[var(--color-primary)]
                       group-hover:bg-[var(--color-primary)]"
              >
                →
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
