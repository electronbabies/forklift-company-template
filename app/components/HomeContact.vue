<script setup lang="ts">
const contactItems = [
  {
    label: 'Call',
    value: '(704) 893-2878',
    href: 'tel:+17048932878',
  },
  {
    label: 'Email',
    value: 'Contact JV Equipment',
    href: 'mailto:info@jvequipment.com',
  },
  {
    label: 'Service',
    value: 'Sales · Rentals · Service · Parts',
    href: '#',
  },
]
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-[var(--color-footer-bg)]"
  >
    <div
      class="pointer-events-none absolute -right-24 -top-32
             size-[620px] rounded-full bg-white/10 blur-[120px]"
    />

    <div
      class="relative mx-auto max-w-[1440px]
             px-6 py-24 lg:px-10 lg:py-28"
    >
      <div
        class="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]
               lg:items-end"
      >
        <div>
          <div
            class="mb-5 flex items-center gap-3 text-xs font-bold
                   uppercase tracking-[0.24em] text-white/70"
          >
            <span class="h-px w-8 bg-white/70" />
            Let’s Talk Equipment
          </div>

          <h2
            class="max-w-4xl text-4xl font-black
                   tracking-[-0.04em] text-white
                   sm:text-5xl lg:text-7xl"
          >
            Ready to put the right
            equipment to work?
          </h2>

          <p
            class="mt-7 max-w-2xl text-lg leading-8 text-white/75"
          >
            Talk with JV Equipment about sales, rentals, service,
            parts, or the material handling needs of your operation.
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="tel:+17048932878"
              class="inline-flex w-full items-center justify-center
                     bg-white px-7 py-4 text-sm font-black
                     text-[var(--color-primary)]
                     transition hover:-translate-y-0.5
                     sm:w-auto"
            >
              Call (704) 893-2878
            </a>

            <NuxtLink
              to="/contact"
              class="inline-flex w-full items-center justify-center
                     border border-white/30 px-7 py-4
                     text-sm font-bold text-white
                     transition hover:bg-white/10
                     sm:w-auto"
            >
              Request a Quote
            </NuxtLink>
          </div>
        </div>

        <div
          class="border-l border-t border-white/20
                 lg:justify-self-end lg:min-w-[420px]"
        >
          <a
            v-for="item in contactItems"
            :key="item.label"
            :href="item.href"
            class="group flex items-center justify-between
                   border-b border-r border-white/20
                   px-6 py-5 text-white"
          >
            <div>
              <div
                class="text-[10px] font-bold uppercase
                       tracking-[0.2em] text-white/55"
              >
                {{ item.label }}
              </div>

              <div class="mt-1 font-bold">
                {{ item.value }}
              </div>
            </div>

            <span
              class="text-xl transition-transform
                     group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
